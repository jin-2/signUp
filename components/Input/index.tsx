import styled from "styled-components";
import { forwardRef } from "react";
import { changeEventType } from "types/common";

interface InputProps {
  name: string;
  type: "text" | "email" | "password";
  label: string;
  message: string;
  maxlength: number;
  value: string;
  handleChange: changeEventType;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      type,
      label,
      message,
      maxlength,
      value,
      handleChange,
      required = true
    }: InputProps,
    ref
  ) => {
    return (
      <InputEl>
        <label className="label">
          <input
            ref={ref}
            name={name}
            type={type}
            className="input"
            maxLength={maxlength}
            required={required}
            value={value}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="label-text">{label}</span>
        </label>
        <p className="message">{message}</p>
      </InputEl>
    );
  }
);
Input.displayName = "Input";
export default Input;

const InputEl = styled.div`
  margin-bottom: 14px;

  .label {
    position: relative;
    display: block;
  }

  .label-text {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 68px;
    height: 58px;
    color: #999;
    pointer-events: none;
    transition: all 0.1s ease;
  }

  .input {
    padding-top: 10px;
    width: 100%;
    height: 58px;
    border: 0;
    border-bottom: 1px solid #e5e7ea;

    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.red};
    }

    &:valid + .label-text,
    &:focus + .label-text,
    &:not([value=""]) + .label-text {
      top: -28px;
      font-size: 11px;
    }
  }

  .message {
    padding: 8px 0 10px;
    font-size: 11px;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.colors.red};
  }

  .invalid {
    .message {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
