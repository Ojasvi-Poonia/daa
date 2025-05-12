// pages/index.js
export default function Home() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>DAA Java Files</h1>
      <p>This site hosts Java files for algorithm implementations.</p>
      <p>Access files directly using URLs like:</p>
      <code>https://daa.vercel.app/dijkstra.java</code>

      <p style={{ marginTop: "40px", color: "#666" }}>
        Direct directory browsing is disabled for security reasons.
      </p>
    </div>
  );
}
