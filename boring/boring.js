/**
 * boring.js
 * A rather boring clock. Text is styled by the parent div.
 * Author: Jason
 */

import { Clock } from '../clock.js';

export class BoringClock extends Clock {

  // Static
  static metadata = {
    name: 'boring',
    description: 'A rather boring clock. Text is styled by the parent div.',
    author: 'Jason',
    tags: ['digital', '12/2024']
  }

  constructor(div, autostart) {
    const tickDuration = 100;             // Clock updates every 100 milliseconds
    super(div, autostart, tickDuration);  // Sets up parent Clock (boilerplate)
  }

  generateHTML() {
    /* 09:01:02 */                        // Example output
    const nowString = `${this.now.getHours().toString().padStart(2, '0')}:${this.now.getMinutes().toString().padStart(2, '0')}:${this.now.getSeconds().toString().padStart(2, '0')}`;
    return nowString;                     // Returns HTML
  }

}