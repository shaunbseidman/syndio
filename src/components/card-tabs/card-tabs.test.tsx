import { render, screen } from '@testing-library/react';
import { GroupValues } from '../../interfaces/values.enum';
import CardTabs from './card-tabs';

describe('CardTabs', () => {
  it('is trutny', () => {
    render(<CardTabs label={GroupValues.GBF} />);

    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText('Race')).toBeInTheDocument();

  });

  it('asserts the tabs are visible', async () => {
    render(<CardTabs label={GroupValues.GBF} />);

    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText('Race')).toBeInTheDocument();;
  });
});
