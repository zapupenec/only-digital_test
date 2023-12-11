export type TEvent = {
  year: number;
  text: string;
};

export type TCategory = {
  id: number;
  title: string;
  events: TEvent[];
};
