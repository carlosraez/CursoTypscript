import { useState } from 'react';

export const useForm = <T extends Object>(form: T) => {
  const [state, setForm] = useState(form);

  const handleInputChange = (value: string, input: keyof T) => {
    setForm({
      ...state,
      [input]: value,
    });
  };
  return {
    ...state,
    handleInputChange,
    form: state,
  };
};
