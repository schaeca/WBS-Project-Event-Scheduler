import { useContext } from "react"
import { NavigationContext } from "../Context/NavigationContext"

export default function EventCard({event}) {
const {navigate} = useContext(NavigationContext) 
  return (
    
      <div onClick = {()=> navigate(`/events/${event.id}`)} className="border p-2 px-4 w-60 rounded-md shadow-md bg-slate-400">
        <h2 className="font-bold text-xl">{event.title}</h2>
      <p>{new Date(event.date).toLocaleDateString('de-DE')}</p>
    
        </div>
      
  )
}

