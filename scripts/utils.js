const PUNCTUATION = '[.?!,\'";\\:\\-\\(\\)/\\+\\-\\*\u00AB\u00BB\u00BF\u201C-\u201E\u060C\u061F\u05BE\u05C0\u05C3\u05C6\u2000-\u206F\u22EF\u3000-\u3002\u3008-\u3011\uFF01\uFF08\uFF09\uFF0C\uFF1A\uFF1B\uFF1F\uFF3B\uFF3D\uFE41\uFE42\uFE4F\uFF5E]';

/**
   * Strip punctuation from a sentence.
   * @param {object[]|string} words - Words of a sentence.
   * @return {object[]|string} Words without punctuation.
   */
var stripPunctuation = (words) => {
    let wasString = false;
    if (typeof words === 'string') {
      wasString = true;
      words = [words];
    }

    /*
     * Will remove all punctuation symbols that are not directly enclosed in characters
     * In a sentence like "John's car broke.", the . would be removed, but not the '
     */
    const punctuationStart = new RegExp(`^${PUNCTUATION}`);
    const punctuationEnd = new RegExp(`${PUNCTUATION}$`);
    const punctuationBefore = new RegExp(` ${PUNCTUATION}`, 'g');
    // Special case: "The users' browser", keep the ' here
    const punctuationAfter = new RegExp(`${PUNCTUATION.replace("'", '')} `, 'g');

    words = words.map(word => {
      return word
        .replace(punctuationStart, '')
        .replace(punctuationEnd, '')
        .replace(punctuationBefore, ' ')
        .replace(punctuationAfter, ' ');
    });

    return (wasString) ? words.toString().replace(/[ ]{2}/g, ' ') : words;
}

var decode = (str) => {
    return str.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#0*39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&');
}