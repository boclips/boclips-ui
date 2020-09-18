import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import completionsCreatedBy from './json/completionsCreatedBy.json';

import SearchBar from './index';

describe('LTI view', () => {
  it('render search header', async () => {
    const onSearch = jest.fn();

    render(<SearchBar onSearch={onSearch} placeholder="test" />);
    const searchInput = await screen.findByTestId('search-input');

    expect(searchInput).toBeInTheDocument();
  });

  it('renders search auto completions', async () => {
    const onSearch = jest.fn();
    // select first channel name from json
    const [createdBy] = completionsCreatedBy;

    render(<SearchBar onSearch={onSearch} placeholder="test" />);

    const searchInput = await screen.findByTestId('search-input');

    fireEvent.click(searchInput);
    // type first word from channel name in search input
    const createdByFirstWord = createdBy.split(' ')[0];

    fireEvent.change(searchInput, {
      target: { value: createdByFirstWord },
    });

    const createdByTestId = `result-${createdBy
      .replace(' ', '-')
      .toLowerCase()}`;

    expect(await screen.findByTestId(createdByTestId)).toBeInTheDocument();
  });

  it('passes the selected suggested result to search by clicking on it', async () => {
    const onSearch = jest.fn();
    const [firstCreatedBy] = completionsCreatedBy;

    render(<SearchBar onSearch={onSearch} placeholder="test" />);

    const searchInput = await screen.findByTestId('search-input');

    fireEvent.click(searchInput);
    // type first word from channel name in search input
    const createdByFirstWord = firstCreatedBy.split(' ')[0];

    fireEvent.change(searchInput, {
      target: { value: createdByFirstWord },
    });

    const firstCreatedByTestId = `result-${firstCreatedBy
      .replace(' ', '-')
      .toLowerCase()}`;

    fireEvent.click(await screen.findByTestId(firstCreatedByTestId));

    expect(onSearch.mock.calls[0][0]).toBe(firstCreatedBy);
  });

  it('passes the selected suggestion result to search by pressing enter', async () => {
    const onSearch = jest.fn();
    const [, secondCreatedBy] = completionsCreatedBy;

    render(<SearchBar onSearch={onSearch} placeholder="test" />);

    const searchInput = await screen.findByTestId('search-input');

    fireEvent.click(searchInput);
    // type first word from channel name in search input
    const secondCreatedByWord = secondCreatedBy.split(' ')[0];

    fireEvent.change(searchInput, {
      target: { value: secondCreatedByWord },
    });

    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    expect(onSearch.mock.calls[0][0]).toBe(secondCreatedByWord);
  });

  it('passes the selected suggestion result to search by clicking search button', async () => {
    const onSearch = jest.fn();
    const [, secondCreatedBy] = completionsCreatedBy;

    render(<SearchBar onSearch={onSearch} placeholder="test" />);

    const searchInput = await screen.findByTestId('search-input');

    fireEvent.click(searchInput);
    // type first word from channel name in search input
    const secondCreatedByWord = secondCreatedBy.split(' ')[0];

    fireEvent.change(searchInput, {
      target: { value: secondCreatedByWord },
    });

    const searchButton = screen.getByTestId('search-button');

    fireEvent.click(searchButton);

    expect(onSearch.mock.calls[0][0]).toBe(secondCreatedByWord);
  });
});
