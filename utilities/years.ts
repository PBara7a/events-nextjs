import { Event } from "../types";
import { getAllEvents } from "./apiUtils";

export async function getAllEventYears(): Promise<Array<number>> {
  const events = await getAllEvents();
  return events.reduce((years: Array<number>, event: Event) => {
    const year = new Date(event.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years.sort((a, b) => a - b);
  }, []);
}
