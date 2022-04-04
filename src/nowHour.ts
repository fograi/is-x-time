import { Hours } from "./types/hours";

export function nowHour(): Hours {
  return new Date(Date.now()).getHours() as Hours;
}
