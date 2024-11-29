import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchBar } from './index';

describe('SearchBar', () => {
  it('displays search bar and a button', () => {
    const onSearch = vi.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const searchInput = screen.getByPlaceholderText('test');

    expect(searchInput).toBeInTheDocument();
  });

  it('search button fires search method when clicked', () => {
    const onSearch = vi.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onSearch).toBeCalled();
  });

  it('clear button clears the text in input', () => {
    const onSearch = vi.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const searchInput = screen.getByPlaceholderText('test');

    fireEvent.change(searchInput, {
      target: { value: 'this is search query' },
    });

    fireEvent.click(screen.getByLabelText('clear search text'));

    expect(searchInput.getAttribute('value')).toBe('');
  });

  it('when clear button is pressed, focus goes to search input', () => {
    const onSearch = vi.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const searchInput = screen.getByPlaceholderText('test');

    fireEvent.change(searchInput, {
      target: { value: 'this is search query' },
    });

    fireEvent.click(screen.getByLabelText('clear search text'));

    expect(searchInput.getAttribute('value')).toBe('');

    expect(searchInput).toHaveFocus();
  });

  it('when suggestion is clicked, search query is updated', () => {
    const onSearch = vi.fn();

    render(
      <SearchBar
        onSearch={onSearch}
        placeholder="test"
        initialQuery="waters"
        suggestions={['waterfall', 'watergate', 'watering can']}
      />
    );
    const searchInput = screen.getByPlaceholderText('test');

    fireEvent.click(screen.getByText('waterfall'));

    expect(searchInput.getAttribute('value')).toBe('waterfall');
    expect(onSearch).toBeCalledWith('waterfall', 0, true);
  });

  it('when suggestion is chosen with keyboard, search query is updated and suggestions are hidden', () => {
    const onSearch = vi.fn();

    render(
      <SearchBar
        onSearch={onSearch}
        placeholder="test"
        initialQuery="waters"
        suggestions={['waterfall', 'watergate', 'watering can']}
      />
    );
    const searchInput = screen.getByPlaceholderText('test');

    fireEvent.click(searchInput);
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    fireEvent.keyDown(searchInput, { key: 'ArrowUp' });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    expect(searchInput.getAttribute('value')).toBe('waterfall');
    expect(onSearch).toBeCalledWith('waterfall', 0, true);
    expect(screen.queryByText('watergate')).toBeNull();
  });

  it(`calls onchange when value is changed`, () => {
    const onSearch = vi.fn();
    const onChange = vi.fn();

    render(
      <SearchBar
        onSearch={onSearch}
        onChange={onChange}
        placeholder="test"
        initialQuery=""
        suggestions={['waterfall', 'watergate', 'watering can']}
      />
    );

    const searchInput = screen.getByPlaceholderText('test');
    fireEvent.change(searchInput, {
      target: { value: 'this is a search query' },
    });

    expect(onChange).toHaveBeenCalledWith('this is a search query');
    fireEvent.click(screen.getByText('waterfall'));
    expect(onChange).toHaveBeenCalledWith('waterfall');
  });

  it(`having special characters in search does not break the component`, async () => {
    render(
      <SearchBar
        onSearch={vi.fn()}
        onChange={vi.fn()}
        placeholder="test"
        initialQuery=""
        suggestions={['waterfall', 'watergate', 'c++']}
      />
    );

    const searchInput = screen.getByPlaceholderText('test');
    fireEvent.change(searchInput, {
      target: { value: 'c++' },
    });

    expect(await screen.findByText('c++')).toBeInTheDocument();
  });
});

describe('a11y', () => {
  it('displays skip to content button when focused', async () => {
    const wrapper = render(
      <SearchBar
        onSearch={vi.fn()}
        onChange={vi.fn()}
        placeholder="Search..."
        initialQuery=""
        showSkipButton
      />
    );

    expect(
      wrapper.getByRole('button', {
        name: 'Skip to content',
      })
    ).toBeInTheDocument();

    expect(
      wrapper.getByRole('button', {
        name: 'Skip to content',
      })
    ).toHaveClass('skip');

    await userEvent.tab();

    await userEvent.type(wrapper.getByPlaceholderText('Search...'), 'cats');

    await userEvent.tab();

    await waitFor(() => {
      expect(document.activeElement).toEqual(
        wrapper.getByRole('button', {
          name: 'Skip to content',
        })
      );
    });
  });

  it('change focus to main when button clicked', async () => {
    const wrapper = render(
      <>
        <SearchBar
          onSearch={vi.fn()}
          onChange={vi.fn()}
          placeholder="Search..."
          initialQuery=""
          showSkipButton
        />
        <main tabIndex={-1}> 123 </main>
      </>
    );

    await userEvent.tab();

    await userEvent.type(wrapper.getByPlaceholderText('Search...'), 'cats');

    await userEvent.tab();

    expect(document.activeElement).toBe(
      wrapper.getByRole('button', {
        name: 'Skip to content',
      })
    );

    fireEvent.click(document.activeElement!);

    await waitFor(() => expect(wrapper.getByRole('main')).toHaveFocus());
  });

  it("doesn't display skip to content button if not needed", async () => {
    const wrapper = render(
      <SearchBar
        onSearch={vi.fn()}
        onChange={vi.fn()}
        placeholder="Search..."
        initialQuery=""
      />
    );

    await userEvent.tab();

    await userEvent.type(wrapper.getByPlaceholderText('Search...'), 'cats');

    await userEvent.tab();

    expect(document.activeElement).not.toBe(
      wrapper.queryByRole('button', {
        name: 'Skip to content',
      })
    );
  });
});
