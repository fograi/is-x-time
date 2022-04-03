import { nowHour } from "./nowHour";
import { evening } from "./evening";

export function isEvening(hour = nowHour()) {
  return evening(hour);
}
