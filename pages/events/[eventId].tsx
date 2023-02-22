import Head from "next/head";
import { Event } from "../../types";
import { getEventById, getFeaturedEvents } from "../../utilities/apiUtils";
import EventSummary from "../../components/event-detail/EventSummary";
import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";

type EventDetailPageProps = {
  event: Event;
};

function EventDetailPage({ event }: EventDetailPageProps) {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
}

export async function getStaticProps(context: { params: { eventId: string } }) {
  const { eventId } = context.params;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: true,
  };
}

export default EventDetailPage;
