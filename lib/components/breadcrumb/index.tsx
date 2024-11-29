import c from 'classnames';
import RightChevron from './resources/chevron-right.svg?react';
import s from './style.module.less';

export interface BreadcrumbProps {
  previousPages?: PreviousPageProps[];
  currentPage: string;
}

export interface PreviousPageProps {
  nestingLevel: number;
  label: string;
  onClick: () => void;
}

export const Breadcrumb = ({ previousPages, currentPage }: BreadcrumbProps) => {
  return (
    <ul aria-label="breadcrumb" className={s.container}>
      {previousPages &&
        previousPages.map(page => (
          <li key={page.label} className={s.container}>
            <button
              type="button"
              onClick={page.onClick}
              className={s.previousPage}
            >
              {page.label || ''}
            </button>
            <RightChevron className={s.chevron} />
          </li>
        ))}
      <div
        aria-current="page"
        className={c(s.currentPage, {
          [s.singlePage]: !previousPages,
          [s.multiPage]: previousPages,
        })}
      >
        {currentPage}
      </div>
    </ul>
  );
};
