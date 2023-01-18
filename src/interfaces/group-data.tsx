export interface GroupDataInterface {
  id: string;
  label: string;
  data: {
    gender: {
      payEquityGap: {
        label: string;
        data: {
          minority: {
            label: string;
            value: string;
          },
          majority: {
            label: string;
            value: string;
          }
        }
      },
      employeeComparison: {
        label: string;
        data: {
          label: string;
          value: string;
        }
      },
      budget: {
        label: string;
        data: {
          value: string;
        }
      },
    }
    race: {
      payEquityGap: {
        label: string;
        data: {
          minority: {
            label: string;
            value: string;
          },
          majority: {
            label: string;
            value: string;
          }
        }
      },
      employeeComparison: {
        label: string;
        data: {
          label: string;
          value: string;
        }
      },
      budget: {
        label: string;
        data: {
          value: string;
        }
      }
    },
  }
}