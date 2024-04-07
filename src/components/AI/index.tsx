import aiImage from '../../assets/AI.png'

export default function AI() {
  return (
    <div className="relative overflow-hidden  dark:bg-slate-800 ">
      <div className="h-screen w-full">
        <div className="flex w-full flex-row px-4 lg:px-8 ">
          <div className="flex w-1/3 flex-col lg:pt-80">
            <div>
              <div className="lg:right-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div
                    key="img-ai"
                    className="h-64 w-full overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                  >
                    <img
                      src={aiImage}
                      alt="AI Image"
                      className="size-full bg-indigo-100 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-1/2 flex-col justify-start text-center lg:pt-20">
            <div className="mx-auto pl-40">
              <h1 className="pb-6 text-right text-4xl font-bold tracking-tight text-realgar sm:text-6xl">
                Harness the Power of Machine Learning
              </h1>
              <p className="mt-4 pb-6 text-right text-xl text-gray-300">
                At Realgar Platform, AI is more than a tool, it`s your creative
                co-pilot. Transforming your ideas into reality, our AI
                seamlessly integrates into your journey, enhancing your ability
                to create complex, enthralling adventures with ease.
              </p>
              <ul className="sm:text-md list-disc text-right text-gray-300">
                <li>
                  Intuitive Design Assistance - Generate vivid worlds and
                  characters with AI-guided design.
                </li>
                <li>
                  Story Development - Let AI suggest plot developments and
                  narrative twists.
                </li>
                <li>
                  Dynamic Content Generation - From text to imagery, AI helps
                  you create content that captivates.
                </li>
                <li>
                  Analytical Insights - Use AI to understand player choices and
                  tailor experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
