import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  console.log(value);
  return {
    value,
    setValue,
    resetValue: () => setValue("")
  };
}
