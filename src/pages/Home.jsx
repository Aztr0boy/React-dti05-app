import NavBar from '../components/NavBar'
import profile from '../assets/Profile.png'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'

export default function Home() {
    const hc = {color : "Green"}

  return (
    <>
      <NavBar hc={hc} />
      <div className='flex items-center justify-center mt-20'>
        <div className='text-white'>
          <h1 style = {{fontFamily: 'Lora'}}className='text-4xl'>FrontEnd Web</h1>
          <h1 style = {{fontFamily : 'Lora'}}>Developer</h1>
          <br />
          <span>
            Hi, I'm Aztr0. Your Personal Slave Developer
          </span>
          <br />
          <span>
            Developer From China
          </span>
          <div className='flex mt-5'>
          <FaLinkedinIn className='mr-5 text-3xl bg-white text-black p-2 rounded-2xl'/>
          <FaGithub className='mr-5 text-3xl bg-white text-black p-1 rounded-2xl'/>
          </div>
        </div>
                  <div className ='ml-20'>
            <img className ='w-50' src={profile} alt='profile' />
          </div>
      </div>
      <div className='flex item-center justify-center mt-20'>
        <h1 style={{fontFamily :'Inter'}} className='text-3xl text-white'>My Tech Stack </h1>
      </div>

      <div className='flex item-center justify-center mt-20 pb-10'>
        <img className="w-7 mx-2" src={img1} alt='figma'/>
        <img className="w-7 mx-2" src={img2} alt='java'/>
        <img className="w-7 mx-2" src={img3} alt='firebase'/>
        <img className="w-7 mx-2" src={img4} alt='js'/>
        <img className="w-7 mx-2" src={img5} alt='springboot'/>
        <img className="w-7 mx-2" src={img6} alt='css'/>
        <img className="w-7 mx-2" src={img7} alt='html'/>
        <img className="w-7 mx-2" src={img8} alt='node'/>
        <img className="w-7 mx-2" src={img9} alt='react'/>
      </div>
    </>
  )
}