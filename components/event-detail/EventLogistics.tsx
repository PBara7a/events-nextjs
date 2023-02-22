import Image from "next/image";
import { formatAddress, formatDate } from "../../utilities/formatters";
import LogisticsItem from "./LogisticsItem";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";

import styles from "./eventLogistics.module.css";

type EventLogisticsProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

function EventLogistics({ date, address, image, imageAlt }: EventLogisticsProps) {
  const formattedDate = formatDate(date);
  const formattedAddress = formatAddress(address);

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={"/" + image} alt={imageAlt} height={256} width={256} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={<DateIcon width={16} height={16} />}>
          <time>{formattedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<AddressIcon width={16} height={16} />}>
          <address>{formattedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
