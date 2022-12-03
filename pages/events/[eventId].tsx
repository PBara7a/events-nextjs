import { Event } from "../../types";
import { NextRouter, useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/EventSummary";
import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import ErrorAlert from "../../components/ui/ErrorAlert";

function EventDetailPage() {
  const [event, setEvent] = useState<Event | null>(null);
  const router: NextRouter = useRouter();

  const { eventId } = router.query;

  useEffect(() => {
    if (typeof eventId === "string") {
      const foundEvent = getEventById(eventId);

      if (foundEvent) {
        setEvent(foundEvent);
      }
    }
  }, [eventId]);

  return event ? (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  ) : (
    <ErrorAlert>
      <p>No event found!</p>
    </ErrorAlert>
  );
}

export default EventDetailPage;
