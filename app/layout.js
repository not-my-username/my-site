import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hi, I\'m Liam',
  description: 'All about me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " dark flex flex-col justify-between min-h-screen"}>{children}</body>
    </html>
  )
}
