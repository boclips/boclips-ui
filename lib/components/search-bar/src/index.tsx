import React, { ReactElement, useState } from "react";
import { AutoComplete, Input } from "antd";
import Button from "@boclips-ui/button";
import c from "classnames";
import CloseIcon from "./resources/close-icon.svg";
import { Completion, completionsFor } from "./completions/completions";
import completionsCreatedBy from "./json/completionsCreatedBy.json";
import completionsTopics from "./json/completionsTopics.json";
import s from "./styles.module.less";
import SearchIcon from "./resources/search-icon.svg";

export interface Props {
  onSearch: (query: string, page: number) => void;
  placeholder?: string;
  initialQuery?: string;
  autocomplete?: boolean;
  iconOnlyButton?: boolean;
  ariaLabel?: string;
}

const getCompletions = completionsFor({
  topics: completionsTopics,
  channels: completionsCreatedBy,
});

const SearchBar = ({
  onSearch,
  placeholder = "Search...",
  initialQuery,
  autocomplete = true,
  iconOnlyButton = false,
  ariaLabel = "search",
}: Props): ReactElement => {
  const [result, setResult] = useState<Completion[]>();
  const [inputValue, setInputValue] = useState<string | undefined>(
    initialQuery || ""
  );

  const onChange = (txt: string) => {
    setResult(getCompletions(txt));
  };

  const getInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSearchButton = () => {
    if (inputValue || inputValue === "") {
      onSearch(inputValue, 0);
    }
  };

  const onKeyDown = (e: any) => {
    if (e.key === "Enter" && (inputValue || inputValue === "")) {
      handleSearchButton();
    }
  };

  const onClickAutosuggestion = (e: any, r: Completion) => {
    if (e.key === "Enter" || e.button === 0) {
      setInputValue(r.text);
    }
  };

  const renderResult = (r: Completion) => (
    <div
      data-qa={`result-${r.text.replace(" ", "-").toLowerCase()}`}
      className={s.autocompleteResults}
      tabIndex={0}
      onClick={(e) => onClickAutosuggestion(e, r)}
      onKeyDown={(e) => onClickAutosuggestion(e, r)}
      role="button"
    >
      {r.list === "channels" && (
        <span className={s.channelAffix}>Channel: </span>
      )}

      {r.textWithHighlights.map((chunk) => (
        <span
          className={chunk.matches ? "" : s.completionAffix}
          key={chunk.text}
        >
          {chunk.text}
        </span>
      ))}
    </div>
  );

  const optionsRender = () =>
    result?.map((r: Completion) => ({
      key: r.text,
      value: r.text,
      label: renderResult(r),
    }));

  return (
    <div
      className={c({
        [s.autoCompleteSearchWrapper]: autocomplete === true,
        [s.searchBarWrapper]: true,
      })}
    >
      <AutoComplete
        backfill
        options={autocomplete ? optionsRender() : []}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={c({
          [s.lti]: true,
        })}
        dropdownClassName={s.dropdownWrapper}
        value={inputValue}
        onSelect={(input) => onSearch(input, 0)}
      >
        <div role="search">
          <Input
            onChange={getInputValue}
            aria-label={ariaLabel}
            data-qa="search-input"
            suffix={
              <CloseIcon
                className={c(s.closeIcon, {
                  [s.hideMe]:
                    inputValue?.length === 0 ||
                    inputValue?.length === undefined,
                })}
                onClick={() => setInputValue("")}
              />
            }
            allowClear={false}
            bordered={false}
            value={inputValue}
            placeholder={placeholder}
          />
        </div>
      </AutoComplete>

      <Button
        aria-label="search"
        dataQa="search-button"
        onClick={handleSearchButton}
        icon={<SearchIcon />}
        iconOnly={iconOnlyButton}
        text="Search"
      />
    </div>
  );
};

export default SearchBar;
