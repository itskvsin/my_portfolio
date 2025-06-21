export default function Hero() {
    return (
<div className='w-full flex justify-center bg-black'>
<div className="w-3/4">
<section
        id="home"
        className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 py-16"
      >
        <div className="mb-10 md:mb-0">
          <img
            src="src\assets\Images\meWithoutBg.png"
            alt="Profile"
            className="w-80 h-full rounded-lg bg-black object-fill   object-left  shadow-lg"
          />
        </div>
  
        <div className="max-w-lg text-left">
          <div>
          <h2 className="text-xl md:text-5xl font-bold mb-4">Hi,</h2>
          <div className="flex gap-2 text-2xl">
          <p>I'm</p> <p className="text-blue-400">Kevin 👋</p>
          </div>
          </div>
          <p className="text-lg font-medium">
            I'm a <span className="text-blue-400">Frontend Developer</span> who builds beautiful, responsive websites using:
          </p>
          <p className="mt-2 text-gray-300">React, HTML, CSS, and JavaScript</p>
        </div>
      </section>
</div>
</div>
    );
  }
  