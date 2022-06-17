import React, {
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "@boclips-ui/button";
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
}

const SearchBar = ({
  onSearch,
  initialQuery,
  iconOnlyButton = true,
  placeholder,
  buttonText,
  suggestions,
}: Props): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(query, 0);
    }
  };

  const onClear = () => {
    setQuery("");
    ref.current?.focus();
  };
  const boldMatchingText = (text: string, shouldBeBold: string) =>
    text
      .split(new RegExp(`(${shouldBeBold})`, "i"))
      .map((item: string, index: number) => {
        return (
          <>
            {item.toLowerCase() === shouldBeBold.toLowerCase() ? (
              <span style={{ fontWeight: "bold" }} key={index}>
                {item}
              </span>
            ) : (
              item
            )}
          </>
        );
      });

  const searchSuggestions = () =>
    suggestions && (
      <span className={s.searchBarSuggestions}>
        {suggestions.map((suggestion, index) => (
          <button
            type="button"
            key={`${suggestion}-${index}`}
            className={s.suggestionItem}
            onKeyDown={(e) => e.key === "enter" && setQuery(suggestion)}
            onClick={() => {
              setQuery(suggestion);
              onSearch(suggestion, 0);
            }}
          >
            {boldMatchingText(suggestion, query)}
          </button>
        ))}
      </span>
    );

  return (
    <>
      <div role="search" className={s.searchBarWrapper}>
        <input
          ref={ref}
          id="search"
          type="text"
          placeholder={placeholder || "Search for videos"}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          value={query}
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
      {searchSuggestions()}
    </>
  );
};

export default SearchBar;
