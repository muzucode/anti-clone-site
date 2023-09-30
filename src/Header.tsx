export default function Header() {
  return (
    <>
      <div className='flex lg:flex-row mb-6 mt-6 md:flex-col text-[#FFFDD0]'>
        {/* Image */}
        <img src='./public/placeholder.jpg' className='w-36 mr-8'/>
        <div className='flex flex-col justify-center'>
          <h1 className='mb-6 text-3xl font-bold'>Welcome to Terra Firma Planning, LLC</h1>
          <h2 className='italic text-sm'>Unlock the Potential of Your Land Development Projects</h2>
        </div>
      </div>

      <ul className='flex flex-row mb-4 border-b border-orange-400 pb-2'>
          <li className='mr-8 text-orange-300'><a href="about-us">About</a></li>
          <li className='mr-8 text-orange-300'><a>Services</a></li>
          <li className='mr-8 text-orange-300'><a>Why Choose Us</a></li>
          <li className='mr-8 text-orange-300'><a>Get Started</a></li>
        </ul>
    </>
  )
}
