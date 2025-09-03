// import Card from "../components/Card";

export default function Services() {
  return (
    <main>
      <h1>Our Services</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        <Card title="Service 1" text="Description of service 1" />
        <Card title="Service 2" text="Description of service 2" />
        <Card title="Service 3" text="Description of service 3" />
      </div>
    </main>
  );
}
