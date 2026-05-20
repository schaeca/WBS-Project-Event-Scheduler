import { LocationContext } from "./LocationContext"

export default function LocationProvider({children}) {
    const activeBtn = "border border-white-100 p-1 px-2 rounded-md bg-slate-700 text-white"
    const inactiveBtn = "border border-slate-700 p-1 px-2 rounded-md bg-slate-200 hover:bg-slate-600 hover:border-white hover:text-white" 
  return (
    <LocationContext value={{activeBtn, inactiveBtn}}>
      {children}
    </LocationContext>
  )
}

