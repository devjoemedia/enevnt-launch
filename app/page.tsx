import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen space-bg text-zinc-100 overflow-y-auto">
      <header className="flex fixed  w-full justify-center items-center pt-6">
        <nav className="flex items-center gap-6 rounded-full border border-white/10 max-w-6xl bg-zinc-900/70 px-4 py-2 backdrop-blur mx-auto">
          <Link href="/" className="flex items-center gap-2 rounded-full bg-black px-3 py-1">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-black text-xs font:bold">e</span>
            <span className="font-semibold">elaunch</span>
          </Link>
          <Link href="#" className="text-sm text-zinc-300 hover:text-white">Features</Link>
          <Link href="#" className="text-sm text-zinc-300 hover:text-white">Pricing</Link>
          <div className="ml-2 flex items-center gap-2">
            <Link href="#" className="hidden sm:inline-flex rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Get started free</Link>
            <Link href="#" className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:ring-white/20">Sign in</Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-48 pb-20 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
          <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold">New</span>
          <span>Book a free 15 min demo</span>
        </div>

        <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Organize, Manage and Promote Your Event 
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Payments, user management, forms, surveys and a shareable link.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="rounded-full bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10">eventlaunch.me / reactsummit@2025</div>
          <Link href="#" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500">Get started free</Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="ml-3 text-sm text-zinc-400 rounded-full bg-white/5 px-4 py-2 animate-bounce ring-1 ring-white/10">Join 2,000+ organizers</span>
        </div>
      </main>
    </div>
  );
}
