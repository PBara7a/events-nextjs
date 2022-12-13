import EventList from "../components/events/EventList";
import { Event } from "../types";
import { getFeaturedEvents } from "../utilities/apiUtils";

type HomePageProps = {
  featuredEvents: Array<Event>;
};

function HomePage({ featuredEvents }: HomePageProps) {
  return <EventList events={featuredEvents} />;
}

export async function getStaticProps() {
  const featuredEvents: Array<Event> = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
  };
}

export default HomePage;
