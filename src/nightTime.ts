import { Hours } from "./types/hours";

export function nightTime(hour: Hours) {
  return hour > 17 || hour < 6;
}
