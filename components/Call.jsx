import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function Call() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col lg:flex-row">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Special Occasion?</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
               We can make a custom treat tray for any occasion. Just let us know what you want and we will make it happen!
              </p>
            </div>
          </div>
          <div 
            className="w-full lg:w-[90rem] h-[400px] rounded-xl shadow-xl ring-1 ring-gray-400/10 bg-cover bg-center md:-ml-4 lg:-ml-0"
            style={{ backgroundImage: `url('treattrays.jpeg')` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
