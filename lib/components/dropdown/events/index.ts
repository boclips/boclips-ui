export const onKeyDownSelect = (
  e: React.KeyboardEvent<HTMLButtonElement>,
  callback: () => void
) => {
  if (e.key === "ArrowDown") {
    callback();
  }
};

export const onFocus = (e: React.FocusEvent<HTMLElement>) => {
  const currentItem = e.currentTarget;
  const allActiveElement = currentItem.querySelectorAll(
    "[aria-activedescendant]"
  );

  if (document.activeElement === currentItem) {
    allActiveElement.forEach((it) =>
      it.removeAttribute("aria-activedescendant")
    );
  }
};

export const onKeyDownDropdown = (
  e: React.KeyboardEvent<HTMLElement>,
  callback: () => void
) => {
  if (
    e.key === "ArrowDown" ||
    e.key === "ArrowUp" ||
    e.key === "Down" ||
    e.key === "Up" ||
    e.key === "Esc" ||
    e.key === "Escape"
  ) {
    const currentItem = e.currentTarget;
    const allOptions = currentItem.querySelectorAll('[role="option"]');
    const activeElement = currentItem.querySelector("[aria-activedescendant]");

    const activeOption = activeElement || allOptions[0];
    const id = activeOption.getAttribute("data-id") || "data-id";
    const nextSibling = activeOption.nextSibling as HTMLElement;
    const previousSibling = activeOption.previousSibling as HTMLElement;

    switch (e.key) {
      case "Down":
      case "ArrowDown":
        if (!nextSibling) {
          break;
        }

        if (!activeElement) {
          (
            activeOption.querySelector("input[type='checkbox']") as HTMLElement
          ).focus();
          activeOption.setAttribute("aria-activedescendant", id);
          break;
        }
        activeOption.removeAttribute("aria-activedescendant");

        (
          nextSibling.querySelector(
            "input[type='checkbox']"
          ) as HTMLInputElement
        ).focus();

        nextSibling.setAttribute("aria-activedescendant", id);
        break;
      case "Up":
      case "ArrowUp":
        if (!previousSibling) {
          break;
        }
        if (!activeElement) {
          (
            activeOption.querySelector(
              "input[type='checkbox']"
            ) as HTMLInputElement
          ).focus();
          activeOption.setAttribute("aria-activedescendant", id);
          return;
        }
        activeOption.removeAttribute("aria-activedescendant");

        (
          previousSibling.querySelector(
            "input[type='checkbox']"
          ) as HTMLInputElement
        ).focus();

        previousSibling.setAttribute("aria-activedescendant", id);
        break;
      case "Esc":
      case "Escape":
        callback();
        break;
      default:
    }
  }
};

export const onEnterDown = (
  e: React.KeyboardEvent<HTMLElement>,
  callback: () => void
) => {
  if (e.key === "Enter") {
    callback();
  }
};
