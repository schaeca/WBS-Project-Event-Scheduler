
export default function EventCard({event}) {
  return (
    
      <div className="border p-2 px-4 w-60 rounded-md shadow-md bg-slate-400 min-h-50">
        <h2 className="font-bold text-xl">{event.title}</h2>
      <p>{new Date(event.date).toLocaleDateString('de-DE')}</p>
      <p className="font-bold italic">{event.location}</p>
      <br/>
      <p className="">{event.description}</p>
      <br/>
      {/* <p className="text-sm bg-slate-400 text-white p-2 shadow-sm">{new Date(event.date).toString()}</p> */}
        </div>
      
  )
}

