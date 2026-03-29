import { NextResponse } from "next/server";

// Signature Cleaners at Doylestown Google Place ID
// To find yours: https://developers.google.com/maps/documentation/places/web-service/place-id-finder
const PLACE_ID = "ChIJGMWDHDGoxxIRUlcpNw"; // Update with real Place ID

interface GoogleReview {
  authorAttribution?: { displayName?: string };
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  originalText?: { text?: string };
}

interface PlaceDetailsResponse {
  reviews?: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
}

export async function POST(request: Request) {
  try {
    // Verify secret to prevent unauthorized calls
    const { secret } = await request.json();
    if (secret !== process.env.REVIEW_SYNC_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GOOGLE_PLACES_API_KEY not configured" },
        { status: 500 }
      );
    }

    // Google Places API (New): fetch place details with reviews
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&key=${apiKey}`;

    const res = await fetch(url, {
      headers: {
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
      },
    });

    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json(
        { error: "Google API error", details: error },
        { status: res.status }
      );
    }

    const data: PlaceDetailsResponse = await res.json();

    // Transform Google reviews into our format
    const reviews = (data.reviews || [])
      .filter((r) => r.rating && r.rating >= 4 && r.text?.text)
      .map((r) => ({
        name: r.authorAttribution?.displayName || null,
        text: r.originalText?.text || r.text?.text || "",
        rating: r.rating || 5,
        source: "google" as const,
        timeDescription: r.relativePublishTimeDescription || "",
      }));

    return NextResponse.json({
      success: true,
      reviewCount: data.userRatingCount || 0,
      averageRating: data.rating || 0,
      reviews,
    });
  } catch (error) {
    console.error("Review sync error:", error);
    return NextResponse.json(
      { error: "Failed to sync reviews" },
      { status: 500 }
    );
  }
}

// GET endpoint for the carousel to fetch cached/live reviews
export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  // If no API key, return empty (carousel will use static fallback)
  if (!apiKey) {
    return NextResponse.json({ reviews: [], reviewCount: 0, averageRating: 0 });
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&key=${apiKey}`;

    const res = await fetch(url, {
      headers: {
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
      },
      next: { revalidate: 604800 }, // Cache for 1 week (seconds)
    });

    if (!res.ok) {
      return NextResponse.json({
        reviews: [],
        reviewCount: 0,
        averageRating: 0,
      });
    }

    const data: PlaceDetailsResponse = await res.json();

    const reviews = (data.reviews || [])
      .filter((r) => r.rating && r.rating >= 4 && r.text?.text)
      .map((r) => ({
        name: r.authorAttribution?.displayName || null,
        text: r.originalText?.text || r.text?.text || "",
        rating: r.rating || 5,
        source: "google" as const,
        timeDescription: r.relativePublishTimeDescription || "",
      }));

    return NextResponse.json({
      reviews,
      reviewCount: data.userRatingCount || 0,
      averageRating: data.rating || 0,
    });
  } catch {
    return NextResponse.json({ reviews: [], reviewCount: 0, averageRating: 0 });
  }
}
