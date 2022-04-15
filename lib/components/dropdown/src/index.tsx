import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useRef,
  useState,
} from "react";
import c from "classnames";
import { Typography } from "@boclips-ui/typography";
import Checkbox from "@boclips-ui/checkbox/src";
import { useOnClickOutside } from "./hooks";

import ArrowDownIcon from "../resources/down-icon.svg";
import s from "./style.module.less";

export interface Props {
  placeholder: string;
  onUpdate: any;
  options: OptionsProps[];
  mode: "single" | "multiple";
}

export interface OptionsProps {
  id: string;
  name: string;
  label: React.ReactElement | string;
  value: string;
}

const Dropdown = ({
  placeholder,
  onUpdate,
  options,
  mode = "single",
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState<Set<string>>(() => new Set());
  const [value, setValue] = useState<OptionsProps>();
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setOpen(false));

  useEffect(() => {
    if (!(values.size === 0) && mode === "multiple") {
      onUpdate([...values]);
    }
  }, [values]);

  useEffect(() => {
    if (value && mode === "single") {
      onUpdate(value.value);
    }
  }, [value]);

  // useEffect(() => {
  //   if (dropdownRef.current) {
  //     dropdownRef.current.firstChild.querySelector("input").focus();
  //     console.log(dropdownRef.current.firstChild.querySelector("input"));
  //   }
  // }, [open]);

  const onChangeMultiple = (v: string) => {
    setValues((prevState) => {
      if (values.has(v)) {
        const newSet = new Set(prevState);
        newSet.delete(v);
        return newSet;
      }
      return new Set(prevState).add(v);
    });
  };

  const onChangeSingle = (option: OptionsProps) => {
    setValue(option);
    setOpen(false);
  };

  const renderOptions = (option: OptionsProps) => {
    const { id, name, label, value: v } = option;
    switch (mode) {
      case "single":
        return (
          <Checkbox
            onChange={() => onChangeSingle(option)}
            checked={v === value?.value}
            id={id}
            name={name}
            label={label}
            value={v}
            className={s.hideCheckbox}
          />
        );
      case "multiple":
        return (
          <Checkbox
            onChange={() => onChangeMultiple(v)}
            checked={values.has(v)}
            id={id}
            name={name}
            label={label}
            value={value?.value}
          />
        );
      default:
        return <div />;
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setOpen(true);
      console.log(dropdownRef.current.firstChild);
      // @ts-ignore
      dropdownRef.current.firstChild.focus();
    }
  };

  return (
    <div className={s.wrapper}>
      <button
        type="button"
        className={c({
          [s.inFront]: open,
        })}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => onKeyDown(e)}
      >
        <Typography.Body>
          {value?.label || value?.name || placeholder}
        </Typography.Body>
        <ArrowDownIcon />
      </button>

      {open && (
        <ul
          ref={dropdownRef}
          className={c({
            [s.below]: open,
          })}
        >
          {options.map((option) => {
            return <li key={option.id}>{renderOptions(option)}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
