import AppLayout from "@/components/AppLayout";

export default function Layout({ children }) {
  return (
    <AppLayout>
     <div className="bg-blue-400 w-screen h-screen flex items-center justify-center text-xs">
      {children}
     </div>
    </AppLayout>
  );
}
