import { Hours } from "./types/hours";

export function businessHours(hour: Hours) {
  return hour > 8 && hour < 17;
}
