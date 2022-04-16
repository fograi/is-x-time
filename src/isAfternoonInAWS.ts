import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isAfternoonIn } from "./isAfternoonIn";

export function isAfternoonInAWS(awsrc: AWSRegionCode) {
  return isAfternoonIn(AWSRegionTZ[awsrc]);
}
