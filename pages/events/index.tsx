import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../utilities/apiUtils";
import { getAllEventYears } from "../../utilities/years";
import { Event } from "../../types";
import Head from "next/head";

type EventsPageProps = {
  events: Array<Event>;
  years: Array<number>;
};

function EventsPage({ events, years }: EventsPageProps) {
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find events to better yourself." />
      </Head>
      <EventSearch years={years} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  const years = await getAllEventYears();

  return {
    props: {
      events,
      years,
    },
    revalidate: 60,
  };
}

export default EventsPage;
