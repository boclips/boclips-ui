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
  onSearch: (query: string | null, page: number) => void;
  placeholder?: string;
  initialQuery?: string;
  iconOnlyButton?: boolean;
  buttonText?: string;
  suggestions?: string[];
  onChange?: (search: string) => void;
}

const SearchBar = ({
  onSearch,
  initialQuery,
  iconOnlyButton = true,
  placeholder,
  buttonText,
  suggestions,
  onChange,
}: Props): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const [activeSuggestion, setActiveSuggestion] = useState<number>(-1);
  const ref = useRef<HTMLInputElement | null>(null);

  const onSearchChanged = (newSearch: string) => {
    setQuery(newSearch);
    setShowSuggestions(true);
    setActiveSuggestion(-1);
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
      activeSuggestion > -1 &&
      suggestions.length > activeSuggestion
    ) {
      setQuery(suggestions[activeSuggestion]);
    }
  }, [activeSuggestion, suggestions]);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Enter":
        onSearch(query, 0);
        break;
      case "Escape":
        setShowSuggestions(false);
        break;
      case "ArrowUp":
        if (showSuggestions) {
          setActiveSuggestion(
            suggestions && activeSuggestion !== -1
              ? activeSuggestion - 1
              : suggestions!.length - 1
          );
        } else {
          setShowSuggestions(true);
        }
        break;
      case "ArrowDown":
        if (showSuggestions) {
          setActiveSuggestion(
            suggestions && activeSuggestion < suggestions.length - 1
              ? activeSuggestion + 1
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

  const boldNotMatchingText = (text: string, shouldNotBeBold: string) =>
    text
      .split(new RegExp(`(${shouldNotBeBold})`, "i"))
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

  const searchSuggestions = () =>
    suggestions &&
    suggestions.length > 0 && (
      <span className={s.searchBarSuggestions}>
        {suggestions.map((suggestion, index) => (
          <button
            type="button"
            key={`${suggestion}-${index}`}
            className={c(s.suggestionItem, {
              [s.active]: index === activeSuggestion,
              [s.pseudoSelectorsEnabled]: activeSuggestion === -1,
            })}
            onMouseEnter={() => setActiveSuggestion(-1)}
            onKeyDown={(e) => e.key === "enter" && onSearchChanged(suggestion)}
            onClick={() => {
              onSearchChanged(suggestion);
              onSearch(suggestion, 0);
            }}
          >
            {boldNotMatchingText(suggestion, query)}
          </button>
        ))}
      </span>
    );

  return (
    <>
      <div className={s.searchAndSuggestions}>
        <div role="search" className={s.searchBarWrapper}>
          <input
            ref={ref}
            id="search"
            type="text"
            placeholder={placeholder || "Search for videos"}
            onChange={(e) => onSearchChanged(e.target.value)}
            onKeyDown={onKeyDown}
            value={query}
            autoComplete="off"
          />
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
              icon={<SearchIcon />}
              iconOnly={iconOnlyButton}
              onClick={() => onSearch(query, 0)}
              text={buttonText || "Search"}
            />
          </div>
        </div>
        {showSuggestions && searchSuggestions()}
      </div>
    </>
  );
};

export default SearchBar;
