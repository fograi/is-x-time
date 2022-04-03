import { nowHour } from "./nowHour";
import { businessHours } from "./businessHours";

export function isBusinessHours(hour = nowHour()) {
  return businessHours(hour);
}
