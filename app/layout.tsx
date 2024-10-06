import type { Metadata } from "next";
import "./globals.css";
import { FlightSearchProvider } from "@/context/FlightContext";
import localFont from "next/font/local";
export const metadata: Metadata = {
  title: "Booking Ticket Website",
  description: "A Website for your quickest flight needs....!!!",
};
const neueMontreal = localFont({
  src: [
    {
      path: "fonts/NeueMontreal-Light.otf",
      weight: "300",
    },
    {
      path: "fonts/NeueMontreal-Regular.otf",
      weight: "400",
    },
    {
      path: "fonts/NeueMontreal-Medium.otf",
      weight: "500",
    },
    {
      path: "fonts/NeueMontreal-Bold.otf",
      weight: "600",
    },
  ],
  variable: "--font-neueMontreal",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-neueMontreal font-normal ${neueMontreal.variable}`}
      >
        <FlightSearchProvider>{children}</FlightSearchProvider>
      </body>
    </html>
  );
}
