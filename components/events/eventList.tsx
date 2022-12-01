import { Event } from "../../types";
import EventItem from "./eventItem";

import styles from "./eventList.module.css";

type EventListProps = {
  events: Array<Event>;
};

function EventList({ events }: EventListProps) {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
