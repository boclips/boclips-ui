import s from './styles.module.less';
import NoResultsSVG from './resources/no-results.svg?react';

export interface NoResultsProps {
  searchQuery: string;
  filtersApplied?: boolean;
}

export const NoResults = ({ searchQuery, filtersApplied }: NoResultsProps) => (
  <div className={s.noResults}>
    <NoResultsSVG />
    {filtersApplied ? (
      <>
        <p className={s.noResultsText}>
          We couldn&apos;t find anything for <em>&quot;{searchQuery}&quot;</em>{' '}
          with your filters
        </p>
        <p className={s.noResultsDescription}>
          Try again using different keywords or change the filters
        </p>
      </>
    ) : (
      <>
        <p className={s.noResultsText}>
          Sorry, we couldn&apos;t find any results for{' '}
          <em>&quot;{searchQuery}&quot;</em>
        </p>
        <p className={s.noResultsSuggestions}>
          <div className={s.noResultsSuggestionsText}>Search suggestions</div>
          <span>
            <li>Check your spelling</li>
            <li>Try more general words</li>
            <li>Try different words that mean the same thing</li>
          </span>
        </p>
      </>
    )}
  </div>
);
