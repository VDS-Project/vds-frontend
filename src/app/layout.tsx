import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/contexts/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "VDS | Workforce & Outsourcing Solutions for Industrial and Business Growth",
    template: "%s | VDS",
  },
  description:
    "VDS is Thailand's leading workforce and outsourcing solutions provider for industrial estates and large enterprises. We deliver trusted, high-quality staffing and manpower supply services to support your business growth.",
  keywords: [
    "VDS",
    "Workforce Solutions",
    "Industrial Staffing",
    "Workforce Thailand",
    "Outsourcing Services",
    "Workforce Management",
    "Manpower Supply",
    "Industrial Estate Staffing",
    "Human Resource Solutions",
    "Employee Outsourcing",
  ],
  authors: [{ name: "VDS Co., Ltd." }],
  creator: "VDS Co., Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vds.co.th",
    title: "VDS | Workforce & Outsourcing Solutions",
    description:
      "Thailand's leading workforce and outsourcing solutions provider.",
    siteName: "VDS",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VDS Workforce Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VDS | Workforce & Outsourcing Solutions",
    description:
      "Thailand's leading workforce and outsourcing solutions provider.",
    images: ["/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Bootstrap */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />

        {/* Theme CSS */}
        <link rel="stylesheet" href="/css/theme.css" />
        <link rel="stylesheet" href="/css/theme-elements.css" />
        <link rel="stylesheet" href="/css/theme-blog.css" />
        <link rel="stylesheet" href="/css/theme-shop.css" />
        <link
          rel="stylesheet"
          href="css/demos/demo-transportation-logistic.css"
        ></link>
        <link
          rel="stylesheet"
          href="/css/skins/skin-transportation-logistic.css"
        />
        <link rel="stylesheet" href="/css/custom.css" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable,
          playfair.variable
        )}
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
