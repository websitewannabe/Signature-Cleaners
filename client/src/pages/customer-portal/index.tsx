import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Package, User, FileText, Settings, Home, Truck, ArrowRight, Loader2 } from "lucide-react";

export default function CustomerPortal() {
  const { user } = useAuth();
  const [_, navigate] = useLocation();
  
  // Fetch user orders
  const { data: orders, isLoading: ordersLoading } = useQuery({
    queryKey: ["/api/orders"],
    enabled: !!user,
  });
  
  // Format greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };
  
  // Calculate recent and upcoming orders
  const recentOrders = orders?.filter(order => 
    order.status === "completed" || order.status === "delivered"
  ).slice(0, 3) || [];
  
  const upcomingOrders = orders?.filter(order => 
    order.status === "pending" || order.status === "processing"
  ).slice(0, 3) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900">
              {getGreeting()}, {user?.fullName || user?.username}
            </h1>
            <p className="text-neutral-600 mt-2">
              Welcome to your customer dashboard. Manage your orders and account here.
            </p>
          </div>
          
          {/* Dashboard Navigation */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <DashboardNavCard 
              icon={<Package className="h-6 w-6" />}
              title="My Orders"
              description="View and track your cleaning orders"
              linkTo="/portal/orders"
            />
            <DashboardNavCard 
              icon={<User className="h-6 w-6" />}
              title="Account Settings"
              description="Manage your personal information"
              linkTo="/portal/account"
            />
            <DashboardNavCard 
              icon={<Calendar className="h-6 w-6" />}
              title="Schedule Pickup"
              description="Book a new cleaning appointment"
              linkTo="/schedule"
            />
          </div>
          
          {/* Orders Overview */}
          <div className="mb-8">
            <Tabs defaultValue="upcoming">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-neutral-900">Your Orders</h2>
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="upcoming">
                {ordersLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : upcomingOrders.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingOrders.map((order) => (
                      <OrderCard 
                        key={order.id}
                        order={order}
                        type="upcoming"
                      />
                    ))}
                    <div className="text-center pt-2">
                      <Link href="/portal/orders">
                        <Button variant="outline">
                          View All Orders
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-neutral-600 mb-4">You don't have any upcoming orders.</p>
                      <Link href="/schedule">
                        <Button className="bg-[#F9A826] hover:bg-[#E89212] text-white">
                          Schedule a Pickup
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="recent">
                {ordersLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : recentOrders.length > 0 ? (
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <OrderCard 
                        key={order.id}
                        order={order}
                        type="recent"
                      />
                    ))}
                    <div className="text-center pt-2">
                      <Link href="/portal/orders">
                        <Button variant="outline">
                          View Order History
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-neutral-600 mb-4">You don't have any recent orders.</p>
                      <Link href="/schedule">
                        <Button className="bg-[#F9A826] hover:bg-[#E89212] text-white">
                          Place Your First Order
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <ActionCard 
                icon={<Calendar className="h-5 w-5" />}
                title="Schedule Pickup"
                linkTo="/schedule"
              />
              <ActionCard 
                icon={<FileText className="h-5 w-5" />}
                title="View Price List"
                linkTo="/services"
              />
              <ActionCard 
                icon={<Settings className="h-5 w-5" />}
                title="Update Preferences"
                linkTo="/portal/account"
              />
              <ActionCard 
                icon={<Home className="h-5 w-5" />}
                title="Update Address"
                linkTo="/portal/account"
              />
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

const DashboardNavCard = ({ icon, title, description, linkTo }: { 
  icon: React.ReactNode; 
  title: string;
  description: string;
  linkTo: string;
}) => (
  <Link href={linkTo}>
    <Card className="cursor-pointer hover:shadow-md transition duration-200">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg mr-4">
            <div className="text-primary">{icon}</div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-neutral-900">{title}</h3>
            <p className="text-neutral-600 text-sm mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </Link>
);

const OrderCard = ({ order, type }: { order: any; type: "upcoming" | "recent" }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "processing": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "delivered": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  const getOrderIcon = () => {
    if (type === "upcoming") {
      return <Truck className="h-10 w-10 text-primary" />;
    } else {
      return <Package className="h-10 w-10 text-primary" />;
    }
  };
  
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="mr-4 hidden sm:block">
            {getOrderIcon()}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-neutral-900">
                  {order.serviceType.split('-').map((word: string) => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </h3>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center text-neutral-600 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(order.createdAt)}</span>
                  </div>
                  <div className="flex items-center text-neutral-600 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{order.pickupTime}</span>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-neutral-600">
                {type === "upcoming" ? "Scheduled for:" : "Completed on:"}
                <span className="font-medium"> {formatDate(order.pickupDate)}</span>
              </span>
              <Link href={`/portal/orders/${order.id}`}>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ActionCard = ({ icon, title, linkTo }: { 
  icon: React.ReactNode; 
  title: string;
  linkTo: string;
}) => (
  <Link href={linkTo}>
    <Card className="cursor-pointer hover:shadow-md transition duration-200">
      <CardContent className="p-4 flex items-center">
        <div className="text-primary mr-3">
          {icon}
        </div>
        <span className="font-medium">{title}</span>
      </CardContent>
    </Card>
  </Link>
);
