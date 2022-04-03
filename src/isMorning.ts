import { nowHour } from "./nowHour";
import { morning } from "./morning";

export function isMorning(hour = nowHour()) {
  return morning(hour);
}
