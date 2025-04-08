import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useIsMobile } from "@/hooks/use-mobile";

// Form validation schema
const scheduleSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  serviceType: z.string().min(1, { message: "Please select a service" }),
  pickupDate: z.string().min(1, { message: "Pickup date is required" }),
  pickupTime: z.string().min(1, { message: "Pickup time is required" }),
  notes: z.string().optional(),
});

type ScheduleFormValues = z.infer<typeof scheduleSchema>;

export default function SchedulePage() {
  const { toast } = useToast();
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");

  // Initialize form with user data if available
  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      fullName: user?.fullName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      serviceType: "",
      pickupDate: "",
      pickupTime: "",
      notes: "",
    },
  });

  // Schedule form submission
  const scheduleMutation = useMutation({
    mutationFn: async (data: ScheduleFormValues) => {
      const res = await apiRequest("POST", "/api/schedule", data);
      return res.json();
    },
    onSuccess: (data) => {
      setConfirmationNumber(data.confirmationNumber);
      setIsSuccess(true);
      window.scrollTo(0, 0);
      toast({
        title: "Success!",
        description: "Your pickup has been scheduled.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          "There was a problem scheduling your pickup. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ScheduleFormValues) => {
    scheduleMutation.mutate(data);
  };

  // Get today's date for min date on date picker
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#424B4D] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Schedule a Pickup
            </h1>
            <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Book a convenient time for us to collect your garments.
            </p>
          </div>
        </div>
      </section>

      {/* Scheduling Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                Pickup Scheduled Successfully!
              </h2>
              <p className="text-green-700 mb-4">
                Thank you for scheduling a pickup with Signature Cleaners. We'll
                be there at your selected time.
              </p>
              <p className="text-green-700 mb-6">
                Your confirmation number:{" "}
                <span className="font-bold">{confirmationNumber}</span>
              </p>
              <div className="space-y-4">
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary hover:bg-primary-dark text-white"
                >
                  Schedule Another Pickup
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-neutral-50 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(555) 123-4567"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123 Main St, Anytown, ST"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dry-cleaning">
                              Dry Cleaning
                            </SelectItem>
                            <SelectItem value="wash-fold">
                              Wash & Fold
                            </SelectItem>
                            <SelectItem value="alterations">
                              Alterations & Repairs
                            </SelectItem>
                            <SelectItem value="multiple">
                              Multiple Services
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="pickupDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pickup Date</FormLabel>
                          <FormControl>
                            <Input type="date" min={today} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pickupTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pickup Time</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">
                                Morning (8AM - 12PM)
                              </SelectItem>
                              <SelectItem value="afternoon">
                                Afternoon (12PM - 5PM)
                              </SelectItem>
                              <SelectItem value="evening">
                                Evening (5PM - 8PM)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Instructions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any special instructions or details about your items..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#790003] hover:bg-[#5a0002] text-white font-medium py-3"
                    disabled={scheduleMutation.isPending}
                  >
                    {scheduleMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Scheduling...
                      </>
                    ) : (
                      "Schedule Pickup"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section (when not on mobile) */}
      {!isMobile && !isSuccess && (
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
                Our simple pickup and delivery process
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-md mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  Schedule
                </h3>
                <p className="mt-2 text-neutral-600">
                  Book your pickup online or by phone
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-md mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  Pickup
                </h3>
                <p className="mt-2 text-neutral-600">
                  We collect your garments from your door
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-md mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  Clean
                </h3>
                <p className="mt-2 text-neutral-600">
                  Your items receive expert care
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-md mb-4">
                  <span className="text-primary text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  Deliver
                </h3>
                <p className="mt-2 text-neutral-600">
                  We return your fresh, clean garments
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
