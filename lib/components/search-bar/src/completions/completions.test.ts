import { completionsFor } from './completions';

import objectContaining = jasmine.objectContaining;

const getCompletions = (allCompletions: string[]) => (text: string) =>
  completionsFor({ test: allCompletions })(text).map(
    (completion) => completion.text,
  );

test('returns an empty list given an empty input', () => {
  expect(getCompletions(['one'])('')).toEqual([]);
});

test('returns empty list when less than 3 chars typed', () => {
  expect(getCompletions(['one'])('on')).toEqual([]);
});

test('returns matching completions when 3 chars typed', () => {
  expect(getCompletions(['three'])('thr')).toEqual(['three']);
});

test('returns matching completions when 3 chars typed matching different case', () => {
  expect(getCompletions(['tHree'])('thr')).toEqual(['tHree']);
  expect(getCompletions(['three'])('THR')).toEqual(['three']);
});

test('returns empty list when non-matching chars typed', () => {
  expect(getCompletions(['one', 'two', 'three'])('four')).toEqual([]);
});

test('does not return completions that match in the middle of a word', () => {
  expect(getCompletions(['abcd'])('bcd')).toEqual([]);
});

test('matches in the middle of a sentence', () => {
  expect(getCompletions(['the lazy dog', 'jumps'])('lazy')).toEqual([
    'the lazy dog',
  ]);
});

test('distinguishes between matches from different lists', () => {
  expect(
    completionsFor({ listA: ['three'], listB: ['two three'] })('thr'),
  ).toEqual([
    objectContaining({
      text: 'three',
      list: 'listA',
    }),
    objectContaining({
      text: 'two three',
      list: 'listB',
    }),
  ]);
});

test('matches with whitespace present', () => {
  expect(getCompletions(['andrew', 'jacek'])('   and')).toEqual(['andrew']);
  expect(getCompletions([' andrew ', 'jacek'])('and')).toEqual(['andrew']);
});

test('prioritises matches in the beginning', () => {
  expect(getCompletions(['aaa bbb', 'bbb ccc'])('bbb')).toEqual([
    'bbb ccc',
    'aaa bbb',
  ]);
});

test('prioritises shorter matches over longer ones', () => {
  expect(getCompletions(['aaaa', 'aaa'])('aaa')).toEqual(['aaa', 'aaaa']);
});

test('highlight matching chunks in the beginning', () => {
  const highlights = completionsFor({ listA: ['bbb ccc'] })('bbb').map(
    (completion) => completion.textWithHighlights,
  );

  expect(highlights).toEqual([
    [
      { text: 'bbb', matches: true },
      { text: ' ccc', matches: false },
    ],
  ]);
});

test('highlight matching chunks in the middle', () => {
  const highlights = completionsFor({ listA: ['aaa bbb ccc'] })('bbb').map(
    (completion) => completion.textWithHighlights,
  );

  expect(highlights).toEqual([
    [
      { text: 'aaa ', matches: false },
      { text: 'bbb', matches: true },
      { text: ' ccc', matches: false },
    ],
  ]);
});

test('highlight matching chunks in the end', () => {
  const highlights = completionsFor({ listA: ['aaa bbb'] })('bbb').map(
    (completion) => completion.textWithHighlights,
  );

  expect(highlights).toEqual([
    [
      { text: 'aaa ', matches: false },
      { text: 'bbb', matches: true },
    ],
  ]);
});
