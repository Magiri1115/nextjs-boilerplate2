// import Card from "../components/Card";

export default function Blog() {
  return (
    <main>
      <h1>Our Blog</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        <Card title="Blog 1" text="Description of blog 1" />
        <Card title="Blog 2" text="Description of blog 2" />
        <Card title="Blog 3" text="Description of blog 3" />
      </div>
    </main>
  );
}
