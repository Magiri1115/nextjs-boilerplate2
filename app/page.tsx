import Button from "./components/Button";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0070F3, #79FFE1)",
        color: "#fff",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1>Welcome to My Website</h1>
      <p style={{ maxWidth: "600px", margin: "16px 0" }}>
        This is the hero section. Adjusts by device layout.
      </p>
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </main>
  );
}