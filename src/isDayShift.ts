import { nowHour } from "./nowHour";
import { dayShift } from "./dayShift";

export function isDayShift(hour = nowHour()) {
  return dayShift(hour);
}
