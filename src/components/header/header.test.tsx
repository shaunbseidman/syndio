import { render, fireEvent } from '@testing-library/react';
import Header from './header';

jest.mock('../group-select/group-select', () => {
  const GroupSelect = (props: any) => {
    const { onGroupChange } = props;
    return (
      <div>
        <button onClick={() => onGroupChange('group1')}>Group 1</button>
        <button onClick={() => onGroupChange('group2')}>Group 2</button>
      </div>
    );
  };
  return GroupSelect;
});

describe('Header', () => {
  it('onGroupChange should fire off when a group is selected', () => {
    const onGroupChange = jest.fn();
    const { getByText } = render(<Header onGroupChange={onGroupChange} />);
    fireEvent.click(getByText('Group 1'));
    expect(onGroupChange).toHaveBeenCalledWith('group1');
    fireEvent.click(getByText('Group 2'));
    expect(onGroupChange).toHaveBeenCalledWith('group2');
  });
});