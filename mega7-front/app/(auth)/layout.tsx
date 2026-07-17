import "../globals.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 relative">
      <div className="relative z-10 flex items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}
