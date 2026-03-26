import "./globals.css";

export const metadata = {
  title: "Shanmukh · Portfolio",
  description:
    "Personal portfolio of Shanmukh — developer, designer, and maker of things.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090909] text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
