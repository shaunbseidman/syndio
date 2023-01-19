import { render, screen } from '@testing-library/react';
import CardGrid from './card-grid';
import { GroupInterface } from '../../interfaces/group';

describe('CardGrid', () => {
  const groupByType: GroupInterface = {
    id: '1',
    label: 'foo',
  };

  it('is truthy', () => {
    const { container } = render(<CardGrid groupByType={groupByType} />);
    expect(container.firstChild).toBeTruthy();
  });
});
