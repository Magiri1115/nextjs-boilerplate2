// import Card from "../components/Card";

export default function Portfolio() {
  return (
    <main>
      <h1>Our Services</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        <Card title="Portfolio 1" text="Description of portfolio 1" />
        <Card title="Portfolio 2" text="Description of portfolio 2" />
        <Card title="Portfolio 3" text="Description of portfolio 3" />
      </div>
    </main>
  );
}
