import {
  Taxonomies,
  TaxonomyCategory,
} from 'boclips-api-client/dist/sub-clients/videos/model/Taxonomies';
import { ReactElement } from 'react';
import s from './style.module.less';
import { Badge } from '..';

export interface TaxonomyCategoryBadgeProps {
  category: TaxonomyCategory;
}

export class TaxonomyCategoryBadgeFactory {
  public static fromTaxonomy(taxonomy?: Taxonomies): ReactElement[] {
    const badges: ReactElement[] = [];
    if (taxonomy) {
      const listOfCategories: TaxonomyCategory[] = [];
      taxonomy.manual?.categories?.forEach(category =>
        listOfCategories.push(category)
      );
      taxonomy.channel?.categories?.forEach(category =>
        listOfCategories.push(category)
      );

      const uniqueCategories = this.extractUniqueCategories(listOfCategories);

      uniqueCategories.forEach(it => {
        badges.push(<TaxonomyCategoryBadge category={it} />);
      });
    }

    return badges.length !== 0 ? badges : [<UntaggedBadge key="untagged" />];
  }

  private static extractUniqueCategories(categories: TaxonomyCategory[]) {
    return categories.filter(
      (thisCategory, index, all) =>
        all.findIndex(
          otherCategory =>
            otherCategory.codeValue === thisCategory.codeValue &&
            otherCategory.description === thisCategory.description
        ) === index
    );
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
          <Badge value={getLabel} customClassName={s.tagged} />
        </div>
      )}
    </>
  );
};
