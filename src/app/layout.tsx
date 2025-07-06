import { LanguageProvider } from "@/context/language_context";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      </head>
      <body>
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
