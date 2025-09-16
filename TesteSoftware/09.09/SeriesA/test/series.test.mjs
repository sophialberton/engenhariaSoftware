// SeriesA/test/series.test.mjs

import test from 'node:test';
import assert from 'assert';
import {
  addSeries,
  getAllSeries,
  filterByYear,
  filterByMinEpisodes,
  filterByEpisodeDurationRange,
  filterByTimesWatched,
  clearSeries
} from '../src/series.mjs';

const sampleSeries = [
  { name: 'Serie A', releaseYear: 2020, episodes: 10, episodeDuration: 25, timesWatched: 5 },
  { name: 'Serie B', releaseYear: 2021, episodes: 8, episodeDuration: 45, timesWatched: 2 },
  { name: 'Serie C', releaseYear: 2020, episodes: 12, episodeDuration: 50, timesWatched: 10 },
  { name: 'Serie D', releaseYear: 2022, episodes: 5, episodeDuration: 20, timesWatched: 1 }
];

test.beforeEach(() => {
  clearSeries();
  sampleSeries.forEach(series => addSeries(series));
});

test('addSeries deve adicionar uma série', () => {
  clearSeries();
  const newSeries = { name: 'Nova Serie', releaseYear: 2023, episodes: 6, episodeDuration: 30, timesWatched: 0 };
  addSeries(newSeries);
  const allSeries = getAllSeries();
  assert.strictEqual(allSeries.length, 1);
  assert.deepStrictEqual(allSeries[0], newSeries);
});

test('getAllSeries deve retornar todas as séries cadastradas', () => {
  const allSeries = getAllSeries();
  assert.strictEqual(allSeries.length, 4);
  assert.deepStrictEqual(allSeries, sampleSeries);
});

test('filterByYear deve retornar séries do ano especificado', () => {
  const filtered = filterByYear(2020);
  assert.strictEqual(filtered.length, 2);
  assert.deepStrictEqual(filtered.map(s => s.name), ['Serie A', 'Serie C']);
});

test('filterByMinEpisodes deve retornar séries com episódios mínimos', () => {
  const filtered = filterByMinEpisodes(10);
  assert.strictEqual(filtered.length, 2);
  assert.deepStrictEqual(filtered.map(s => s.name), ['Serie A', 'Serie C']);
});

test('filterByEpisodeDurationRange deve filtrar por duração dos episódios', () => {
  const filtered = filterByEpisodeDurationRange(40, 50);
  assert.strictEqual(filtered.length, 2);
  assert.deepStrictEqual(filtered.map(s => s.name), ['Serie B', 'Serie C']);
});

test('filterByTimesWatched deve retornar séries com mínimo de vezes assistidas', () => {
  const filtered = filterByTimesWatched(5);
  assert.strictEqual(filtered.length, 2);
  assert.deepStrictEqual(filtered.map(s => s.name), ['Serie A', 'Serie C']);
});