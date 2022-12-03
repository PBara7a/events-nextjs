import { formatDateShortVersion } from "../../utilities/formatters";
import Button from "../ui/Button";

import styles from "./resultsTitle.module.css";

type ResultsTitleProps = {
  date: string;
};

function ResultsTitle({ date }: ResultsTitleProps) {
  const formattedDate: string = formatDateShortVersion(date);

  return (
    <section className={styles.title}>
      <h1>Events in {formattedDate}</h1>
      <Button path="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
