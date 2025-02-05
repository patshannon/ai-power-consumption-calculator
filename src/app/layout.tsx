import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: "AI Power Consumption Calculator",
  description: "Simple calculator to show the power consumed and environmental impacts of AI queries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        <div className='container mx-auto py-10 px-2'>
          {children}
        </div>
      </body>
    </html>
  );
}
