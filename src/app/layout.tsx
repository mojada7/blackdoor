import './globals.css'
import localFont from 'next/font/local'

const iranSans = localFont({
  src : '../../public/fonts/IRANSansXV.woff2',
  display : 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" className={iranSans.className}>
      <body>{children}</body>
    </html>
  )
}
