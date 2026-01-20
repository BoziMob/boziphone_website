import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
      <div className="sticky top-0 z-20 border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-80)] backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Nav />
        </div>
      </div>
      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-10 sm:gap-16 sm:py-12">
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default RootLayout;
