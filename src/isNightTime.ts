import { nowHour } from "./nowHour";
import { nightTime } from "./nightTime";

export function isNightTime(hour = nowHour()) {
  return nightTime(hour);
}
