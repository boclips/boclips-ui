import React, { useEffect, useMemo, useRef, useState } from "react";
import { Input, Select } from "antd";
import c from "classnames";
import { SelectOption } from "@boclips-ui/select-option";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import IconOpen from "./resources/icon-down.svg";
import s from "./styles.module.less";

export enum DropdownAligment {
  LEFT,
  RIGHT,
}

export interface Props {
  options: SelectOption[];
  displayButtons?: boolean;
  title: string;
  onApply: (selected: string[]) => void;
  allowSearch?: boolean;
  updatedSelected?: string[] | undefined;
  showFacets?: boolean;
  searchPlaceholder?: string;
  touched?: (touched: boolean) => void;
  dropdownAlignment?: DropdownAligment;
  relativePositionFilters?: boolean;
  inputPrefixIcon?: React.ReactElement;
}

const SelectFilter = ({
  options,
  title,
  onApply,
  allowSearch = false,
  searchPlaceholder,
  showFacets,
  updatedSelected,
  relativePositionFilters = false,
  inputPrefixIcon,
  dropdownAlignment = DropdownAligment.LEFT,
}: Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showCount, setShowCount] = useState<number>(0);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<SelectOption[]>(options);
  const [dropdownHeight, setDropdownHeight] = useState<number | string>("auto");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (updatedSelected && updatedSelected?.length !== selected.length) {
      if (showCount > 0) {
        onApply(updatedSelected!);
        setSelected(updatedSelected!);
        setShowCount(updatedSelected!.length);
      }
    }
  }, [updatedSelected]);

  useEffect(() => {
    setFilterOptions(options);
  }, [options]);

  useEffect(() => {
    setShowCount(selected.length);
    onApply(selected);
  }, [selected]);

  useEffect(() => {
    if (updatedSelected) {
      setSelected(updatedSelected);
    }
  }, [updatedSelected]);

  const applyFilter = (selectedValue: any) => {
    if (selected.indexOf(selectedValue) !== -1) {
      const newSelected = selected.filter((v) => v !== selectedValue);
      setSelected(newSelected);
    } else {
      setSelected([...selected, selectedValue]);
    }
  };

  const getOptions = useMemo(
    () =>
      filterOptions
        ?.filter(
          (it) => (it.count && it.count > 0) || selected.indexOf(it.id) !== -1
        )
        .map((it: SelectOption) => ({
          label: (
            <span className={s.checkboxWrapper}>
              <div className={s.checkboxInputWrapper}>
                <input
                  checked={selected.indexOf(it.id) !== -1}
                  type="checkbox"
                  onChange={() => console.log("checked")}
                />
                <span className={s.checkmark} />
                <span
                  className={c(s.inputValueText, {
                    [s.checkboxLabelSelected]: selected.indexOf(it.id) !== -1,
                  })}
                >
                  {it.label}
                </span>
              </div>

              {showFacets && (
                <span className={s.count} data-qa="item-count">
                  {it.count}
                </span>
              )}
            </span>
          ),
          value: it.id,
          title: it.label,
        })),
    [selected, filterOptions, showFacets, updatedSelected]
  );

  const onSearch = (e: any) => {
    const searchText = e.target.value.toLowerCase();
    if (allowSearch && searchText.length >= 0) {
      const searchResults = options.filter(
        (option) => option.label.toLowerCase().indexOf(searchText) !== -1
      );
      setFilterOptions(searchResults);
    } else {
      setFilterOptions(options);
    }
  };

  useEffect(() => {
    if (relativePositionFilters && dropdownOpen) {
      const dropDownClone = dropdownRef.current!.cloneNode(true) as HTMLElement;
      dropDownClone.style.visibility = "hidden";
      document.querySelector("html")!.append(dropDownClone);
      setDropdownHeight(
        dropDownClone.offsetHeight + selectRef.current!.offsetHeight
      );
      dropDownClone.remove();
    } else {
      setDropdownHeight("auto");
    }
  }, [dropdownOpen, relativePositionFilters]);

  return (
    <div
      ref={selectRef}
      id={title}
      style={{ height: dropdownHeight }}
      className={s.main}
    >
      <Select
        showSearch={false}
        options={getOptions}
        menuItemSelectedIcon={null}
        data-qa="select-dropdown"
        className={c(s.selectWrapper, { [s.filterSelectOpened]: dropdownOpen })}
        dropdownClassName={s.filterSelectWrapper}
        labelInValue
        virtual
        // @ts-ignore
        getPopupContainer={() => document.getElementById(title)}
        value={[
          {
            value: title,
            label: (
              <div
                className={c(s.inputValueWrapper, {
                  [s.boldValueWrapper]: showCount,
                })}
              >
                {title}
                {showCount > 0 ? (
                  <span data-qa="count-wrapper" className={s.inputCount}>
                    ({showCount})
                  </span>
                ) : (
                  ""
                )}
              </div>
            ),
          },
        ]}
        mode="multiple"
        open={dropdownOpen}
        onDropdownVisibleChange={(open) => {
          setDropdownOpen(open);
        }}
        onSelect={(it) => {
          applyFilter(it.value);
        }}
        dropdownMatchSelectWidth={false}
        dropdownAlign={
          dropdownAlignment === DropdownAligment.LEFT
            ? { points: ["tl", "bl"] }
            : { points: ["tr", "br"] }
        }
        dropdownRender={(i) => (
          <div ref={dropdownRef} className={s.optionsWrapper}>
            {allowSearch && (
              <div className={s.searchInputWrapper}>
                <Input
                  placeholder={searchPlaceholder}
                  onChange={onSearch}
                  prefix={inputPrefixIcon || <SearchOutlined />}
                />
              </div>
            )}
            {i}
          </div>
        )}
      />
      <div className={c(s.arrowIconWrapper, { [s.open]: dropdownOpen })}>
        <IconOpen />
      </div>
    </div>
  );
};

export default SelectFilter;
