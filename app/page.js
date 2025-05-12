// app/page.js
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1
          style={{
            fontWeight: "normal",
            color: "#444",
            marginBottom: "20px",
          }}
        ></h1>
        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
            fontSize: "16px",
          }}
        >
          <br />
        </p>
      </div>
    </div>
  );
}
