import React, { useEffect, useMemo, useState } from "react";
import { Button, Input, Select } from "antd";
import c from "classnames";
import { SelectOption } from "@boclips-ui/select-option";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import IconOpen from "./resources/icon-down.svg";
import s from "./styles.module.less";

export interface Props {
  options: SelectOption[];
  title: string;
  onApply: (selected: string[]) => void;
  allowSearch?: boolean;
  updatedSelected?: string[] | undefined;
  showFacets?: boolean;
  searchPlaceholder?: string;
  touched?: (touched: boolean) => void;
}

const SelectFilter = ({
  options,
  title,
  onApply,
  allowSearch = false,
  searchPlaceholder,
  touched,
  showFacets,
  updatedSelected,
}: Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showCount, setShowCount] = useState<number>(0);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<SelectOption[]>(options);

  const onClickButton = () => {
    if (touched) {
      touched(true);
    }
    setShowCount(selected.length);
    onApply(selected);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (dropdownOpen === false) {
      if (updatedSelected) {
        setSelected(updatedSelected);
      } else setSelected([]);
    }
  }, [dropdownOpen]);

  const onClearButton = () => {
    if (showCount > 0) {
      onApply([]);
      setDropdownOpen(false);
    }
    setSelected([]);
    setShowCount(0);
  };

  useEffect(() => {
    if (updatedSelected && updatedSelected?.length !== selected.length) {
      if (showCount > 0) {
        onApply(updatedSelected!);
        setDropdownOpen(false);
      }
      setSelected(updatedSelected!);
      setShowCount(updatedSelected!.length);
    }
  }, [updatedSelected]);

  useEffect(() => {
    setFilterOptions(options);
  }, [options]);

  const manageSelected = (selectedValue: any) => {
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
        .filter(
          (it) => (it.count && it.count > 0) || selected.indexOf(it.id) !== -1
        )
        .map((it: SelectOption) => ({
          label: (
            <span className={s.checkboxWrapper}>
              <div className={s.checkboxInputWrapper}>
                <input
                  checked={selected.indexOf(it.id) !== -1}
                  type="checkbox"
                />
                <span className={s.checkmark} />
                <span className={s.inputValueText}>{it.label}</span>
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
    [selected, filterOptions, showFacets]
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

  return (
    <div className={s.main}>
      <Select
        showSearch={false}
        options={getOptions}
        menuItemSelectedIcon={null}
        data-qa="select-dropdown"
        className={c(s.selectWrapper, { [s.filtersSelected]: showCount > 0 })}
        dropdownClassName={c(s.filterSelectWrapper, {
          [s.wideDropdown]: allowSearch,
        })}
        labelInValue
        virtual
        value={[
          {
            value: title,
            label: (
              <div className={s.inputValueWrapper}>
                {title}
                {showCount > 0 ? (
                  <span data-qa="count-wrapper" className={s.countWrapper}>
                    {showCount}
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
          manageSelected(it.value);
        }}
        dropdownMatchSelectWidth={false}
        dropdownRender={(i) => (
          <>
            <div className={s.optionsWrapper}>
              {allowSearch && (
                <div className={s.searchInputWrapper}>
                  <Input
                    placeholder={searchPlaceholder}
                    onChange={onSearch}
                    prefix={<SearchOutlined />}
                  />
                </div>
              )}
              {i}
            </div>
            <div
              className={c(s.buttonWrapper, {
                [s.showButton]: selected.length > 0,
              })}
            >
              {selected.length > 0 && (
                <Button
                  type="text"
                  className={c(s.filterButton, s.clear)}
                  data-qa="clear-button"
                  onClick={onClearButton}
                >
                  CLEAR
                </Button>
              )}
              <Button
                type="primary"
                className={c(s.filterButton, s.apply)}
                data-qa="apply-button"
                disabled={
                  selected.length === 0 &&
                  (updatedSelected === undefined || updatedSelected.length < 1)
                }
                onClick={onClickButton}
              >
                APPLY
              </Button>
            </div>
          </>
        )}
      />
      <div className={c(s.arrowIconWrapper, { [s.open]: dropdownOpen })}>
        <IconOpen />
      </div>
    </div>
  );
};

export default SelectFilter;
