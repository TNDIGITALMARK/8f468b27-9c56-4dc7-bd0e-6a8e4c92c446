import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ZyloProvider } from "@/lib/zylo/provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/green-bar/Navigation";
import Footer from "@/components/green-bar/Footer";

export const metadata: Metadata = {
  title: "Green Bar Haifa | Premier Rooftop Lounge & Cocktail Bar",
  description: "Experience Haifa's premier lounge. Craft cocktails, live music evenings, and stunning rooftop terrace with city views. Located on Sha'ar Ha-Levanon Street 8.",
  keywords: "Green Bar, Haifa bar, rooftop bar, cocktail bar, live music Haifa, craft cocktails, lounge Haifa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <QueryProvider>
          <ZyloProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                <Navigation />
                <main className="pt-20">
                  {children}
                </main>
                <Footer />
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </ThemeProvider>
          </ZyloProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
