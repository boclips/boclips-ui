import React from "react";
import Badge from "@boclips-ui/badge";
import { TaxonomyCategory } from "boclips-api-client/dist/sub-clients/videos/model/Taxonomies";

export interface TaxonomyCategoryBadgeProps {
  category: TaxonomyCategory;
}

const TaxonomyCategoryBadge = ({ category }: TaxonomyCategoryBadgeProps) => {
  const getLabel = `${category.codeValue} ${category.description}`;

  return (
    <>
      {getLabel && (
        <div data-qa="taxonomy-category-badge">
          <Badge value={getLabel} />
        </div>
      )}
    </>
  );
};

export default TaxonomyCategoryBadge;
