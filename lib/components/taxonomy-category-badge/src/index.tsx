import Badge from "@boclips-ui/badge";
import {
  Taxonomies,
  TaxonomyCategory,
} from "boclips-api-client/dist/sub-clients/videos/model/Taxonomies";
import React, { ReactElement } from "react";
import s from "./style.module.less";

export interface TaxonomyCategoryBadgeProps {
  category: TaxonomyCategory;
}

export class TaxonomyCategoryBadgeFactory {
  public static fromTaxonomy(taxonomy?: Taxonomies): ReactElement[] {
    const badges: ReactElement[] = [];
    if (taxonomy) {
      const listOfCategories: TaxonomyCategory[] = [];
      taxonomy.manual?.categories?.forEach((category) =>
        listOfCategories.push(category)
      );
      taxonomy.channel?.categories?.forEach((category) =>
        listOfCategories.push(category)
      );

      listOfCategories.forEach((it) => {
        badges.push(<TaxonomyCategoryBadge category={it} />);
      });
    }
    return badges.length !== 0 ? badges : [<UntaggedBadge />];
  }
}

export const UntaggedBadge = () => (
  <div data-qa="taxonomy-category-badge">
    <Badge value="Untagged" customClassName={s.untagged} />
  </div>
);

export const TaxonomyCategoryBadge = ({
  category,
}: TaxonomyCategoryBadgeProps) => {
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
