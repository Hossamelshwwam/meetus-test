"use client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface Props {
  name: string;
  type: string;
  handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  label?: string;
  placeholder?: string;
  half?: boolean;
  disabled?: boolean;
  InputClassName?: string;
  labalClassName?: string;
  error?: string;
  min?: number;
  max?: number;
  icon?: IconProp;
}

const Inputs = ({
  name,
  label,
  type,
  placeholder,
  InputClassName,
  labalClassName,
  half,
  handlerChange,
  value,
  min,
  max,
  error,
  disabled,
  icon,
}: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${
        half ? "lg:col-span-1 col-span-2" : "col-span-2"
      } mb-5 relative`}
    >
      {label && (
        <label htmlFor={name} className={`${labalClassName}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={
            type === "password" && !show
              ? "password"
              : type === "password" && show
              ? "text"
              : type
          }
          onChange={handlerChange}
          value={value}
          placeholder={placeholder}
          maxLength={max}
          className={`${InputClassName} ${icon ? "pl-10" : ""}`}
          disabled={disabled}
        />
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={`cursor-pointer text-xl text-n-main absolute top-1/2 -translate-y-1/2 hover:text-n-sub-main duration-300 left-2`}
          />
        )}
        {type === "password" && (
          <FontAwesomeIcon
            icon={show ? faEyeSlash : faEye}
            onClick={() => setShow(!show)}
            className={`cursor-pointer text-xl text-n-main absolute top-1/2 -translate-y-1/2 hover:text-n-sub-main duration-300 right-2`}
          />
        )}
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Inputs;
