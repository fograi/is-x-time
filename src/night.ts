import { Hours } from "./types/hours";

export function night(hour: Hours) {
  return hour >= 0 && hour < 6;
}
