const matchQuotes = /"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'/g;

const matchWords = /\b(\w+)\b/g;

const mqReg = RegExp(matchQuotes);

/**
 * Used to generate the search query
 * @param {*} string
 */
export const getQueryString = (string) => {
  if (mqReg.test(string)) {
    const quotes = String(string).match(matchQuotes);

    string = String(string).replace(matchQuotes, '');

    return quotes.concat(String(string).match(matchWords)).join(',');
  }
  return String(string).match(matchWords).join(',');
};
