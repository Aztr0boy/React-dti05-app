import { Link } from "react-router-dom";

export default function NavBar({hc , ac, pc, cc}) {
  return (
    <div className="flex justify-around items-center bg-black text-white py-3">
      <h1 className="text-4xl font-extrabold">Aztr0 SAU</h1>
      <Link style={hc} to="/">Home</Link>
      <Link style={ac} to="/about">About</Link>
      <Link style={pc}to="/portfolio">Portfolio</Link>
      <Link stule={cc} to="/contract" className="border border-white py-2 px-6">
      Let's Talk
      </Link>
    </div>
  )
}
