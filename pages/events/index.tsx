import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";
import { Event } from "../../types";

const events: Array<Event> = getAllEvents();

function EventsPage() {
  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
