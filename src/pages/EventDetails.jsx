import { useEffect, useState } from "react";
import { useParams } from "react-router"
import EventInfo from "../components/EventInfo";

export default function EventDetails() {
  const {id} = useParams()
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (()=>{
    const getSpecificEvent = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`http://localhost:3001/api/events/${id}`);
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        setEvent(data);
      } catch (e) {
        setError('Failed to fetch Pokémon.');
        console.error(e)
      } finally {
        setLoading(false);
      }
      
    }
    getSpecificEvent()
    }, [])

if (loading)
    return <div>
<span>Loading...</span>
    </div>

if (error)
  return <div><span>{error}</span></div>

  return (
    <div className="bg-slate-300 min-h-max">
      <EventInfo key={id} event={event}/>
    </div>
  )
}


