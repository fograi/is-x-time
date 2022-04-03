import { IANATimeZone } from "./types/iana-tz";

export function nowHourIn(tz: IANATimeZone) {
  return parseInt(
    new Intl.DateTimeFormat("en", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: tz,
    }).format(Date.now())
  );
}
