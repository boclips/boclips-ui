import React, { useEffect, useRef, useState } from "react";
import c from "classnames";
import { Typography } from "@boclips-ui/typography";
import Checkbox from "@boclips-ui/checkbox";
import { InputText } from "@boclips-ui/input";
import { useOnClickOutsideOrSelf } from "./hooks";

import ArrowDownIcon from "../resources/down-icon.svg";
import SearchIcon from "../resources/search-icon.svg";
import s from "./style.module.less";
import { onFocus, onKeyDownDropdown, onKeyDownSelect } from "./events";

export interface Props {
  placeholder: string;
  onUpdate: any;
  options: OptionsProps[] | undefined;
  mode: "single" | "multiple";
  whenSelectedLabel?: string;
  fitWidth?: boolean;
  dataQa?: string;
  showSearch?: boolean;
  disabled?: boolean;
  defaultValue?: string[] | string;
}

export interface OptionsProps {
  id: string;
  name: string;
  label?: React.ReactElement | string;
  value: string;
  "data-qa"?: string;
  count?: number;
}

const Dropdown = ({
  placeholder,
  onUpdate,
  options,
  mode = "single",
  whenSelectedLabel = "Selected",
  fitWidth,
  dataQa,
  showSearch = false,
  disabled,
  defaultValue,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdownOptions, setDropdownOptions] = useState<
    OptionsProps[] | undefined
  >(options);
  const [values, setValues] = useState<Set<string>>(() => new Set());

  const [singleValue, setSingleValue] = useState<OptionsProps>();
  const [inputTextValue, setInputTextValue] = useState<string>();

  const dropdownBodyRef = useRef(null);
  const dropdownHeaderRef = useRef(null);
  useOnClickOutsideOrSelf(dropdownBodyRef, dropdownHeaderRef, () =>
    setOpen(false)
  );

  useEffect(() => {
    if (options && inputTextValue && showSearch) {
      setDropdownOptions(() =>
        options?.filter((it) =>
          it.name.toLowerCase().includes(inputTextValue.toLowerCase())
        )
      );
    }
  }, [inputTextValue]);

  useEffect(() => {
    if (mode === "multiple") {
      onUpdate([...values]);
    }
  }, [values]);

  useEffect(() => {
    if (singleValue && mode === "single") {
      onUpdate(singleValue.value);
    }
  }, [singleValue]);

  useEffect(() => {
    setDropdownOptions(options);

    if (dropdownBodyRef.current && open) {
      (dropdownBodyRef.current! as HTMLElement).focus();
    }
  }, [open]);

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
  }, [defaultValue]);

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

  const onChangeSingle = (option: OptionsProps) => {
    setSingleValue(option);
    setOpen(false);
  };

  const renderOptions = (option: OptionsProps) => {
    const { id, name, label, value, count } = option;
    const ariaLabel = count ? `${label}, ${count} results` : undefined;

    switch (mode) {
      case "single": {
        const checked = value === singleValue?.value;

        return (
          <li
            data-id={value}
            aria-selected={checked}
            role="option"
            aria-label={ariaLabel}
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
            aria-selected={checked}
            role="option"
            aria-label={ariaLabel}
          >
            <Checkbox
              data-qa={option["data-qa"]}
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
    if (mode === "single") {
      return singleValue?.label || singleValue?.name || placeholder;
    }
    if (mode === "multiple" && values.size > 0) {
      return `${whenSelectedLabel} (${values.size}) `;
    }
    return placeholder;
  };

  return (
    <div
      className={c(s.wrapper, {
        [s.fitWidth]: fitWidth,
      })}
      data-qa={dataQa}
    >
      <button
        data-qa="select"
        type="button"
        className={c({
          [s.inFront]: open,
        })}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => onKeyDownSelect(e, () => setOpen(true))}
        aria-expanded={open}
        disabled={disabled}
        ref={dropdownHeaderRef}
      >
        <Typography.Body>{renderLabel()}</Typography.Body>
        <ArrowDownIcon />
      </button>
      {open && (
        <ul
          tabIndex={0}
          data-qa="dropdown"
          role="listbox"
          aria-orientation="vertical"
          onKeyDown={(e) => onKeyDownDropdown(e, () => setOpen(false))}
          onFocus={(e) => onFocus(e)}
          ref={dropdownBodyRef}
          className={c({
            [s.below]: open,
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
