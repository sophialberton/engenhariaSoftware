// SeriesA/src/series.mjs

// Lista interna que armazena as séries
const seriesList = [];

/**
 * Adiciona uma nova série ao sistema.
 * @param {Object} series - Objeto com os dados da série.
 * Deve conter: name, releaseYear, episodes, episodeDuration, timesWatched
 */
export function addSeries(series) {
  seriesList.push(series);
}

/**
 * Retorna todas as séries cadastradas.
 * @returns {Array} lista de séries
 */
export function getAllSeries() {
  return seriesList;
}

/**
 * Filtra séries pelo ano de lançamento.
 * @param {number} year - Ano desejado
 * @returns {Array} séries lançadas naquele ano
 */
export function filterByYear(year) {
  return seriesList.filter(series => series.releaseYear === year);
}

/**
 * Filtra séries que têm pelo menos minEpisodes episódios.
 * @param {number} minEpisodes - número mínimo de episódios
 * @returns {Array} séries filtradas
 */
export function filterByMinEpisodes(minEpisodes) {
  return seriesList.filter(series => series.episodes >= minEpisodes);
}

/**
 * Filtra séries cuja duração do episódio está dentro do intervalo [minMinutes, maxMinutes].
 * @param {number} minMinutes - duração mínima
 * @param {number} maxMinutes - duração máxima
 * @returns {Array} séries filtradas
 */
export function filterByEpisodeDurationRange(minMinutes, maxMinutes) {
  return seriesList.filter(series => series.episodeDuration >= minMinutes && series.episodeDuration <= maxMinutes);
}

/**
 * Filtra séries que foram assistidas pelo menos minTimes vezes.
 * @param {number} minTimes - número mínimo de vezes assistidas
 * @returns {Array} séries filtradas
 */
export function filterByTimesWatched(minTimes) {
  return seriesList.filter(series => series.timesWatched >= minTimes);
}

/**
 * Função auxiliar para limpar a lista (útil para testes).
 */
export function clearSeries() {
  seriesList.length = 0;
}