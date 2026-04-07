import './globals.css'

export const metadata = {
  title: 'The Sixth Advanced Arab Astrophysics School 2026',
  description: 'A premier hands-on astrophysics school at Kottamia Observatory, Egypt — October 23–29, 2026. Organized by the National Research Institute of Astronomy and Geophysics.',
  keywords: 'astrophysics, astronomy, school, Egypt, Kottamia, NRIAG, Arab, postgraduate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
