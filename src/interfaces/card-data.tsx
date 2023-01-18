export interface CardData {
  cardData: GroupData[];
}

interface GroupData {
  label: string;
  data?: {
    label?: string;
    value?: string;
    minority?: {
      label?: string;
      value: string;
    };
    majority?: {
      label?: string;
      value?: string;
    };
  };
}
