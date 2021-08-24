import React, { ReactElement, ReactNode, useEffect, useRef } from "react";
import c from "classnames";
import s from "./styles.module.less";
import Chevron from "../resources/chevron.svg";
import Ellipsis from "../resources/ellipsis.svg";

interface CustomPaginationButtonProps {
  largeButton?: boolean;
  children: ReactNode;
  currentPageActive?: boolean;
}

const CustomPaginationButton = ({
  children,
  largeButton,
  currentPageActive,
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
      <CustomPaginationButton largeButton={!mobileView}>
        <div className={s.prev}>
          <Chevron />
        </div>
        {!mobileView && (
          <span aria-label="Previous page" className={s.copy}>
            Prev
          </span>
        )}
      </CustomPaginationButton>
    ) : null;
  }

  if (buttonType === "jump-prev" || buttonType === "jump-next") {
    return (
      <CustomPaginationButton>
        <div aria-label="skip 5 pages" className={s.ellipsis}>
          <Ellipsis />
        </div>
      </CustomPaginationButton>
    );
  }

  if (buttonType === "page") {
    return (
      <CustomPaginationButton currentPageActive={currentPage === page}>
        <span
          aria-label={page ? `Page ${page} out of ${totalItems}` : ""}
          className={s.copy}
        >
          {page}
        </span>
      </CustomPaginationButton>
    );
  }

  if (buttonType === "next") {
    return (
      <CustomPaginationButton largeButton={!mobileView}>
        {!mobileView && (
          <span aria-label="Next page" className={s.copy}>
            Next
          </span>
        )}
        <Chevron />
      </CustomPaginationButton>
    );
  }

  return null;
};

export default Pagination;
