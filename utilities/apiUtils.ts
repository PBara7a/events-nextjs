import { Event } from "../types";

export async function getAllEvents(): Promise<Array<Event>> {
  const res = await fetch(
    "https://nextjs-course-94c78-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await res.json();
  return Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
}

export async function getFeaturedEvents(): Promise<Array<Event>> {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id: string): Promise<Event | undefined> {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}
