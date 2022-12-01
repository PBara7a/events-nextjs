import { Event } from "../../types";
import Image from "next/image";
import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";

import styles from "./eventItem.module.css";
import AddressIcon from "../icons/AddressIcon";

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
            <DateIcon color="#222222" width={20} height={20} />
            <time>{formattedDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon color="#222222" width={20} height={20} />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button path={`/events/${id}`} text="Explore Event" />
        </div>
      </div>
    </li>
  );
}

export default EventItem;
