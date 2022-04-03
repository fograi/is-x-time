import { nowHour } from "./nowHour";
import { afternoon } from "./afternoon";

export function isAfternoon(hour = nowHour()) {
  return afternoon(hour);
}
