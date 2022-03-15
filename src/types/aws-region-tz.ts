import { AWSRegionCode } from "./aws-region-codes";
import { IANATimeZone } from "./iana-tz";

export type AWSRegionTZ = {
  name: string;
  code: AWSRegionCode;
  tz: IANATimeZone;
};
