export default function EventInfo({ event }) {
  return (
    <div className="flex justify-around items-end p-2 pb-6">
      <div className="p-2">
        <h2 className="text-2xl font-bold pb-2">
          #{event.id} {event.title}
        </h2>
        <p className="">Date: {new Date(event.date).toLocaleDateString("de-DE")} </p>
        <p className="font-bold italic pb-2">
          Location: {event.location} (Longitude: {event.longitude}, Latitude:{" "}
          {event.latitude})
        </p>
        <p>{event.description}</p>
      </div>
      <div className="p-2 rounded-md bg-slate-400 border">
        <p>Organized by: {event.organizerId}</p>
        <p>Created: {new Date(event.createdAt).toLocaleDateString("de-DE")} </p>
        <p>
          Last updated: {new Date(event.updatedAt).toLocaleDateString("de-DE")}
        </p>
      </div>
    </div>
  );
}
