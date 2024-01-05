export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-gray-100 text-gray-800 justify-between">
      <img src='./favicon.ico' className='w-20 h-20' />
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