import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Information = () => {
  return (
    <section id="about" className=" h-screen bg-black text-white py-16 px-8">
      <div className="container w-full mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-full flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-center">
            👨‍💻 Meet Your Developer
          </h2>
          <div className="flex items-center justify-evenly">
            {/* Image Section */}
            <div className="md:w-2/4 object-contain flex justify-center">
              <img
                src="src\assets\Images\upscaledImage-removebg-preview1.png"
                alt="Kevin"
                className="w-96 h-96 bg-black rounded-lg shadow-2xl object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-2/4">
              <p className="text-lg leading-relaxed">
                Hi, I'm Kevin — a frontend developer who builds beautiful and
                functional websites using React, HTML, CSS, and JavaScript.
                Passionate about clean code and smooth user experiences, I love
                transforming ideas into responsive and engaging web apps.
              </p>

              <div className="flex gap-4 text-lg mt-4">
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:yourmail@example.com"
                    className="underline cursor-pointer"
                  >

                  <FaEnvelope className="text-xl hover:text-blue-900" />
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    className="underline "
                  >

                  <FaLinkedin className="text-xl hover:text-blue-500" />
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/yourgithub"
                    className="underline"
                  >

                  <FaGithub className="text-xl hover:text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Information;
