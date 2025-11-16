import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import Header from "@/components/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { theme } from "../theme/theme";

export const metadata: Metadata = {
  title: "Commute Compute",
  description: "Find out how much of your life is lost to your commute.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppRouterCacheProvider >
          <ThemeProvider theme={theme} defaultMode="dark">
            <Header />
            <div className="component-container p-8 dark:text-white dark:bg-gray-800">
              {children}
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
