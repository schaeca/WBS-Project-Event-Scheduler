import EventCard from "./EventCard"

export default function EventList({events}) {
  return (
    <div className="flex flex-wrap justify-center items-start gap-3 p-2">
     {events.map((event)=>{return <EventCard event = {event}/>})}  
    </div>
  )
}
