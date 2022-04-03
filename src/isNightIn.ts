import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isNight } from "./isNight";

export function isNightIn(tz: IANATimeZone) {
  return isNight(nowHourIn(tz));
}
