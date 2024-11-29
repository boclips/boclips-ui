import { render, screen } from '@testing-library/react';
import { TaxonomyCategoryBadgeFactory } from './index';

describe('Taxonomy Category Badge Factory', () => {
  it('Returns untagged badge when taxonomy is undefined', () => {
    const fromTaxonomy = TaxonomyCategoryBadgeFactory.fromTaxonomy(undefined);

    render(fromTaxonomy[0]);

    expect(fromTaxonomy).toHaveLength(1);
    expect(screen.getByText('Untagged')).toBeInTheDocument();
  });

  it('Returns untagged badge when taxonomy categories are empty', () => {
    const fromTaxonomy = TaxonomyCategoryBadgeFactory.fromTaxonomy({
      channel: { categories: [] },
      manual: { categories: [] },
    });

    render(fromTaxonomy[0]);

    expect(fromTaxonomy).toHaveLength(1);
    expect(screen.getByText('Untagged')).toBeInTheDocument();
  });

  it('Returns unique badges when channel and video taxonomy category has same code value and description', () => {
    const fromTaxonomy = TaxonomyCategoryBadgeFactory.fromTaxonomy({
      channel: {
        categories: [
          { codeValue: 'some-code', description: 'some-description' },
          { codeValue: 'test-code', description: 'test-description' },
        ],
      },
      manual: {
        categories: [
          { codeValue: 'some-code', description: 'some-description' },
        ],
      },
    });

    render(
      <div>
        {fromTaxonomy.map((badge, key) => (
          <div key={key}>{badge}</div>
        ))}
      </div>
    );

    expect(fromTaxonomy).toHaveLength(2);
    expect(screen.getByText('some-code some-description')).toBeInTheDocument();
    expect(screen.getByText('test-code test-description')).toBeInTheDocument();
  });
});
