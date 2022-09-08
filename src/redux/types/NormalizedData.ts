export type NormalizedData<T> = {
  ids: string[];
  entries: {
    [id: string]: T;
  };
};
