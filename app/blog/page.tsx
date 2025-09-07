export default function BlogPage() {
  const contacts = [
    {
      label: "X (Twitter)",
      href: "https://x.com/Magiri2001",
      icon: "/icons/x.svg",
    },
    {
      label: "Email",
      href: "mailto:busmagiri6@example.com",
      icon: "/icons/gmail.svg",
    },
    {
      label: "GitHub",
      href: "https://github.com/Magiri1115",
      icon: "/icons/github.svg",
    },
    {
      label: "Discord",
      icon: "/icons/discord.svg",
    },
  ];

  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {contacts.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 text-xl text-blue-500 hover:underline"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-7 h-7 inline-block"
              />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
