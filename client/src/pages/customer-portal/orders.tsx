import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  Package, 
  Search, 
  Truck, 
  Filter,
  ChevronRight,
  Loader2,
  ArrowLeft
} from "lucide-react";

export default function CustomerOrders() {
  const { user } = useAuth();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Fetch orders
  const { data: orders, isLoading } = useQuery({
    queryKey: ["/api/orders"],
    enabled: !!user,
  });
  
  // Filter and search orders
  const filteredOrders = orders?.filter(order => {
    // Filter by status
    const statusMatch = statusFilter === "all" ? true : order.status === statusFilter;
    
    // Search by service type or other criteria
    const searchMatch = searchTerm === "" ? true : 
      order.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.pickupDate.toLowerCase().includes(searchTerm.toLowerCase());
    
    return statusMatch && searchMatch;
  }) || [];
  
  // Group orders by status for the tabs
  const pendingOrders = filteredOrders.filter(order => 
    order.status === "pending" || order.status === "processing"
  );
  
  const completedOrders = filteredOrders.filter(order => 
    order.status === "completed" || order.status === "delivered"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <Link href="/portal">
                <Button variant="outline" size="sm" className="mb-2">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-neutral-900">My Orders</h1>
              <p className="text-neutral-600 mt-1">
                View and track all your cleaning orders
              </p>
            </div>
            <Link href="/schedule">
              <Button className="bg-[#F9A826] hover:bg-[#E89212] text-white">
                Schedule New Pickup
              </Button>
            </Link>
          </div>
          
          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="flex items-center w-full md:w-auto">
                  <Filter className="mr-2 h-4 w-4 text-neutral-500" />
                  <Select
                    value={statusFilter}
                    onValueChange={setStatusFilter}
                  >
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Orders Tabs */}
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : filteredOrders.length > 0 ? (
                <div className="space-y-4">
                  {filteredOrders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Package className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-neutral-700 mb-2">No Orders Found</h3>
                    <p className="text-neutral-600 mb-6">
                      {searchTerm || statusFilter !== "all" 
                        ? "Try adjusting your filters to see more results" 
                        : "You haven't placed any orders yet"}
                    </p>
                    {!searchTerm && statusFilter === "all" && (
                      <Link href="/schedule">
                        <Button className="bg-[#F9A826] hover:bg-[#E89212] text-white">
                          Schedule Your First Pickup
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="active">
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : pendingOrders.length > 0 ? (
                <div className="space-y-4">
                  {pendingOrders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Truck className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-neutral-700 mb-2">No Active Orders</h3>
                    <p className="text-neutral-600 mb-6">
                      You don't have any pending or in-process orders at the moment
                    </p>
                    <Link href="/schedule">
                      <Button className="bg-[#F9A826] hover:bg-[#E89212] text-white">
                        Schedule a Pickup
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="completed">
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : completedOrders.length > 0 ? (
                <div className="space-y-4">
                  {completedOrders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Package className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-neutral-700 mb-2">No Completed Orders</h3>
                    <p className="text-neutral-600 mb-6">
                      Your order history will appear here once orders are completed
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

const OrderCard = ({ order }: { order: any }) => {
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
  
  return (
    <Card className="hover:shadow-md transition duration-200">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="p-4 md:w-2/3 flex-1">
            <div className="flex items-start">
              <div className="hidden sm:block mr-4">
                {order.status === "pending" || order.status === "processing" ? (
                  <Truck className="h-10 w-10 text-primary" />
                ) : (
                  <Package className="h-10 w-10 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-lg">
                      Order #{order.id.toString().padStart(6, '0')}
                    </h3>
                    <p className="text-neutral-600 mt-1">
                      {order.serviceType.split('-').map((word: string) => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)} mt-2 sm:mt-0 inline-block sm:inline`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                  <div className="flex items-center text-neutral-600 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Pickup: {formatDate(order.pickupDate)}</span>
                  </div>
                  <div className="flex items-center text-neutral-600 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{order.pickupTime}</span>
                  </div>
                  {order.deliveryDate && (
                    <div className="flex items-center text-neutral-600 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Delivery: {formatDate(order.deliveryDate)}</span>
                    </div>
                  )}
                </div>
                
                {order.notes && (
                  <div className="mt-3 text-sm text-neutral-600">
                    <p className="line-clamp-1">Notes: {order.notes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="border-t md:border-t-0 md:border-l border-neutral-200 p-4 md:w-1/3 md:text-center flex justify-between md:block">
            <div className="text-sm text-neutral-600 mb-2">
              Order Date: <span className="font-medium">{formatDate(order.createdAt)}</span>
            </div>
            <Button variant="outline" className="text-primary hover:text-primary-dark hover:bg-primary/5">
              View Details
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
