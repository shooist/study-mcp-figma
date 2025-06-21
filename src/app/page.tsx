export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          映画館へようこそ
        </h1>
        <p className="text-center text-lg mb-4">
          Next.js + Tailwind CSS のセットアップが完了しました！
        </p>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <p className="text-blue-800">
            映画館のホームページ開発を開始できます
          </p>
        </div>
      </div>
    </main>
  )
}