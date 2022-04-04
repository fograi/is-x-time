import { Hours } from "./types/hours";
import { IANATimeZone } from "./types/iana-tz";

export function nowHourIn(tz: IANATimeZone): Hours {
  return parseInt(
    new Intl.DateTimeFormat("en", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: tz,
    }).format(Date.now())
  ) as Hours;
}
