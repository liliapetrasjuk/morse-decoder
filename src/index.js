const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const letter = "**********";
  const wordCode = expr.split(letter);
  const wordDecode = wordCode.map((item) => {
    let decoded = [];
    for (let i = 0; i < item.length; i += 10) {
      const decode = item
        .slice(i, i + 10)
        .replace(/10/g, '.')
        .replace(/11/g, '-')
        .replace(/00/g, '');
        decoded.push(MORSE_TABLE[decode]);
    }
    return decoded.join('');
  });
  return wordDecode.join(' ');
}



module.exports = {
    decode
}