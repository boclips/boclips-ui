import { fireEvent, render, waitFor, within } from '@testing-library/react';
import { Dropdown, OptionsProps } from '.';

const options: OptionsProps[] = [
  {
    id: '1',
    name: 'checkbox label 1',
    label: 'checkbox label 1',
    value: 'value-1',
    count: 1,
  },
  {
    id: '2',
    name: 'checkbox label 2',
    label: 'checkbox label 2',
    value: 'value-2',
    count: 1,
  },
  {
    id: '3',
    name: 'checkbox label 3',
    label: 'checkbox label 3',
    value: 'value-3',
    count: 1,
  },
];

const optionsWithZeroCount: OptionsProps[] = [
  {
    id: '1',
    name: 'checkbox label 1',
    label: 'checkbox label 1',
    value: 'value-1',
    count: 1,
  },
  {
    id: '2',
    name: 'checkbox label 2',
    label: 'checkbox label 2',
    value: 'value-2',
    count: 0,
  },
];

describe('Dropdown', () => {
  it('renders the dropdown', () => {
    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={() => {}}
        options={options}
        mode="single"
      />
    );

    expect(wrapper.getByText('this is placeholder')).toBeVisible();
  });

  it('opens the dropdown when clicked', () => {
    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={() => {}}
        options={options}
        mode="single"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    expect(wrapper.getByText('checkbox label 1')).toBeVisible();
  });

  it('displays the selected value instead of placeholder', () => {
    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={() => {}}
        options={options}
        mode="single"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));
    fireEvent.click(wrapper.getByText('checkbox label 1'));
    expect(wrapper.getByText('checkbox label 1')).toBeVisible();
    expect(wrapper.queryByText('this is placeholder')).not.toBeInTheDocument();
  });

  it('returns single value', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="single"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    fireEvent.click(wrapper.getByText('checkbox label 1'));

    expect(onUpdate).toHaveBeenCalled();

    expect(onUpdate).toHaveBeenCalledWith('value-1');

    expect(
      within(wrapper.getByTestId('select')).getByText('checkbox label 1')
    ).toBeVisible();

    fireEvent.click(wrapper.getByTestId('select'));

    fireEvent.click(wrapper.getByText('checkbox label 2'));

    expect(onUpdate).toHaveBeenCalledWith('value-2');

    expect(
      within(wrapper.getByTestId('select')).getByText('checkbox label 2')
    ).toBeVisible();
  });

  it('returns multiple values', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    fireEvent.click(wrapper.getByText('checkbox label 1'));

    expect(onUpdate).toHaveBeenCalled();

    expect(onUpdate).toHaveBeenCalledWith(['value-1']);

    expect(
      within(wrapper.getByTestId('select')).getByText('Selected (1)')
    ).toBeVisible();

    fireEvent.click(wrapper.getByText('checkbox label 2'));

    expect(onUpdate).toHaveBeenCalledWith(['value-1', 'value-2']);

    fireEvent.click(wrapper.getByTestId('select'));

    expect(
      within(wrapper.getByTestId('select')).getByText('Selected (2)')
    ).toBeVisible();
  });

  it('displays correct label when many checkboxes selected', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    fireEvent.click(wrapper.getByText('checkbox label 1'));

    fireEvent.click(wrapper.getByText('checkbox label 2'));

    fireEvent.click(wrapper.getByTestId('select'));

    expect(
      within(wrapper.getByTestId('select')).getByText('Selected (2)')
    ).toBeVisible();
  });

  it('moves the focus to dropdown when opened', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const dropdownWrapper = wrapper.getByTestId('dropdown');

    expect(dropdownWrapper).toHaveFocus();
  });

  it('closes the dropdown when focused outside the dropdown', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <div>
        <Dropdown
          placeholder="this is placeholder 1"
          onUpdate={onUpdate}
          options={options}
          mode="multiple"
          whenSelectedLabel="Selected"
        />
        <button type="button">focus this</button>
      </div>
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const dropdownWrapper = wrapper.getByTestId('dropdown');

    expect(dropdownWrapper).toHaveFocus();

    const button = wrapper.getByText('focus this');

    button.focus();

    expect(button).toHaveFocus();

    waitFor(() => {
      expect(dropdownWrapper).not.toBeInTheDocument();
    });
  });

  it("doesn't display dropdown item when count is 0", async () => {
    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        options={optionsWithZeroCount}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    expect(
      await wrapper.queryByText('checkbox label 2')
    ).not.toBeInTheDocument();
  });

  it('allows to navigate through dropdown via keyboard', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const dropdownWrapper = wrapper.getByTestId('dropdown');

    expect(dropdownWrapper).toHaveFocus();

    fireEvent.keyDown(dropdownWrapper, {
      key: 'ArrowDown',
    });

    expect(wrapper.getByText('checkbox label 1').previousSibling).toHaveFocus();

    fireEvent.keyDown(dropdownWrapper, {
      key: 'ArrowDown',
    });

    expect(wrapper.getByText('checkbox label 2').previousSibling).toHaveFocus();

    fireEvent.keyDown(dropdownWrapper, {
      key: 'ArrowUp',
    });

    expect(wrapper.getByText('checkbox label 1').previousSibling).toHaveFocus();
  });

  it('displays the search input ', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const searchInput = wrapper.getByPlaceholderText('Search...');

    expect(searchInput).toBeInTheDocument();
  });

  it('displays the search input ', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const searchInput = wrapper.getByPlaceholderText('Search...');

    expect(searchInput).toBeInTheDocument();
  });

  it('filters out the options when searching', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const searchInput = wrapper.getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: '2' } });

    expect(wrapper.getByText('checkbox label 2')).toBeInTheDocument();
    expect(wrapper.queryByText('checkbox label 1')).not.toBeInTheDocument();
    expect(wrapper.queryByText('checkbox label 3')).not.toBeInTheDocument();
  });

  it('searching for options is case insensitive', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const searchInput = wrapper.getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: 'ChEckBox Label 2' } });

    expect(wrapper.getByText('checkbox label 2')).toBeInTheDocument();
    expect(wrapper.queryByText('checkbox label 1')).not.toBeInTheDocument();
    expect(wrapper.queryByText('checkbox label 3')).not.toBeInTheDocument();
  });

  it('does not filter out the options when searching if filterBySearch is false', () => {
    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
        filterBySearch={false}
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const searchInput = wrapper.getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: '2' } });

    expect(wrapper.getByText('checkbox label 1')).toBeInTheDocument();
    expect(wrapper.getByText('checkbox label 2')).toBeInTheDocument();
    expect(wrapper.getByText('checkbox label 3')).toBeInTheDocument();
  });

  it('calls onSearch with search value', () => {
    vi.useFakeTimers();
    const onSearch = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        onSearch={onSearch}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const searchInput = wrapper.getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: '2' } });

    vi.runAllTimers();

    expect(onSearch).toHaveBeenCalledWith('2');
  });

  it("doesn't call onSearch callback more frequently than debounce timeout", async () => {
    vi.useFakeTimers();
    const onSearch = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        onSearch={onSearch}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        showSearch
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const searchInput = wrapper.getByPlaceholderText('Search...');

    for (let i = 0; i < 1000; i++) {
      fireEvent.change(searchInput, { target: { value: i } });
    }

    vi.runAllTimers();

    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('displays default values for multiple mode', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
        defaultValue={['value-2', 'value-1']}
      />
    );

    expect(wrapper.getByText('Selected (2)')).toBeInTheDocument();

    fireEvent.click(wrapper.getByTestId('select'));

    const checkedOption = wrapper.getAllByRole('option');

    expect(checkedOption[0].getAttribute('aria-selected')).toBe('true');
    expect(checkedOption[1].getAttribute('aria-selected')).toBe('true');
    expect(checkedOption[2].getAttribute('aria-selected')).toBe('false');
  });

  it('displays default values for single mode', () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="single"
        whenSelectedLabel="Selected"
        defaultValue="value-2"
      />
    );

    expect(wrapper.getByText('checkbox label 2')).toBeInTheDocument();
  });

  (['single', 'multiple'] as ('single' | 'multiple')[]).forEach(
    (mode: 'single' | 'multiple') => {
      it(`displays counts for options in ${mode} mode`, () => {
        const optionsWithCounts: OptionsProps[] = [
          {
            id: '1',
            name: 'checkbox label 1',
            label: 'checkbox label 1',
            value: 'value-1',
            count: 123,
          },
          {
            id: '2',
            name: 'checkbox label 2',
            label: 'checkbox label 2',
            value: 'value-2',
            count: 456,
          },
        ];

        const wrapper = render(
          <Dropdown
            placeholder="this is placeholder"
            onUpdate={vi.fn()}
            options={optionsWithCounts}
            mode={mode}
            whenSelectedLabel="Selected"
            defaultValue="value-2"
          />
        );

        fireEvent.click(wrapper.getByTestId('select'));

        const renderedOptions = wrapper.getAllByRole('option');

        expect(renderedOptions[0]).toHaveTextContent('123');
        expect(renderedOptions[1]).toHaveTextContent('456');
      });

      it(`adds aria-label with count information for options in ${mode} mod`, () => {
        const optionsWithCounts: OptionsProps[] = [
          {
            id: '1',
            name: 'checkbox label 1',
            label: 'checkbox label 1',
            value: 'value-1',
            count: 123,
          },
          {
            id: '2',
            name: 'checkbox label 2',
            label: 'checkbox label 2',
            value: 'value-2',
            count: 456,
          },
        ];

        const wrapper = render(
          <Dropdown
            placeholder="this is placeholder"
            onUpdate={vi.fn()}
            options={optionsWithCounts}
            mode={mode}
            whenSelectedLabel="Selected"
            defaultValue="value-2"
          />
        );

        fireEvent.click(wrapper.getByTestId('select'));

        const renderedOptions = wrapper.getAllByRole('option');

        expect(renderedOptions[0].getAttribute('aria-label')).toEqual(
          'checkbox label 1, 123 results'
        );
        expect(renderedOptions[1].getAttribute('aria-label')).toEqual(
          'checkbox label 2, 456 results'
        );
      });

      it(`doesn't add aria-label if count is not provided in ${mode} mode`, () => {
        const optionsWithCounts: OptionsProps[] = [
          {
            id: '1',
            name: 'checkbox label 1',
            label: 'checkbox label 1',
            value: 'value-1',
          },
          {
            id: '2',
            name: 'checkbox label 2',
            label: 'checkbox label 2',
            value: 'value-2',
            count: 456,
          },
        ];

        const wrapper = render(
          <Dropdown
            placeholder="this is placeholder"
            onUpdate={vi.fn()}
            options={optionsWithCounts}
            mode={mode}
            whenSelectedLabel="Selected"
            defaultValue="value-2"
          />
        );

        fireEvent.click(wrapper.getByTestId('select'));

        const renderedOptions = wrapper.getAllByRole('option');

        expect(renderedOptions[1].getAttribute('aria-label')).toEqual(
          'checkbox label 2, 456 results'
        );
      });

      it(`doesn't displays count and aria-label for 0 result in ${mode} mode`, () => {
        const optionsWithCounts: OptionsProps[] = [
          {
            id: '1',
            name: 'checkbox label 1',
            label: 'checkbox label 1',
            value: 'value-1',
            count: 0,
          },
        ];

        const wrapper = render(
          <Dropdown
            placeholder="this is placeholder"
            onUpdate={vi.fn()}
            options={optionsWithCounts}
            mode={mode}
            whenSelectedLabel="Selected"
            defaultValue="value-2"
          />
        );

        fireEvent.click(wrapper.getByTestId('select'));

        const renderedOptions = wrapper.queryByText('option');

        expect(renderedOptions).toBeNull();
      });
    }
  );

  it(`selectedOptions are updated on rerender`, async () => {
    const optionsWithCounts: OptionsProps[] = [
      {
        id: '1',
        name: 'checkbox label 1',
        label: 'checkbox label 1',
        value: 'value-1',
        'data-qa': 'value-1',
        count: 1,
      },
      {
        id: '2',
        name: 'checkbox label 2',
        label: 'checkbox label 2',
        value: 'value-2',
        'data-qa': 'value-2',
        count: 2,
      },
      {
        id: '3',
        name: 'checkbox label 3',
        label: 'checkbox label 3',
        value: 'value-3',
        'data-qa': 'value-3',
        count: 3,
      },
    ];

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        options={optionsWithCounts}
        mode="multiple"
        whenSelectedLabel="Selected"
        selectedOptions={['value-2']}
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    expect(wrapper.getByTestId('value-2')).toHaveAttribute(
      'aria-selected',
      'true'
    );

    wrapper.rerender(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        options={optionsWithCounts}
        mode="multiple"
        whenSelectedLabel="Selected"
        selectedOptions={['value-2', 'value-3']}
      />
    );

    expect(wrapper.getByTestId('value-1')).toHaveAttribute(
      'aria-selected',
      'false'
    );
    expect(wrapper.getByTestId('value-2')).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(wrapper.getByTestId('value-3')).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it(`clear all options when selectedOptions is empty`, async () => {
    const optionsWithCounts: OptionsProps[] = [
      {
        id: '1',
        name: 'checkbox label 1',
        label: 'checkbox label 1',
        value: 'value-1',
        'data-qa': 'value-1',
        count: 1,
      },
      {
        id: '2',
        name: 'checkbox label 2',
        label: 'checkbox label 2',
        value: 'value-2',
        'data-qa': 'value-2',
        count: 2,
      },
      {
        id: '3',
        name: 'checkbox label 3',
        label: 'checkbox label 3',
        value: 'value-3',
        'data-qa': 'value-3',
        count: 3,
      },
    ];

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        options={optionsWithCounts}
        mode="multiple"
        whenSelectedLabel="Selected"
        selectedOptions={['value-2', 'value-3']}
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    expect(wrapper.getByTestId('value-2')).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(wrapper.getByTestId('value-3')).toHaveAttribute(
      'aria-selected',
      'true'
    );

    wrapper.rerender(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        options={optionsWithCounts}
        mode="multiple"
        whenSelectedLabel="Selected"
        selectedOptions={[]}
      />
    );

    expect(wrapper.getByTestId('value-1')).toHaveAttribute(
      'aria-selected',
      'false'
    );
    expect(wrapper.getByTestId('value-2')).toHaveAttribute(
      'aria-selected',
      'false'
    );
    expect(wrapper.getByTestId('value-3')).toHaveAttribute(
      'aria-selected',
      'false'
    );
  });

  it(`displays error message`, async () => {
    const optionsWithCounts: OptionsProps[] = [
      {
        id: '1',
        name: 'checkbox label 1',
        label: 'checkbox label 1',
        value: 'value-1',
        'data-qa': 'value-1',
        count: 1,
      },
      {
        id: '2',
        name: 'checkbox label 2',
        label: 'checkbox label 2',
        value: 'value-2',
        'data-qa': 'value-2',
        count: 2,
      },
      {
        id: '3',
        name: 'checkbox label 3',
        label: 'checkbox label 3',
        value: 'value-3',
        'data-qa': 'value-3',
        count: 3,
      },
    ];

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={vi.fn()}
        options={optionsWithCounts}
        mode="multiple"
        whenSelectedLabel="Selected"
        selectedOptions={['value-2', 'value-3']}
        isError
        errorMessage="Oops ! There is an error"
      />
    );

    expect(wrapper.getByText('Oops ! There is an error')).toBeVisible();
  });

  it('allows to select dropdown options using Enter and Space', async () => {
    const onUpdate = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onUpdate={onUpdate}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    const dropdownWrapper = wrapper.getByTestId('dropdown');

    expect(dropdownWrapper).toHaveFocus();

    fireEvent.keyDown(dropdownWrapper, {
      key: 'ArrowDown',
    });

    expect(wrapper.getByText('checkbox label 1').previousSibling).toHaveFocus();

    fireEvent.keyDown(wrapper.getByText('checkbox label 1'), {
      key: 'Enter',
    });

    expect(onUpdate).toHaveBeenCalledWith(['value-1']);
  });

  it('calls onFocused on selecting the dropdown', async () => {
    const onFocus = vi.fn();

    const wrapper = render(
      <Dropdown
        placeholder="this is placeholder"
        onFocused={onFocus}
        onUpdate={vi.fn()}
        options={options}
        mode="multiple"
        whenSelectedLabel="Selected"
      />
    );

    fireEvent.click(wrapper.getByTestId('select'));

    expect(onFocus).toHaveBeenCalled();
  });
});
