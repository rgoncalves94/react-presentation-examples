import { useState } from "react";

const useLists = <T>() => {
  const [data, setData] = useState<T[]>([]);

  const itemExists = (item: T) => data.includes(item);

  const prependItem = (value: T) => () => {
    if (!itemExists(value)) {
      setData([value].concat(data));
    }
  };

  const appendItem = (value: T) => () => {
    if (!itemExists(value)) {
      setData(data.concat(value));
    }
  };

  const removeItem = (value: T) => () => {
    setData(data.filter((item) => item !== value));
  };

  return {
    data,
    prependItem,
    appendItem,
    removeItem,
    itemExists,
  };
};

export { useLists };
