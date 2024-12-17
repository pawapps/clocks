/**
 * ascii-digital.js
 * A simple digital clock done with ASCII art.
 * Author: Jason
 */

import { Clock } from '../clock.js';

export class AsciiDigitalClock extends Clock {

  // Static
  static metadata = {
    name: 'ASCII Digital',
    description: 'A simple digital clock done with ASCII art',
    author: 'Jason',
    tags: ['digital', 'ascii-art', '12/2024']
  }

  constructor(div, autostart) {
    const tickDuration = 100;             // Clock updates every 100 milliseconds
    super(div, autostart, tickDuration);  // Sets up parent Clock (boilerplate)
  }

  generateHTML() {
    // https://theasciicode.com.ar/ascii-printable-characters/vertical-bar-vbar-vertical-line-vertical-slash-ascii-code-124.html
    /**
|‾|
|─|
|_|

┌┐
└┘

├┤
     */
    const asciiNumbers = {
        '1': `&nbsp;&nbsp;|
&nbsp;&nbsp;|
&nbsp;&nbsp;|`,
        '2': `&nbsp;‾|
┌─┘
|_&nbsp;`,
        '3': `&nbsp;‾|
&nbsp;─|
&nbsp;_|`,
        '4': `|&nbsp;|
└─|
&nbsp;&nbsp;|`,
        '5': `|‾&nbsp;
└─┐
&nbsp;_|`,
        '6': `|‾&nbsp;
├─┐
|_|`,
        '7': `&nbsp;‾|
&nbsp;&nbsp;|
&nbsp;&nbsp;|`,
        '8': `|‾|
|─|
|_|`,
        '9': `|‾|
└─|
&nbsp;&nbsp;|`,
        '0': `|‾|
| |
|_|`,
        ':': `.
.
 `
    }
    const hours = this.now.getHours().toString();
    const minutes = this.now.getMinutes().toString();
    const seconds = this.now.getSeconds().toString();

    let digits = ['', '', '', '', '', '', '', ''];

    // Build array of ascii characters
    if (hours.length == 1) {
        digits[0] = asciiNumbers[0];
        digits[1] = asciiNumbers[hours];
    } else {
        digits[0] = asciiNumbers[hours[0]];
        digits[1] = asciiNumbers[hours[1]];
    }
    digits[2] = asciiNumbers[':'];

    if (minutes.length == 1) {
        digits[3] = asciiNumbers[0];
        digits[4] = asciiNumbers[minutes];
    } else {
        digits[3] = asciiNumbers[minutes[0]];
        digits[4] = asciiNumbers[minutes[1]];
    }
    digits[5] = asciiNumbers[':'];

    if (seconds.length == 1) {
        digits[6] = asciiNumbers[0];
        digits[7] = asciiNumbers[seconds];
    } else {
        digits[6] = asciiNumbers[seconds[0]];
        digits[7] = asciiNumbers[seconds[1]];
    }

    // Translate ascii art array into three rows of strings
    let displayStrings = ['', '', ''];
    for (let digit of digits) {
        displayStrings[0] += digit.split('\n')[0];
        displayStrings[1] += digit.split('\n')[1];
        displayStrings[2] += digit.split('\n')[2];
    }

    const nowString = displayStrings.join('<br />');    // join three lines together with new line tag

    // MUST be monospace text to align
    return `<div style="font-family:monospace;">${nowString}</div>`;
  }

}