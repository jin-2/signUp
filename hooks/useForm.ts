import { useState } from "react";
import { changeEventType, submitEventType } from "types/common";
import validate from "utils/validate";

export type MessageRecord<T> = Partial<Record<keyof T, string>>;
type TouchedRecord<T> = Partial<Record<keyof T, boolean>>;
export type SetValueType<T> = (name: keyof T, value: T[keyof T]) => void;

const useForm = <Type>(
  initialValues: Type,
  onSubmit: (msg: MessageRecord<Type>) => void
) => {
  const [values, setValues] = useState<Type>(initialValues);
  const [message, setMessage] = useState<MessageRecord<Type>>({});
  const [touched, setTouched] = useState<TouchedRecord<Type>>({});
  const [submitting, setSubmitting] = useState(false);

  const validation = (obj: Type) => {
    const { msg } = validate(obj);
    setMessage(msg as MessageRecord<Type>);
  };

  const setValue: SetValueType<Type> = (name, value) => {
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    validation(newValues);
  };

  const handleChange: changeEventType = ({ target: { name, value } }) => {
    const newValues = { ...values, [name]: value.trim() };
    setValues(newValues);
    setTouched({ ...touched, [name]: true });
    validation(newValues);
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

    setTouched({ ...touched, ...allTouched });

    const { msg } = validate(values);
    setMessage(msg as MessageRecord<Type>);
    onSubmit(msg as MessageRecord<Type>);

    setSubmitting(false);
  };

  return {
    submitting,
    values,
    message,
    touched,
    handleChange,
    handleSubmit,
    setValue
  };
};
export default useForm;
