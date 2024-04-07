import backgroundImage from '../../assets/landing.webp'

export default function Header() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50">
        {/* Container for content */}
        <div className="mx-auto flex h-screen w-3/4 flex-col items-center pt-40">
          <div className="flex w-3/4 flex-col items-center justify-center bg-black/70 py-12">
            <h1 className="mb-4 text-7xl font-bold text-realgar">
              Realgar Platform
            </h1>
            <p className="mb-6 pb-2 text-3xl text-gray-300">
              Unleashing Creativity with AI & Solana Blockchain
            </p>
            <button className="rounded bg-indigo-700 px-6 py-3 text-white hover:bg-realgar">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
