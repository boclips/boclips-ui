import React from "react";
import Badge from "@boclips-ui/badge";

export interface BestForBadgeProps {
  bestFor: string;
  theme?: "backoffice" | "lti" | "custom";
}
const BestForBadge = ({ bestFor, theme }: BestForBadgeProps) => (
  <div data-qa="best-for-badge">
    <Badge value={bestFor} label="Best for:" theme={theme} />
  </div>
);

export default BestForBadge;
