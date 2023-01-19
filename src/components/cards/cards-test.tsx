import { render, screen } from '@testing-library/react';
import Cards from './cards';
import { GroupValues } from '../../interfaces/values.enum';

describe('Cards', () => {
  it('renders correctly', () => {
    const cardData = [
      {
        label: GroupValues.PAY,
        data: {
          minority: {
            label: 'Women',
            value: '$0.50'
          },
          majority: {
            label: 'Men',
            value: '$1.00'
          }
        }
      },
      {
        label: GroupValues.EMP,
        data: {
          label: 'Women',
          value: '40%'
        }
      },
      {
        label: GroupValues.BUD,
        data: {
          value: '$50,000'
        }
      }
    ];

    render(<Cards cardData={cardData} />);

    expect(screen.getByText('PAY')).toBeInTheDocument();
    expect(screen.getByText('Women earn $0.50 for every $1.00 by Men')).toBeInTheDocument();
    expect(screen.getByText('EMP')).toBeInTheDocument();
    expect(screen.getByText('Women make up 40% of employees')).toBeInTheDocument();
    expect(screen.getByText('BUD')).toBeInTheDocument();
    expect(screen.getByText('$50,000 minimum recommended budget to reduce pay equity gap')).toBeInTheDocument();
  });
});
