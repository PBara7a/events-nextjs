import { NextRouter, useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import { getFilteredEvents } from "../../dummy-data";
import { Event } from "../../types";

function FilteredEventsPage() {
  const router: NextRouter = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year: number = Number(filterData[0]);
  const month: number = Number(filterData[1]);

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    return <p className="center">Invalid filter parameters.</p>;
  }

  const filteredEvents: Array<Event> = getFilteredEvents({ year, month });

  if (!filteredEvents.length) {
    return <p className="center">No events found for the chosen filters!</p>;
  }

  const date = `${year}/${month}`;

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
