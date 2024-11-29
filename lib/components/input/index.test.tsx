import { fireEvent, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SearchIcon from './resources/search-icon.svg?react';
import { Input } from '.';

describe('boInput', () => {
  it('does not show error message when error is false', () => {
    const wrapper = render(
      <Input
        id="Input"
        isError={false}
        errorMessage={"Shouldn't see me"}
        inputType="text"
        onChange={vi.fn()}
      />
    );

    expect(wrapper.queryByText("Shouldn't see me")).toBeNull();
  });

  it('does shows error message when error is true', () => {
    const wrapper = render(
      <Input
        id="Input"
        isError
        errorMessage="Should see me"
        inputType="text"
        onChange={vi.fn()}
      />
    );

    expect(wrapper.queryByText('Should see me')).toBeVisible();
  });

  it('search icon is displayed on text input if specified', () => {
    const wrapper = render(
      <Input
        icon={<SearchIcon />}
        inputType="text"
        placeholder="Search..."
        id="Input"
        onChange={vi.fn()}
      />
    );

    expect(wrapper.getByTestId('search-icon')).toBeVisible();
  });

  it('Hides label text if specified', () => {
    const wrapper = render(
      <Input
        icon={<SearchIcon />}
        inputType="text"
        placeholder="Search..."
        id="Input"
        labelText="search"
        showLabelText={false}
        onChange={vi.fn()}
      />
    );

    expect(
      wrapper.queryByLabelText('search (Optional)')
    ).not.toBeInTheDocument();
  });

  it('Calls onChange event when input value is changed', () => {
    const onChange = vi.fn();

    const wrapper = render(
      <Input
        icon={<SearchIcon />}
        inputType="text"
        placeholder="Search..."
        id="Input"
        labelText="search"
        showLabelText={false}
        onChange={onChange}
      />
    );

    fireEvent.change(wrapper.getByPlaceholderText('Search...'), {
      target: { value: 'new search' },
    });

    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith('new search');
  });

  it('Clears input when clear button is clicked', async () => {
    const wrapper = render(
      <Input
        inputType="text"
        placeholder="Search..."
        id="Input"
        labelText="search"
        showLabelText={false}
        defaultValue="text"
        allowClear
        onChange={vi.fn()}
      />
    );

    fireEvent.click(await wrapper.findByTestId('clear-icon'));

    const input = await wrapper.findByPlaceholderText('Search...');
    expect(input.getAttribute('value')).toBe('');
  });

  it('should display length of max input vlue ', async () => {
    const wrapper = render(
      <Input
        inputType="text"
        placeholder="Search..."
        id="Input"
        labelText="search"
        showLabelText={false}
        allowClear
        onChange={vi.fn()}
        constraints={{
          required: true,
          minLength: 2,
          maxLength: 4,
        }}
      />
    );

    const input = wrapper.getByPlaceholderText('Search...');

    await userEvent.type(input, '123456789');

    expect(input.getAttribute('value')).toBe('1234');
  });
});
