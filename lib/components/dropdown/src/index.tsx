import React, { useEffect, useRef, useState } from "react";
import c from "classnames";
import { Typography } from "@boclips-ui/typography";
import Checkbox from "@boclips-ui/checkbox/src";
import { useOnClickOutside } from "./hooks";

import ArrowDownIcon from "../resources/down-icon.svg";
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
}

export interface OptionsProps {
  id: string;
  name: string;
  label: React.ReactElement | string;
  value: string;
  "data-qa"?: string;
}

const Dropdown = ({
  placeholder,
  onUpdate,
  options,
  mode = "single",
  whenSelectedLabel = "Selected",
  fitWidth,
  dataQa,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState<Set<string>>(() => new Set());
  const [singleValue, setSingleValue] = useState<OptionsProps>();
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setOpen(false));

  useEffect(() => {
    if (!(values.size === 0) && mode === "multiple") {
      onUpdate([...values]);
    } else {
      onUpdate([]);
    }
  }, [values]);

  useEffect(() => {
    if (singleValue && mode === "single") {
      onUpdate(singleValue.value);
    }
  }, [singleValue]);

  useEffect(() => {
    if (dropdownRef.current && open) {
      (dropdownRef.current! as HTMLElement).focus();
    }
  }, [open]);

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
    const { id, name, label, value } = option;

    switch (mode) {
      case "single": {
        const checked = value === singleValue?.value;

        return (
          <li data-id={value} aria-selected={checked} role="option">
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
            />
          </li>
        );
      }
      case "multiple": {
        const checked = values.has(value);

        return (
          <li data-id={value} aria-selected={checked} role="option">
            <Checkbox
              data-qa={option["data-qa"]}
              onChange={() => onChangeMultiple(value)}
              checked={checked}
              id={id}
              name={name}
              label={label}
              value={value}
              largeFont
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
          ref={dropdownRef}
          className={c({
            [s.below]: open,
          })}
        >
          {options?.map((option) => {
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
