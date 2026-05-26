import { NavLink } from "react-router"
import { useContext } from "react"
import { LocationContext } from "../Context/LocationContext"

export default function Navbar() {
  const {activeBtn, inactiveBtn} = useContext(LocationContext)

    return (
    <div>
      <nav className="bg-slate-400 p-4 flex justify-between items-center ">
        <p className="text-slate-200 font-bold">Carina's Event Scheduler</p>
        <ul className="flex flex-col gap-3 md:flex-row">
            <li><NavLink to="/" className={({isActive}) => isActive ? activeBtn : inactiveBtn} >Home</NavLink></li>
            <li><NavLink to="/createevent" className={({isActive}) => isActive ? activeBtn : inactiveBtn} >Create Event</NavLink></li>
            <li><NavLink to="/signin" className={({isActive}) => isActive ? activeBtn : inactiveBtn} >Sign In</NavLink></li>
            <li><NavLink to="/signup" className={({isActive}) => isActive ? activeBtn : inactiveBtn} >Sign Up</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}



