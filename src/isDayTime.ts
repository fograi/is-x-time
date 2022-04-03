import { nowHour } from "./nowHour";
import { dayTime } from "./dayTime";

export function isDayTime(hour = nowHour()) {
  return dayTime(hour);
}
