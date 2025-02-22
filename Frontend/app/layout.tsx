import type { Metadata } from "next"
import { Inter, Poppins, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Header from "@/components/ui/Header"

const inter = Inter({ subsets: ["latin"] })

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "TNP Cell BBDNITM",
  description: "Training and Placement Cell of BBDNITM",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  )
}

import './globals.css'