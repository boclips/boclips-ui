import React, { ReactElement, useState } from "react";
import { AutoComplete, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons/lib";
import c from "classnames";
import { Completion, completionsFor } from "./completions/completions";
import completionsCreatedBy from "./json/completionsCreatedBy.json";
import completionsTopics from "./json/completionsTopics.json";
import s from "./styles.module.less";

export interface Props {
  onSearch: (query: string, page: number) => void;
  placeholder?: string;
  initialQuery?: string;
  theme?: "backoffice" | "lti" | "custom";
}

const getCompletions = completionsFor({
  topics: completionsTopics,
  channels: completionsCreatedBy,
});

const SearchBar = ({
  onSearch,
  placeholder = "Search...",
  theme = "lti",
  initialQuery,
}: Props): ReactElement => {
  const [result, setResult] = useState<Completion[]>();
  const [inputValue, setInputValue] = useState<string | undefined>(
    initialQuery
  );

  const onChange = (txt: string) => {
    setResult(getCompletions(txt));
  };

  const getInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSearchButton = () => {
    if (inputValue) {
      onSearch(inputValue, 0);
    }
  };

  const onKeyDown = (e: any) => {
    if (e.key === "Enter" && inputValue && inputValue.length > 2) {
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
      className={s.result}
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
    <div className={s.searchWrapper}>
      <AutoComplete
        backfill
        options={optionsRender()}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={c(s.autoCompleteWrapper, {
          [s.custom]: theme === "custom",
          [s.lti]: theme === "lti",
          [s.backoffice]: theme === "backoffice",
        })}
        dropdownClassName={s.dropdownWrapper}
        value={inputValue}
        onSelect={(input) => onSearch(input, 0)}
      >
        <Input
          onChange={getInputValue}
          data-qa="search-input"
          aria-label="search"
          allowClear
          prefix={<SearchOutlined />}
          value={inputValue}
          placeholder={placeholder}
        />
      </AutoComplete>
      <Button
        onClick={handleSearchButton}
        data-qa="search-button"
        type="primary"
        className={s.searchButton}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
