import PopupWindow from "@/components/shell/PopupWindow";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_60%)]" />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
        <PopupWindow />
      </div>
    </main>
  );
}