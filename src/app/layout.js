import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen bg-[#040a1c]`}>
        {/* Global Background Gradient - FIXED so it stays visible while scrolling */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

        {/* Floating Circles - FIXED so they stay visible while scrolling */}
        <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0"></div>
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0"></div>

        {/* Page Content */}
        <div className="relative z-10">
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
