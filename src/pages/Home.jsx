import { useEffect, useState } from "react"
import EventList from "../components/EventList";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (()=>{
    const getEvents = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('http://localhost:3001/api/events');
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        setEvents(data.results);
      } catch (e) {
        setError('Failed to fetch Events.');
        console.error(e)
      } finally {
        setLoading(false);
      }
      
    }
    getEvents()
    }, [])

  if (loading)
    return <div>
<span>Loading...</span>
    </div>

  if (error)
    return <div>
      <span>{error}</span>
    </div>
  return (
      <EventList events={events}/>
  )
}


