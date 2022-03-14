import { useState } from "react";
import { changeEventType } from "types/common";
import validate from "utils/validate";

export type MessageRecord<T> = Partial<Record<keyof T, string>>;
type TouchedRecord<T> = Partial<Record<keyof T, boolean>>;

export default function useForm<Type>(initialValues: Type) {
  const [values, setValues] = useState<Type>(initialValues);
  const [message, setMessage] = useState<MessageRecord<Type>>({});
  const [touched, setTouched] = useState<TouchedRecord<Type>>({});
  const [isValid, setValid] = useState(true);

  const handleChange: changeEventType = ({ target: { name, value } }) => {
    const newValues = { ...values, [name]: value.trim() };
    const { isValid, msg } = validate(newValues);
    setValues(newValues);
    setTouched({ ...touched, [name]: true });
    setMessage(msg as MessageRecord<Type>);
    setValid(isValid);
  };

  return { values, handleChange, message, touched };
}
