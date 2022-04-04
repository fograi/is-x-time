import { Hours } from "./types/hours";

export function evening(hour: Hours) {
  return hour > 17 && hour <= 23;
}
