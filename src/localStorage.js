import { LIST } from './configs/constants';

export const loadData = () => {
  try {
    const serializedData = localStorage.getItem(LIST);
    if (serializedData !== null) {
      const parsedData = JSON.parse(serializedData);
      if (Array.isArray(parsedData)) {
        return parsedData;
      }
    }
    return [];
  } catch (err) {
    return [];
  }
};

export const saveData = (list) => {
  try {
    const serializedData = JSON.stringify(list);
    localStorage.setItem(LIST, serializedData);
  } catch (err) {
    // Ignore write errors.
  }
};
