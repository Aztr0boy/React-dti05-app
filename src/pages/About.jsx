import React from 'react'
import NavBar from '../components/NavBar'
import loader_01 from '../assets/loader_01.png'

export default function about() {
  const  ac = {color :"Green"}
  return (
    <>
      <NavBar ac={ac} />
      <div className="flex items-start justify-center mt-50 gap-70 px-10">
        <div className="text-white text-center">
          <h1 style={{ fontFamily: "Lora" }} className="text-3xl font-semibold">
            About me
          </h1>
          <br />
          <div className=" mt-10">
            <img className="w-48 mx-auto rounded-full" src={loader_01} alt="profile" />
          </div>
        </div>

        <div className="text-white max-w-md break-words leading-relaxed" >
          <h1 style={{ fontFamily: "Lora" }}>
            Hi, I'm Aztr0 .Your Personal Slave Developer
          </h1 > 
          <h1 style={{ fontFamily: "Lora" }}>
            Web Developer based in Thailand
            </h1>
          <br />
          <span className="text-gray-500 font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ad quam eveniet, reprehenderit quaerat optio porro deleniti repudiandae eum perferendis, vitae quos, magni qui voluptatibus! Perferendis deserunt aperiam ab eaque sint quod atque quae, quaerat dolore numquam ex facilis odit adipisci eius molestiae porro, incidunt vel cum, esse aliquid fugit debitis tempora dignissimos. Perspiciatis officiis delectus adipisci at a corporis qui aut incidunt eligendi, laboriosam reprehenderit ea. Possimus aliquam cupiditate praesentium quae est, dolorem ullam consequatur soluta modi minus cumque quia accusantium doloremque odio debitis perspiciatis dolore ad, sequi maiores doloribus impedit autem maxime. Nulla sunt voluptate vitae quaerat esse. 
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button className="border-2 border-white py-2 px-6 rounded-3xl text-white hover:bg-white hover:text-black transition duration-300">
          Download CV
        </button>
      </div>
    </>
)
}
