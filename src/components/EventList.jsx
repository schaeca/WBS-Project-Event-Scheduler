import EventCard from "./EventCard"

export default function EventList({events}) {
  const sortedEvents = [...events].sort((a,b)=> new Date(a.date) - new Date(b.date))
  return (
    <div className="flex flex-wrap justify-start items-start gap-3 p-2">
     {sortedEvents.map((event)=>{return <EventCard key = {event.id} event = {event}/>})}  
    </div>
  )
}
