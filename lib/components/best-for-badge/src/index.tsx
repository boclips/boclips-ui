import React from "react";
import Badge from "@boclips-ui/badge";

export interface BestForBadgeProps {
  bestFor: string;
}

const BestForBadge = ({ bestFor }: BestForBadgeProps) => (
  <div data-qa="best-for-badge">
    <Badge value={bestFor} label="Best for:" />
  </div>
);

export default BestForBadge;
