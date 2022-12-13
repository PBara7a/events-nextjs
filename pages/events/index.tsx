import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../utilities/apiUtils";
import { Event } from "../../types";

type EventsPageProps = {
  events: Array<Event>;
};

function EventsPage({ events }: EventsPageProps) {
  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
