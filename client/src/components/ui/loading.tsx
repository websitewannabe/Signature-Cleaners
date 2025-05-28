
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F5F0]">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#790003]"></div>
        <p className="text-[#790003] font-medium">Loading...</p>
      </div>
    </div>
  );
}
