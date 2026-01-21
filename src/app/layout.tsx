import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
      <div className="sticky top-0 z-20 border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-80)] backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Nav />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-14 px-6 py-10 sm:gap-16 sm:py-12">
          {children}
        </main>
        <div className="mx-auto w-full max-w-6xl px-6 pb-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
