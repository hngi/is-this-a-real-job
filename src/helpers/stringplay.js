// regular expression to capture strings in quotations "this is a string"
const matchQuotes = /"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'/g;

// regular expression to capture single words e.g single
const matchWords = /\b(\w+)\b/g;

// for testing the matchQuotes RegExp
const mqReg = RegExp(matchQuotes);

/**
 * Used to generate the search query
 * @param {*} string
 * @returns the search query in this form "this is a string",single,word
 */
export const getQueryString = (string) => {
  if (mqReg.test(string)) {
    // This returns an array containing text inside strings e.g "this is a string"
    const quotes = String(string).match(matchQuotes);

    string = String(string).replace(matchQuotes, '');

    // This then joins the single words with the strings in quotation e.g "this is a string",single,word
    return quotes.concat(String(string).match(matchWords)).join(',');
  }
  // if there is no string in quotation just join the single words e.g single,word
  return String(string).match(matchWords).join(',');
};
