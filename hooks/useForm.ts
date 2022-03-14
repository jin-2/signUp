import { useState } from "react";
import { changeEventType, submitEventType } from "types/common";
import validate from "utils/validate";

export type MessageRecord<T> = Partial<Record<keyof T, string>>;
type TouchedRecord<T> = Partial<Record<keyof T, boolean>>;
export type SetValueType<T> = (name: keyof T, value: T[keyof T]) => void;

export default function useForm<Type>(
  initialValues: Type,
  onSubmit: (msg: MessageRecord<Type>) => void
) {
  const [values, setValues] = useState<Type>(initialValues);
  const [message, setMessage] = useState<MessageRecord<Type>>({});
  const [touched, setTouched] = useState<TouchedRecord<Type>>({});
  const [isValid, setValid] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const setValue: SetValueType<Type> = (name, value) => {
    setValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChange: changeEventType = ({ target: { name, value, type } }) => {
    const newValues = { ...values, [name]: value.trim() };
    setValues(newValues);

    const { isValid, msg } = validate(newValues);
    setTouched({ ...touched, [name]: true });
    setMessage(msg as MessageRecord<Type>);
    setValid(isValid);
  };

  const allTouched = Object.keys(values).reduce(
    (obj, key) => ({
      ...obj,
      [key]: true
    }),
    {}
  );

  const handleSubmit: submitEventType = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const { isValid, msg } = validate(values);

    setTouched({ ...touched, ...allTouched });
    setMessage(msg as MessageRecord<Type>);
    setValid(isValid);
    onSubmit(msg as MessageRecord<Type>);
    setSubmitting(false);
  };

  return { values, message, touched, handleChange, handleSubmit, setValue };
}
