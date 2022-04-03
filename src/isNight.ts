import { nowHour } from "./nowHour";
import { night } from "./night";

export function isNight(hour = nowHour()) {
  return night(hour);
}
