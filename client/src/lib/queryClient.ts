import { QueryClient } from "@tanstack/react-query";

const staticServices = [
  {
    id: 1,
    name: "Professional Dry Cleaning",
    description: "State-of-the-art dry cleaning services for all your delicate and special garments.",
    price: "From $8.99",
    imageUrl: "/src/images/cleaners.gif"
  },
  {
    id: 2,
    name: "Wash & Fold",
    description: "Convenient laundry service with professional washing, drying, and folding.",
    price: "$2.99/lb",
    imageUrl: "/src/images/wash-fold.gif"
  },
  {
    id: 3,
    name: "Wedding Gowns",
    description: "Specialized cleaning and preservation services for wedding gowns.",
    price: "From $99.99",
    imageUrl: "/src/images/wedding-gown.gif"
  }
];

export const getServices = () => staticServices;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false
    }
  }
});

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => import("@tanstack/react-query").QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
    async ({ queryKey }) => {
      const res = await fetch(queryKey[0] as string, {
        credentials: "include",
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      return await res.json();
    };