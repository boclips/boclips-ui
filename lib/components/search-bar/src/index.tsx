import React, {
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "@boclips-ui/button";
import c from "classnames";
import SearchIcon from "./resources/search-icon.svg";
import CloseIcon from "./resources/close-icon.svg";
import s from "./styles.module.less";

export interface Props {
  onSearch: (
    query: string | null,
    page: number,
    suggestionUsed?: boolean
  ) => void;
  placeholder?: string;
  initialQuery?: string;
  iconOnlyButton?: boolean;
  buttonText?: string;
  suggestions?: string[];
  onChange?: (search: string) => void;
  showSkipButton?: boolean;
  customButtonIcon?: ReactElement;
}

const SearchBar = ({
  onSearch,
  initialQuery,
  iconOnlyButton = true,
  placeholder,
  buttonText,
  suggestions,
  onChange,
  showSkipButton = false,
  customButtonIcon,
}: Props): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const [suggestionUsed, setSuggestionUsed] = useState<boolean>(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] =
    useState<number>(-1);
  const ref = useRef<HTMLInputElement | null>(null);

  const resetSuggestionDropdownState = () => {
    setSuggestionUsed(false);
    setShowSuggestions(true);
    setActiveSuggestionIndex(-1);
  };

  const onSearchChanged = (newSearch: string) => {
    setQuery(newSearch);
    resetSuggestionDropdownState();
    if (onChange) {
      onChange(newSearch);
    }
  };

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (
      suggestions &&
      activeSuggestionIndex > -1 &&
      suggestions.length > activeSuggestionIndex
    ) {
      setQuery(suggestions[activeSuggestionIndex]);
      setSuggestionUsed(true);
    }
  }, [activeSuggestionIndex, suggestions]);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    event.stopPropagation();
    switch (event.key) {
      case "Enter":
        setShowSuggestions(false);
        onSearch(query, 0, suggestionUsed);
        break;
      case "Escape":
        setShowSuggestions(false);
        break;
      case "ArrowUp":
        if (showSuggestions) {
          setActiveSuggestionIndex(
            suggestions && activeSuggestionIndex !== -1
              ? activeSuggestionIndex - 1
              : suggestions!.length - 1
          );
        } else {
          setShowSuggestions(true);
        }
        break;
      case "ArrowDown":
        if (showSuggestions) {
          setActiveSuggestionIndex(
            suggestions && activeSuggestionIndex < suggestions.length - 1
              ? activeSuggestionIndex + 1
              : -1
          );
        } else {
          setShowSuggestions(true);
        }
        break;
      default:
        break;
    }
  };

  const onClear = () => {
    onSearchChanged("");
    ref.current?.focus();
  };

  const escapeRegExpChars = (text: string) =>
    text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

  const boldNotMatchingText = (text: string, shouldNotBeBold: string) => {
    return text
      .split(new RegExp(`(${escapeRegExpChars(shouldNotBeBold)})`, "i"))
      .map((item: string, index: number) => {
        return (
          <>
            {item.toLowerCase() === shouldNotBeBold.toLowerCase() ? (
              item
            ) : (
              <span style={{ fontWeight: "bold" }} key={index}>
                {item}
              </span>
            )}
          </>
        );
      });
  };

  const searchSuggestions = () => (
    <ul className={s.searchBarSuggestions} role="listbox" id="suggestions">
      {suggestions &&
        suggestions.map((suggestion, index) => (
          <li
            role="option"
            id={`suggestion-${index}`}
            tabIndex={0}
            aria-selected={index === activeSuggestionIndex}
            key={`${suggestion}-${index}`}
            className={c(s.suggestionItem, {
              [s.active]: index === activeSuggestionIndex,
              [s.pseudoSelectorsEnabled]: activeSuggestionIndex === -1,
            })}
            onMouseEnter={() => setActiveSuggestionIndex(-1)}
            onKeyDown={onKeyDown}
            onClick={() => {
              onSearchChanged(suggestion);
              onSearch(suggestion, 0, true);
            }}
          >
            {boldNotMatchingText(suggestion, query)}
          </li>
        ))}
    </ul>
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className={s.searchAndSuggestions}>
      <div ref={wrapperRef} role="search" className={s.searchBarWrapper}>
        <input
          ref={ref}
          id="search"
          type="text"
          placeholder={placeholder || "Search for videos"}
          onChange={(e) => onSearchChanged(e.target.value)}
          onKeyDown={onKeyDown}
          value={query}
          autoComplete="off"
          aria-autocomplete="both"
          aria-label="Search for videos"
          role="combobox"
          aria-owns="suggestions"
          aria-controls="suggestions"
          aria-expanded={showSuggestions}
          aria-activedescendant={
            activeSuggestionIndex >= 0
              ? `suggestion-${activeSuggestionIndex}`
              : ""
          }
        />
        {showSkipButton && (
          <Button
            className={s.skip}
            onClick={() => {
              document.querySelector("main")?.focus();
            }}
            text="Skip to content"
          />
        )}
        <div className={s.buttons}>
          {query.length > 0 && (
            <button
              className={s.clearButton}
              type="button"
              aria-label="clear search text"
              onClick={onClear}
            >
              <CloseIcon />
            </button>
          )}
          <Button
            role="button"
            dataQa="search-button"
            aria-label="search"
            icon={customButtonIcon || <SearchIcon />}
            iconOnly={iconOnlyButton}
            onClick={() => onSearch(query, 0, suggestionUsed)}
            text={buttonText || "Search"}
          />
        </div>
      </div>
      {suggestions && suggestions.length > 0 && (
        <div
          className={s.visuallyHidden}
          id="announce-suggestions"
          aria-live="polite"
        >
          {suggestions.length} search suggestions are found, use up and down
          arrows to review.
        </div>
      )}
      {showSuggestions && searchSuggestions()}
    </div>
  );
};

export default SearchBar;
