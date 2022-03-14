import styled from "styled-components";
import { changeEventType } from "types/common";

interface CheckboxProps {
  children: React.ReactNode;
  name: string;
  checked: boolean;
  handleChange: changeEventType;
}

const Checkbox = ({ children, name, checked, handleChange }: CheckboxProps) => {
  return (
    <CheckboxEl>
      <label className="label">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
          className="visually-hidden"
        />
        <span className="label-text">{children}</span>
      </label>
    </CheckboxEl>
  );
};
export default Checkbox;

const CheckboxEl = styled.p`
  position: relative;
  padding-left: 26px;
  letter-spacing: -1px;

  & + & {
    margin-top: 15px;
  }

  .label-text {
    font-size: 13px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid #ced3d7;
      border-radius: 1px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 2px;
      display: none;
      width: 14px;
      height: 11px;
      background: url("/images/checked.svg") no-repeat 0 0;
      background-size: contain;
    }
  }

  input:checked + .label-text::after {
    display: block;
  }
`;
