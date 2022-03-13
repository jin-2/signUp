import styled from "styled-components";

interface InputProps {
  type: "text" | "email";
  label: string;
  message: string;
  maxlength: number;
  required?: boolean;
}

export default function Input({
  type,
  label,
  message,
  maxlength,
  required = true
}: InputProps) {
  return (
    <InputEl>
      <label className="label">
        <input
          type={type}
          className="input"
          maxLength={maxlength}
          required={required}
        />
        <span className="label-text">{label}</span>
      </label>
      <p className="message">{message}</p>
    </InputEl>
  );
}

const InputEl = styled.div`
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
    &:focus + .label-text {
      top: -28px;
      font-size: 11px;
    }
  }

  .message {
    padding: 8px 0 10px;
    font-size: 11px;
    letter-spacing: -1px;
  }

  .invalid {
    .message {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
