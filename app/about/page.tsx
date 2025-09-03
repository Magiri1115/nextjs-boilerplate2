// import Card from "../components/Card";

export default function About() {
  return (
    <main>
      <h1>Our About</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        <Card title="About 1" text="Description of about 1" />
        <Card title="About 2" text="Description of about 2" />
        <Card title="About 3" text="Description of about 3" />
      </div>
    </main>
  );
}
