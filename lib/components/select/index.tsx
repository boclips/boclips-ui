import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Input, Select as AntdSelect } from 'antd';
import c from 'classnames';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import IconOpen from './resources/icon-down.svg?react';
import s from './styles.module.less';

export interface SelectOption {
  id: string;
  label: string;
  count?: number;
}

export interface SelectProps {
  options: SelectOption[];
  title: string;
  onApply: (selected: string[]) => void;
  allowSearch?: boolean;
  filtersFromContext?: string[] | undefined;
  showFacets?: boolean;
  searchPlaceholder?: string;
  relativePositionFilters?: boolean;
  inputPrefixIcon?: React.ReactElement;
}

export const Select = ({
  options,
  title,
  onApply,
  allowSearch = false,
  searchPlaceholder,
  showFacets,
  filtersFromContext,
  relativePositionFilters = false,
  inputPrefixIcon,
}: SelectProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showCount, setShowCount] = useState<number>(0);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<SelectOption[]>(options);
  const [dropdownHeight, setDropdownHeight] = useState<number | string>('auto');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const id = title.toLowerCase();

  useEffect(() => {
    if (options) {
      setFilterOptions(options);
    }
  }, [options]);

  useEffect(() => {
    if (selected) {
      setShowCount(selected.length);
      onApply(selected);
    }
  }, [onApply, selected]);

  useEffect(() => {
    if (filtersFromContext) {
      setSelected(filtersFromContext);
    }

    if (filtersFromContext && filtersFromContext?.length !== selected.length) {
      if (showCount > 0) {
        onApply(filtersFromContext!);
        setSelected(filtersFromContext!);
        setShowCount(filtersFromContext!.length);
      }
    }
  }, [filtersFromContext, onApply, selected.length, showCount]);

  const getOptions = useMemo(
    () =>
      filterOptions
        ?.filter(
          it => (it.count && it.count > 0) || selected.indexOf(it.id) !== -1
        )
        .map((it: SelectOption) => ({
          label: (
            <span className={s.checkboxWrapper}>
              <div className={s.checkboxInputWrapper}>
                <input
                  tabIndex={-1}
                  checked={selected.indexOf(it.id) !== -1}
                  type="checkbox"
                  onChange={() => console.log('checked')}
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
          id: it.id,
          value: it.id,
          'aria-label': `${it.label}, ${it.count} results`,
          title: it.label,
          role: 'option',
        })),
    [selected, filterOptions, showFacets]
  );

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    if (allowSearch && searchText.length >= 0) {
      const searchResults = options.filter(
        option => option.label.toLowerCase().indexOf(searchText) !== -1
      );
      setFilterOptions(searchResults);
    } else {
      setFilterOptions(options);
    }
  };

  useEffect(() => {
    if (relativePositionFilters && dropdownOpen) {
      const dropDownClone = dropdownRef.current!.cloneNode(true) as HTMLElement;
      dropDownClone.style.visibility = 'hidden';
      document.querySelector('html')!.append(dropDownClone);
      setDropdownHeight(
        dropDownClone.offsetHeight + selectRef.current!.offsetHeight
      );
      dropDownClone.remove();
    } else {
      setDropdownHeight('auto');
    }
  }, [dropdownOpen, relativePositionFilters]);

  return (
    <div
      ref={selectRef}
      id={id}
      style={{ height: dropdownHeight }}
      className={s.main}
    >
      <AntdSelect
        role="listbox"
        placeholder={title}
        aria-label={`${title} filter`}
        showSearch={false}
        options={getOptions}
        data-qa="select-dropdown"
        className={c(s.selectWrapper, { [s.filterSelectOpened]: dropdownOpen })}
        popupClassName={s.filterSelectWrapper}
        menuItemSelectedIcon={null}
        // @ts-expect-error TODO Fix this
        getPopupContainer={() => document.getElementById(id)}
        tagRender={() => {
          return (
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
                ''
              )}
            </div>
          );
        }}
        maxTagCount={1}
        mode="multiple"
        open={dropdownOpen}
        onDropdownVisibleChange={open => {
          setDropdownOpen(open);
        }}
        onChange={it => {
          setSelected(it as string[]);
        }}
        virtual
        dropdownAlign={{
          points: ['tr', 'tl'],
          offset: [0, 48],
          overflow: { adjustX: false, adjustY: false },
        }}
        value={filtersFromContext}
        dropdownRender={i => (
          <div ref={dropdownRef} className={s.optionsWrapper}>
            {allowSearch && (
              <div className={s.searchInputWrapper}>
                <Input
                  placeholder={searchPlaceholder}
                  arial-label={`Search ${title.toLowerCase()}`}
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
