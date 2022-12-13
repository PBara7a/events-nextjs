import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getFilteredEvents } from "../../utilities/apiUtils";
import { Event } from "../../types";

type FilteredEventsPageProps = {
  events: Array<Event>;
  date: string;
  hasError?: boolean;
};

function FilteredEventsPage({ events, date, hasError = false }: FilteredEventsPageProps) {
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid filter parameters.</p>
        </ErrorAlert>
        <div className="center">
          <Button path="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!events.length) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filters!</p>
        </ErrorAlert>
        <div className="center">
          <Button path="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </>
  );
}

type ServerSideProps = {
  params: {
    slug: Array<string>;
  };
};

export async function getServerSideProps({ params }: ServerSideProps) {
  const filterData = params.slug;

  const year: number = Number(filterData[0]);
  const month: number = Number(filterData[1]);

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({ year, month });

  return {
    props: {
      events: filteredEvents,
      date: `${year}/${month}`,
    },
  };
}

export default FilteredEventsPage;
