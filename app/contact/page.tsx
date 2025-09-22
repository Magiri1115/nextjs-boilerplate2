export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-6 space-y-6">
      {/* Icon + Email */}
      {/* Instruction */}
      <p className="text-white leading-relaxed text-center max-w-xl">
        宛先・件名・用件を書いて下のメールアドレスに
        <span className="whitespace-nowrap">送信してください。</span><br />
        3営業日以内に追ってご連絡いたします。
      </p>
      <div className="flex items-center space-x-4">
        <img src="/icons/gmail.svg" alt="Gmail" className="w-12 h-12" />
        <p className="text-lg font-semibold text-white">busmagiri6@gmail.com</p>
      </div>
    </div>
  );
}