import { useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  User,
  Key,
  Home,
  CreditCard,
  Loader2,
  Check,
  Shield,
} from "lucide-react";

// Profile update schema
const profileSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().optional(),
  address: z.string().optional(),
});
type ProfileFormValues = z.infer<typeof profileSchema>;

// Password update schema
const passwordSchema = z.object({
  currentPassword: z.string().min(1, { message: "Current password is required" }),
  newPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function AccountPage() {
  const { toast } = useToast();
  const { user, logoutMutation } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  
  // Initialize profile form with user data
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: user?.fullName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
  });
  
  // Initialize password form
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  
  // Profile update mutation
  const profileMutation = useMutation({
    mutationFn: async (data: ProfileFormValues) => {
      const res = await apiRequest("PATCH", `/api/user/${user?.id}`, data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user"] });
      toast({
        title: "Profile Updated",
        description: "Your profile information has been successfully updated.",
      });
    },
    onError: (error) => {
      toast({
        title: "Update Failed",
        description: error.message || "There was a problem updating your profile.",
        variant: "destructive",
      });
    },
  });
  
  // Password update mutation
  const passwordMutation = useMutation({
    mutationFn: async (data: PasswordFormValues) => {
      const res = await apiRequest("PATCH", `/api/user/${user?.id}/password`, {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Password Updated",
        description: "Your password has been successfully changed.",
      });
      passwordForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Update Failed",
        description: error.message || "There was a problem updating your password.",
        variant: "destructive",
      });
    },
  });
  
  // Handle profile form submission
  const onProfileSubmit = (data: ProfileFormValues) => {
    profileMutation.mutate(data);
  };
  
  // Handle password form submission
  const onPasswordSubmit = (data: PasswordFormValues) => {
    passwordMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="mb-8">
            <Link href="/portal">
              <Button variant="outline" size="sm" className="mb-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-neutral-900">Account Settings</h1>
            <p className="text-neutral-600 mt-1">
              Manage your account information and preferences
            </p>
          </div>
          
          {/* Account Tabs */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="md:col-span-1">
              <CardContent className="p-4">
                <nav className="space-y-1">
                  <NavButton 
                    icon={<User className="h-5 w-5" />} 
                    label="Profile" 
                    active={activeTab === "profile"}
                    onClick={() => setActiveTab("profile")}
                  />
                  <NavButton 
                    icon={<Key className="h-5 w-5" />} 
                    label="Password" 
                    active={activeTab === "password"}
                    onClick={() => setActiveTab("password")}
                  />
                  <NavButton 
                    icon={<Home className="h-5 w-5" />} 
                    label="Addresses" 
                    active={activeTab === "addresses"}
                    onClick={() => setActiveTab("addresses")}
                  />
                  <NavButton 
                    icon={<CreditCard className="h-5 w-5" />} 
                    label="Payment Methods" 
                    active={activeTab === "payment"}
                    onClick={() => setActiveTab("payment")}
                  />
                  <Separator className="my-4" />
                  <Button 
                    variant="destructive" 
                    className="w-full justify-start"
                    onClick={() => logoutMutation.mutate()}
                    disabled={logoutMutation.isPending}
                  >
                    {logoutMutation.isPending ? (
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    )}
                    Logout
                  </Button>
                </nav>
              </CardContent>
            </Card>
            
            <div className="md:col-span-3">
              {activeTab === "profile" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal information and contact details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...profileForm}>
                      <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                        <FormField
                          control={profileForm.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={profileForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={profileForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={profileForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="pt-2">
                          <Button 
                            type="submit"
                            className="bg-primary hover:bg-primary-dark"
                            disabled={profileMutation.isPending}
                          >
                            {profileMutation.isPending ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              <>
                                <Check className="mr-2 h-4 w-4" />
                                Save Changes
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "password" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...passwordForm}>
                      <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                        <FormField
                          control={passwordForm.control}
                          name="currentPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={passwordForm.control}
                          name="newPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>New Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={passwordForm.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Confirm New Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="pt-2">
                          <Button 
                            type="submit"
                            className="bg-primary hover:bg-primary-dark"
                            disabled={passwordMutation.isPending}
                          >
                            {passwordMutation.isPending ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Updating...
                              </>
                            ) : (
                              <>
                                <Key className="mr-2 h-4 w-4" />
                                Update Password
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <div className="flex">
                        <Shield className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-blue-800">Password Security Tips</h4>
                          <ul className="mt-2 text-sm text-blue-700 space-y-1 list-disc pl-5">
                            <li>Use at least 8 characters</li>
                            <li>Include a mix of letters, numbers, and symbols</li>
                            <li>Avoid using easily guessable information</li>
                            <li>Don't reuse passwords from other sites</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "addresses" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Addresses</CardTitle>
                    <CardDescription>
                      Manage your pickup and delivery addresses
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center py-12">
                    <div className="max-w-md mx-auto">
                      <Home className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-neutral-700 mb-2">No Saved Addresses</h3>
                      <p className="text-neutral-600 mb-6">
                        You haven't saved any addresses yet. Add an address for quicker checkout.
                      </p>
                      <Button className="bg-primary hover:bg-primary-dark">
                        Add New Address
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "payment" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>
                      Manage your saved payment methods
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center py-12">
                    <div className="max-w-md mx-auto">
                      <CreditCard className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-neutral-700 mb-2">No Payment Methods</h3>
                      <p className="text-neutral-600 mb-6">
                        You haven't saved any payment methods yet. Add a payment method for faster checkout.
                      </p>
                      <Button className="bg-primary hover:bg-primary-dark">
                        Add Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

const NavButton = ({ 
  icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) => (
  <button
    type="button"
    className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
      active 
        ? 'bg-primary text-white' 
        : 'text-neutral-700 hover:bg-neutral-100'
    }`}
    onClick={onClick}
  >
    <span className="mr-3">{icon}</span>
    <span className="font-medium">{label}</span>
  </button>
);
