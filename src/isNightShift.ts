import { nowHour } from "./nowHour";
import { nightShift } from "./nightShift";

export function isNightShift(hour = nowHour()) {
  return nightShift(hour);
}
