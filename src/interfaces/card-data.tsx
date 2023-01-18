export interface CardData {
  cardData: PayEquityGapData[];
}


interface PayEquityGapData {
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
