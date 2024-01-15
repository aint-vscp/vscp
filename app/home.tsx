import Info from '../components/info'

export default function Home() {
  return (
    <main className="flex min-h-full max-w-screen flex-col items-center p-20 justify-between">
      <div className="grid grid-cols-auto-fit items-center justify-center min-h-screen gap-1">
        <div className="relative">
          <p className="font-bold text-4xl p-1">~ Hi I'm Vash</p>
          <p className="p-5">Unleash the potential of your business with VSCP, a dedicated Full Stack Developer and a Cybersecurity Specialist, delivering robust web solutions tailored to your needs. Don’t wait – schedule a meeting today and let’s embark on your journey to digital success together!</p>
          <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-secondary-color border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-secondary-color shadow-secondary-color active:shadow-none">
            <i className="fa fa-calendar p-2"/>
            Schedule a Meeting
          </button>
        </div>
        <Info/>
      </div>
      {/*
      <div className="flex flex-wrap justify-center min-h-full">
        <h1 className="p-3">Services</h1>
        <div className="service-card w-[300px] h-2/3 shadow-xl cursor-pointer snap-start shrink-0 py-6 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#000000" fill="none" viewBox="0 0 24 24" className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400" xmlns="http://www.w3.org/2000/svg">
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>

          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            WEBSITE SEO
          </p>
          <p className="text-gray-400 text-sm">
            Website ravida surna eveti semen the conse tusio anivite dianne one nivam
            acestion vue artin dictum.
          </p>
          <p className="text-5xl font-bold self-end text-transparent text-stroke">
            08
          </p>
        </div>

        <div className="service-card w-[300px] h-1/3 shadow-xl cursor-pointer snap-start shrink-0 py-6 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#000000" fill="none" viewBox="0 0 24 24" className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400" xmlns="http://www.w3.org/2000/svg">
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>

          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            WEBSITE SEO
          </p>
          <p className="text-gray-400 text-sm">
            Website ravida surna eveti semen the conse tusio anivite dianne one nivam
            acestion vue artin dictum.
          </p>
          <p className="text-5xl font-bold self-end text-transparent text-stroke">
            08
          </p>
        </div>

        <div className="service-card w-[300px] h-1/3 shadow-xl cursor-pointer snap-start shrink-0 py-6 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#000000" fill="none" viewBox="0 0 24 24" className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400" xmlns="http://www.w3.org/2000/svg">
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>

          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            WEBSITE SEO
          </p>
          <p className="text-gray-400 text-sm">
            Website ravida surna eveti semen the conse tusio anivite dianne one nivam
            acestion vue artin dictum.
          </p>
          <p className="text-5xl font-bold self-end text-transparent text-stroke">
            08
          </p>
        </div>
      </div>*/}
      <img src='/icon/vscp.ico' className='w-20 h-20'/>
      <h1 className="text-6xl font-bold mt-8">Vash is Here</h1>
      <h2 className="text-3xl mt-4">Underconstruction</h2>
      <div className="spinner-container">
        <div className="spinner">
          <div className="spinner">
            <div className="spinner">
              <div className="spinner">
                <div className="spinner">
                  <div className="spinner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-4">Check my socials instead.</h3>
      <div className="socials flex space-x-4 mt-8">
        <a href="https://www.facebook.com/vscp.dev" target="_blank"><i className="fab fa-facebook-square fa-4x text-blue-600 hover:text-blue-800"></i></a>
        <a href="https://www.linkedin.com/in/vash-puno-259145288/" target="_blank"><i className="fab fa-linkedin fa-4x text-blue-600 hover:text-blue-800"></i></a>
        <a href="https://github.com/aint-vscp" target="_blank"><i className="fab fa-github-square fa-4x text-gray-600 hover:text-gray-800"></i></a>
      </div>
    </main>
  )
}