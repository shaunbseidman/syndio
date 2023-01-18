import { render } from '@testing-library/react';
import GroupSelect from './group-select';

describe('GroupSelect', () => {
  let mockOnGroupChange: any;

  beforeEach(() => {
    mockOnGroupChange = jest.fn();
  });

  it('should render the Group Select Component', () => {
    const { getByText } = render(<GroupSelect onGroupChange={mockOnGroupChange} />);
    expect(getByText('Choose a group')).toBeInTheDocument();
  });
});
