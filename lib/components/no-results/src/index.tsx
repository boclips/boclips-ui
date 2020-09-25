import React from "react";
import s from "./styles.module.less";
import NoResultsSVG from "./resources/no-results.svg";

interface NoResultsProps {
  searchQuery: string;
}

const NoResults = ({ searchQuery }: NoResultsProps) => (
  <div className={s.noResults}>
    <NoResultsSVG />
    <p className={s.noResultsText}>
      We couldn&apos;t find anything for &quot;{searchQuery}&quot; with your
      filters
    </p>
    <p className={s.noResultsDescription}>
      try again using different keywords or change the filters
    </p>
  </div>
);

export default NoResults;
