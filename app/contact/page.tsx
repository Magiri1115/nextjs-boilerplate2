export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-6 space-y-10">
      {/* 説明文 */}
      <p className="text-[#FFA85C] leading-relaxed text-center max-w-xl">
        宛先・件名・用件を書いて下のメールアドレスに<br />
        送信してください。<br />
        3営業日以内に追ってご連絡いたします。
      </p>
      {/* 共通レイアウト（縦並び） */}
      <div className="flex flex-col items-center space-y-10 w-full max-w-xl">
        {/* Gmail */}
        <div className="flex flex-col items-center space-y-4">
          <img src="/icons/gmail.svg" alt="Gmail" className="w-12 h-12" />
          <p className="text-lg font-semibold text-white">busmagiri6@gmail.com</p>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-[#FFA85C] font-semibold mt-8 text-center">
            コードレビューお待ちしております
          </p>
          <a
            href="https://github.com/Magiri1115"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:opacity-80 transition-opacity"
          >
            <img src="/icons/github.svg" alt="GitHub" className="w-12 h-12" />
            <p className="text-lg font-semibold text-white">Magiri1115</p>
          </a>
        </div>
      </div>
    </div>
  );
}
