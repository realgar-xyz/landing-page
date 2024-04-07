import Bg1 from '../../assets/bg1.png'
import Bg2 from '../../assets/bg2.png'
import Bg3 from '../../assets/bg3.png'

export default function Generative() {
  const assets = [
    {
      src: Bg1
    },
    {
      src: Bg2
    },
    {
      src: Bg3
    }
  ]
  return (
    <div className="relative overflow-hidden  dark:bg-slate-800 ">
      <div className="h-screen sm:pt-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg ">
            <h1 className="text-4xl font-bold tracking-tight text-realgar sm:text-6xl">
              Unleash Your Story
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Embark on a journey where your choices pave the path to unique
              adventures. Realgar Platform is the canvas for creators and gamers
              to weave immersive experiences, bringing every{' '}
              <a
                title="Wikipedia Choose Your Own Adventure"
                href="https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure"
                target="_blank"
                rel="noreferrer"
                className="text-realgar"
              >
                Choose Your Own Adventure
              </a>{' '}
              story to life.
            </p>
            <p className="mt-4 text-xl text-gray-300">
              Here, every decision is a brushstroke on the vibrant tapestry of
              your narrative. With cutting-edge AI and robust blockchain
              technology, Realgar empowers you to not just step into new worlds
              but to shape them.
            </p>
            <p className="mt-4 text-xl text-gray-300">
              Your quest for adventure begins now—forge your saga, leave your
              mark, and transform the way stories unfold. Join the Realgar
              Platform, where every tale is an odyssey waiting to be discovered.
            </p>
          </div>
          <div>
            <div className="my-10">
              <div
                aria-hidden="true"
                className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {assets.map((asset, index) => (
                      <div
                        key={`cont-img-${index}`}
                        className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                      >
                        <div
                          key={`img-${index}`}
                          className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src={`${asset.src}`}
                            alt=""
                            className="size-full bg-indigo-100 object-cover object-center"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
