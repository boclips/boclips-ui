import React, { useEffect, useRef, useState } from "react";
import c from "classnames";
import { Typography } from "@boclips-ui/typography";
import Checkbox from "@boclips-ui/checkbox";
import { InputText } from "@boclips-ui/input";
import { useOnClickOutsideOrSelf } from "./hooks";
import ErrorIconSVG from "../resources/error-icon.svg";
import ArrowDownIcon from "../resources/down-icon.svg";
import SearchIcon from "../resources/search-icon.svg";
import s from "./style.module.less";
import {
  onEnterDown,
  onFocus,
  onKeyDownDropdown,
  onKeyDownSelect,
} from "./events";

export interface Props {
  placeholder: string;
  onFocused?: () => void;
  onUpdate: (value: string[] | string) => void;
  options?: OptionsProps[];
  mode: "single" | "multiple";
  whenSelectedLabel?: string;
  fitWidth?: boolean;
  dataQa?: string;
  showSearch?: boolean;
  disabled?: boolean;
  defaultValue?: string[] | string;
  relativePositionFilters?: boolean;
  selectedOptions?: string[];
  showLabel?: boolean;
  labelText?: string;
  isError?: boolean;
  errorMessage?: string;
  errorMessagePlacement?: "top" | "bottom";
}

export interface OptionsProps {
  id: string;
  name: string;
  value: string;
  label?: React.ReactElement | string;
  "data-qa"?: string;
  count?: number;
}

const Dropdown = ({
  placeholder,
  onFocused,
  onUpdate,
  options,
  mode = "single",
  whenSelectedLabel = "Selected",
  fitWidth,
  dataQa,
  showSearch = false,
  disabled,
  defaultValue,
  relativePositionFilters = false,
  selectedOptions,
  showLabel = false,
  labelText,
  isError = false,
  errorMessage = "there is an error",
  errorMessagePlacement = "top",
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdownOptions, setDropdownOptions] = useState<
    OptionsProps[] | undefined
  >(options);
  const [values, setValues] = useState<Set<string>>(() => new Set());
  const [dropdownHeight, setDropdownHeight] = useState<number | string>("auto");

  const [singleValue, setSingleValue] = useState<OptionsProps>();
  const [inputTextValue, setInputTextValue] = useState<string>();
  const [showScrollbar, setShowScrollbar] = useState<boolean>();

  const dropdownBodyRef = useRef<HTMLUListElement>(null);
  const dropdownHeaderRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  useOnClickOutsideOrSelf(wrapperRef, () => setOpen(false));

  // 1. Update dropdown options:
  useEffect(() => {
    setDropdownOptions(updateDropdownOptions());
  }, [inputTextValue, options]);

  // 2. Focus on dropdown or search as appropriate when opened:
  useEffect(() => {
    if (!open) return;

    if (showSearch && searchRef.current && searchRef.current.focus) {
      searchRef.current.focus();
    } else if (dropdownBodyRef.current && dropdownBodyRef.current.focus) {
      dropdownBodyRef.current.focus();
    }

    setShowScrollbar(options && options.length > 3);
  }, [open, options, showSearch]);

  // 3. Set default value:
  useEffect(() => {
    if (defaultValue) {
      if (mode === "single") {
        setSingleValue(
          dropdownOptions?.find((it) => it.value === defaultValue)
        );
      }
      if (mode === "multiple") {
        setValues((prevState) => new Set([...prevState, ...defaultValue]));
      }
    }
  }, [defaultValue, mode, dropdownOptions]);

  // 4. Update based on `singleValue` changes:
  useEffect(() => {
    if (singleValue && mode === "single") {
      onUpdate(singleValue.value);
    }
  }, [singleValue, mode]);

  // 5. Handle relative position:
  useEffect(() => {
    if (relativePositionFilters && open && dropdownHeaderRef.current) {
      setDropdownHeight(200 + dropdownHeaderRef.current.offsetHeight);
    } else {
      setDropdownHeight("auto");
    }
  }, [open, relativePositionFilters]);

  // 6. Handle multiple value updates:
  useEffect(() => {
    handleMultipleValueUpdate();
  }, [selectedOptions, values]);

  const onChangeMultiple = (value: string) => {
    setValues((prevState) => {
      if (values.has(value)) {
        const newSet = new Set(prevState);
        newSet.delete(value);
        return newSet;
      }
      return new Set(prevState).add(value);
    });
  };

  const updateDropdownOptions = () => {
    if (!showSearch) return options;
    return options?.filter((it) =>
      it.name.toLowerCase().includes(inputTextValue?.toLowerCase() ?? "")
    );
  };

  const handleMultipleValueUpdate = () => {
    if (selectedOptions && selectedOptions.length !== values.size) {
      setValues(new Set(selectedOptions));
    }
    if (mode === "multiple") {
      onUpdate([...values]);
    }
  };

  const onChangeSingle = (option: OptionsProps) => {
    setSingleValue(option);
    setOpen(false);
  };

  const renderOptions = (option: OptionsProps) => {
    const { id, name, label, value, count } = option;
    const ariaLabel = count ? `${label}, ${count} results` : undefined;

    if (count === 0) {
      return null;
    }

    switch (mode) {
      case "single": {
        const checked = value === singleValue?.value;

        return (
          <li
            data-id={value}
            aria-selected={checked}
            role="option"
            aria-label={ariaLabel}
            onKeyDown={(e) => onEnterDown(e, () => onChangeSingle(option))}
          >
            <Checkbox
              data-qa={option["data-qa"]}
              onChange={() => onChangeSingle(option)}
              checked={checked}
              id={id}
              name={name}
              label={label}
              value={value}
              className={s.singleMode}
              largeFont
              count={count}
            />
          </li>
        );
      }
      case "multiple": {
        const checked = values.has(value);

        return (
          <li
            data-id={value}
            data-qa={value}
            aria-selected={checked}
            role="option"
            aria-label={ariaLabel}
            onKeyDown={(e) => onEnterDown(e, () => onChangeMultiple(value))}
          >
            <Checkbox
              onChange={() => onChangeMultiple(value)}
              checked={checked}
              id={id}
              name={name}
              label={label}
              value={value}
              largeFont
              count={count}
            />
          </li>
        );
      }
      default:
        return <div />;
    }
  };

  const renderLabel = () => {
    const placeholderSpan = (
      <span className={s.placeholder}>{placeholder}</span>
    );

    if (mode === "single") {
      return singleValue?.label || singleValue?.name || placeholderSpan;
    }
    if (mode === "multiple" && values.size > 0) {
      return `${whenSelectedLabel} (${values.size}) `;
    }

    return placeholderSpan;
  };

  return (
    <div
      className={c(s.wrapper, {
        [s.fitWidth]: fitWidth,
      })}
      data-qa={dataQa}
      style={{ height: dropdownHeight }}
      ref={wrapperRef}
    >
      {showLabel && (
        <Typography.Body as="div" className={s.dropdownLabel}>
          {labelText}
        </Typography.Body>
      )}
      {isError && errorMessage && errorMessagePlacement === "top" && (
        <span className={s.errorMessage} role="alert">
          <span>
            <ErrorIconSVG />
          </span>
          <span>{errorMessage}</span>
        </span>
      )}
      <button
        data-qa="select"
        type="button"
        className={c(s.button, {
          [s.margin]: showLabel,
          [s.error]: isError,
          [s.inFront]: open,
        })}
        onFocus={() => {
          setOpen(true);
        }}
        onMouseDown={() => setOpen(!open)}
        onKeyDown={(e) => onKeyDownSelect(e, () => setOpen(true))}
        aria-expanded={open}
        disabled={disabled}
        ref={dropdownHeaderRef}
      >
        <Typography.Body weight={values.size > 0 ? "medium" : undefined}>
          {renderLabel()}
        </Typography.Body>
        <ArrowDownIcon />
      </button>
      {isError && errorMessage && errorMessagePlacement === "bottom" && (
        <span className={c(s.errorMessage, s.bottom)} role="alert">
          <span>
            <ErrorIconSVG />
          </span>
          <span>{errorMessage}</span>
        </span>
      )}
      {open && (
        <ul
          tabIndex={0}
          data-qa="dropdown"
          role="listbox"
          aria-orientation="vertical"
          onKeyDown={(e) => onKeyDownDropdown(e, () => setOpen(false))}
          onFocus={(e) => {
            if (onFocused) {
              onFocused();
            }
            onFocus(e);
          }}
          ref={dropdownBodyRef}
          className={c({
            [s.below]: open,
            [s.belowError]: isError && errorMessagePlacement === "top",
            [s.hasScrollbar]: showScrollbar,
            [s.hasLabel]: showLabel,
          })}
        >
          {showSearch && (
            <InputText
              showLabelText={false}
              inputType="text"
              onChange={(e) => setInputTextValue(e)}
              id="dropdown-search-input"
              placeholder="Search..."
              className={s.textInput}
              defaultValue={inputTextValue}
              icon={<SearchIcon />}
              ref={searchRef}
              onKeyDown={(e) =>
                onEnterDown(e, () => {
                  if (!!dropdownOptions && dropdownOptions.length > 0) {
                    if (mode === "single") {
                      e.preventDefault();
                      onChangeSingle(dropdownOptions[0]);
                    }
                  }
                })
              }
            />
          )}

          {dropdownOptions?.map((option) => {
            return (
              <React.Fragment key={option.id}>
                {renderOptions(option)}
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
