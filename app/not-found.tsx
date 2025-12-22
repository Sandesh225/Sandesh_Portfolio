import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Glitch Effect Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      <h1 className="text-9xl font-mono font-bold text-primary tracking-tighter opacity-50 select-none">404</h1>
      <div className="z-10 text-center space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">SYSTEM_ERROR: ROUTE_NOT_FOUND</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The requested signal could not be traced. You have ventured into the void.
        </p>
        <Link href="/">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            RETURN TO BASE
          </Button>
        </Link>
      </div>
    </div>
  )
}