import { nowHour } from "./nowHour";
import { eveningShift } from "./eveningShift";

export function isEveningShift(hour = nowHour()) {
  return eveningShift(hour);
}
