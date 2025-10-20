import NavBar from "../components/NavBar";
import bike from "../assets/bike.png";
import learnify from "../assets/Learnify.png";
import figma from "../assets/Figma.png";
import edtech from "../assets/edtech.png";
import { FaGithub } from 'react-icons/fa'; 


export default function Portfolio() {
  const pc = { color: "green" };

  return (
    <>
      <NavBar pc={pc} />

      <div className="mt-20 ml-40 px-10">
        <h1 className="text-white text-3xl font-bold" style={{ fontFamily: "Lora" }}>
          Portfolio
        </h1>
      </div>

      <div className="flex text-white mt-10 ml-60 items-start gap-100">

        <img src={bike} alt="bike" />

        <div className="flex flex-col pt-10"> 

          <h2 className="ml-40 text-3xl font-semibold mb-6" style={{ fontFamily: "Lora" }}>
            Bikes and Beards
          </h2>

          <span className="text-base max-w-xl text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non.
          </span>

          <div className="ml-40 flex gap-15 mt-8">

            <button className="border border-white py-2 px-6 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
              View
            </button>

            <button className="flex items-center gap-2 py-2 px-6 text-white hover:text-yellow-400 transition duration-300">
              <FaGithub className="text-xl" />
              <span>Git code</span>
            </button>

          </div>
        </div>
      </div>

      <div className="flex text-white mt-60 ml-60 items-start gap-100">
        <div className="flex flex-col pt-10"> 

          <h2 className="ml-50 text-3xl font-semibold mb-6" style={{ fontFamily: "Lora" }}>
            Learnify
          </h2>

          <span className="text-base max-w-xl text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non.
          </span>

          <div className="ml-35 flex gap-15 mt-8">

            <button className="border border-white py-2 px-6 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
              View
            </button>

            <button className="flex items-center gap-2 py-2 px-6 text-white hover:text-yellow-400 transition duration-300">
              <FaGithub className="text-xl" />
              <span>Git code</span>
            </button>

          </div>
        </div>

        <img className="mt-10"src={learnify} alt="bike" />
      </div>

      <div className="flex text-white mt-60 ml-60 items-start gap-100">

        <img className="mt-20"src={figma} alt="figma" />

        <div className="flex flex-col pt-10"> 

          <h2 className="ml-50 text-3xl font-semibold mb-6" style={{ fontFamily: "Lora" }}>
            Anime-X
          </h2>

          <span className="text-base max-w-xl text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non.
          </span>

          <div className="ml-40 flex gap-15 mt-8">

            <button className="border border-white py-2 px-6 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
              View
            </button>

            <button className="flex items-center gap-2 py-2 px-6 text-white hover:text-yellow-400 transition duration-300">
              <FaGithub className="text-xl" />
              <span>Git code</span>
            </button>

          </div>
        </div>
      </div>
      
     <div className="flex text-white mt-60 ml-60 items-start gap-100">
        <div className="flex flex-col pt-10"> 

          <h2 className="ml-50 text-3xl font-semibold mb-6" style={{ fontFamily: "Lora" }}>
            Tech-Z
          </h2>

          <span className="text-base max-w-xl text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non.
          </span>

          <div className="ml-35 flex gap-15 mt-8">

            <button className="border border-white py-2 px-6 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
              View
            </button>

            <button className="flex items-center gap-2 py-2 px-6 text-white hover:text-yellow-400 transition duration-300">
              <FaGithub className="text-xl" />
              <span>Git code</span>
            </button>

          </div>
        </div>
        <img className="mt-10 mb-40"src={edtech} alt="edtech" />
      </div>
    </>
  );
}
