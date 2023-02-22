import Head from "next/head";
import EventList from "../components/events/EventList";
import { Event } from "../types";
import { getFeaturedEvents } from "../utilities/apiUtils";

type HomePageProps = {
  featuredEvents: Array<Event>;
};

function HomePage({ featuredEvents }: HomePageProps) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find events to better yourself." />
      </Head>
      <EventList events={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents: Array<Event> = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 600,
  };
}

export default HomePage;
