import React, { ReactElement, ReactNode, useEffect, useRef } from "react";
import c from "classnames";
import s from "./styles.module.less";
import NextPageChevron from "../resources/next-page-chevron.svg";
import PreviousPageChevron from "../resources/previous-page-chevron.svg";
import Ellipsis from "../resources/ellipsis.svg";

interface CustomPaginationButtonProps {
  largeButton?: boolean;
  children: ReactNode;
  currentPageActive?: boolean;
  ariaLabel: string;
}

const CustomPaginationButton = ({
  children,
  largeButton,
  currentPageActive,
  ariaLabel,
}: CustomPaginationButtonProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // @ts-ignore
      ref.current.parentNode.removeAttribute("tabindex");
      // @ts-ignore
      ref.current.parentNode.removeAttribute("title");
    }
  }, [ref.current]);

  return (
    <button
      aria-current={currentPageActive && "page"}
      aria-label={ariaLabel}
      type="button"
      ref={ref}
      className={c(s.button, {
        [s.large]: largeButton,
        [s.current]: currentPageActive,
      })}
    >
      {children}
    </button>
  );
};

interface PaginationProps {
  buttonType: string;
  page: number;
  mobileView: boolean;
  currentPage: number;
  totalItems: number;
}

const Pagination = ({
  buttonType,
  page,
  mobileView,
  currentPage,
  totalItems,
}: PaginationProps): ReactElement | null => {
  if (buttonType === "prev") {
    return page > 0 ? (
      <CustomPaginationButton
        ariaLabel="go to previous page"
        largeButton={!mobileView}
      >
        <div className={s.prev}>
          <PreviousPageChevron />
        </div>
        {!mobileView && <span className={s.copy}>Prev</span>}
      </CustomPaginationButton>
    ) : null;
  }

  if (buttonType === "jump-prev" || buttonType === "jump-next") {
    return (
      <CustomPaginationButton ariaLabel="skip 5 pages">
        <div className={s.ellipsis}>
          <Ellipsis />
        </div>
      </CustomPaginationButton>
    );
  }

  if (buttonType === "page") {
    return (
      <CustomPaginationButton
        ariaLabel={page ? `Page ${page} out of ${totalItems}` : ""}
        currentPageActive={currentPage === page}
      >
        <span className={s.copy}>{page}</span>
      </CustomPaginationButton>
    );
  }

  if (buttonType === "next") {
    return (
      <CustomPaginationButton
        ariaLabel="go to next page"
        largeButton={!mobileView}
      >
        {!mobileView && <span className={s.copy}>Next</span>}
        <NextPageChevron />
      </CustomPaginationButton>
    );
  }

  return null;
};

export default Pagination;
