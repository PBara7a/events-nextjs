import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const events = getAllEvents();

  return <EventList events={events} />;
}

export default EventsPage;
