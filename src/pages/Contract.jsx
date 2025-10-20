import NavBar from "../components/NavBar";
import profile001 from "../assets/Profile01.png";
import location from "../assets/location.png";
import workplace from "../assets/workplace.png";

export default function Contact() {
  const cc = { color: "yellow" };
  return (
    <>
      <NavBar cc={cc} />
      
      <div className="text-white mt-30 ml-50 px-10 text-5xl font-bold">
        <h1 style={{ fontFamily: "Lora" }}>Contact</h1>
      </div>

      <div className="text-white flex items-center justify-center mt-10 text-3xl" style={{ fontFamily: "Lora" }}>
        Let's Connect
      </div>

      <div className="text-gray-400 flex items-center justify-center mt-10 text-2xl font-bold">
        Don't be stranger! Say hello and let's collaborate
      </div>

      <div className="flex items-start justify-center mt-50 gap-60 text-gray-200 text-xl" style={{ fontFamily: "Lora" }}>
        
        <div className="flex flex-col items-center">
          <img src={profile001} alt="profile" className="w-40 h-auto" />
          <h1 className="mt-5">s6752410006@sau.ac.th</h1>
        </div>

        <div className="flex flex-col items-center">
          <img src={location} alt="location" className="w-40 h-auto" />
          <h1 className="mt-5">Thailand, Bangkok</h1>
        </div>

        <div className="flex flex-col items-center">
          <img src={workplace} alt="workplace" className="w-40 h-auto" />
          <h1 className="mt-5">Aztr0 SAU</h1>
        </div>

      </div>
    </>
  );
}