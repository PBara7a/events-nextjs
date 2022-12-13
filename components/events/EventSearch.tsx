import { useRef } from "react";
import { NextRouter, useRouter } from "next/router";
import { getAllEventYears } from "../../utilities/years";
import { months } from "../../utilities/months";
import Button from "../ui/Button";

import styles from "./eventSearch.module.css";

type EventSearchProps = {
  years: Array<number>
}

function EventSearch({ years }: EventSearchProps) {
  const router: NextRouter = useRouter();

  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;

    if (selectedYear && selectedMonth) {
      const fullPath: string = `/events/${selectedYear}/${selectedMonth}`;
      router.push(fullPath);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearInputRef}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={monthInputRef}>
            {months.map((month, i) => (
              <option key={month} value={i + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export async function getStaticProps() {
  const years = await getAllEventYears();

  return {
    props: {
      years,
    }
  }
}

export default EventSearch;
