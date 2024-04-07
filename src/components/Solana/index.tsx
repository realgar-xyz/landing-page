import solanaImage from '../../assets/solana_section.png'

export default function Solana() {
  return (
    <div className="relative overflow-hidden  dark:bg-slate-800 ">
      <div className="h-screen sm:pb-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="w-full text-center ">
            <h1 className="pb-12 text-4xl font-bold tracking-tight text-realgar sm:text-6xl">
              Embrace the Power of Solana
            </h1>
            <div
              key="img-solana"
              className="h-64 w-full overflow-hidden rounded-lg px-24 pb-1 sm:opacity-0 lg:opacity-100"
            >
              <img
                src={`${solanaImage}`}
                alt="Solana Image"
                className="size-full bg-indigo-100 object-cover object-center"
              />
            </div>
            <p className="mt-12 px-24 text-xl text-gray-300">
              Dive into the new era of digital collectibles and interactive
              gaming experiences with Realgar Platform`s integration of Solana
              blockchain.
            </p>
            <p className="mt-4 px-24 text-xl text-gray-300">
              Our partnership unleashes unparalleled potential for gamers and
              creators alike, revolutionizing how you play, trade, and preserve
              your in-game achievements.
            </p>
            <h2 className="px-24 pt-12  text-4xl font-bold tracking-tight text-realgar">
              Create, Trade, and Preserve with Gaming NFTs
            </h2>
            <p className="mt-6 px-24  pb-12 text-xl text-gray-300">
              With Realgar Platform, embark on adventures, accumulate rare
              assets, and build your legacy in a gaming world where every action
              is immortalized. Solana`s cutting-edge blockchain technology
              ensures that your virtual experiences are more tangible and
              valuable than ever before.
            </p>
            <button className="rounded bg-indigo-700 px-6 py-3 text-white hover:bg-realgar">
              Join the whitelist for Beta Testing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
