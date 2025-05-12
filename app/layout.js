// app/layout.js
export const metadata = {
  title: "Google",
  description: "Google page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fff",
          color: "#333",
        }}
      >
        {children}
      </body>
    </html>
  );
}
