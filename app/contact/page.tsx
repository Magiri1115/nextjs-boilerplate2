export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-6 space-y-6">
      {/* Icon + Email */}
      {/* Instruction */}
      <p className="text-white leading-relaxed">宛先・件名・用件を書いて下のメールアドレスに送信してください。</p>
      <div className="flex items-center space-x-4">
        <img src="/icons/gmail.svg" alt="Gmail" className="w-12 h-12" />
        <p className="text-lg font-semibold text-white">busmagiri6@gmail.com</p>
      </div>
    </div>
  );
}