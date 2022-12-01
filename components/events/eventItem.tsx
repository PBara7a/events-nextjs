import { Event } from "../../types";
import Image from "next/image";
import Link from "next/link";

import styles from "./eventItem.module.css";

type EventItemProps = {
  event: Event;
};

function EventItem({ event }: EventItemProps) {
  const { title, image, date, location, id } = event;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <Image src={"/" + image} alt={title} height={300} width={500} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
