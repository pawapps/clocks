/**
 * clock.js
 * Boilerplate Clock class that can be used to build child Clock classes.
 * Author: Jason
 */

export class Clock {

  // Static

  // Public variables (accessible by children)
  isRunning;        // Boolean that tells whether or not the clock is incrementing
  now;              // Most recent time capture
  prev;             // Previous to the most recent time capture
  tickDuration;     // # of milliseconds between ticks

  // Private variables (not accessible by children)
  #html  = '';
  #div;
  #timer;

  // Class constructor
  constructor(div, autostart, tickDuration) {
    this.#div = div; // Where the HTML will go
    this.tickDuration = tickDuration;   // # of milliseconds between ticks
    if (autostart = true) { // Should the clock auto start
      this.isRunning = true;
      this.start();
    } else {
      this.isRunning = false;
    }
  }

  // Public methods

  generateHTML() {
    throw new Error("generateHTML() must be implemented by subclasses.");
  }

  start() {
    this.isRunning = true;
    this.#timer = setTimeout(() => {
      if (this.isRunning) {
        this.start();
      }
    }, this.tickDuration);
    this.#tick();
  }

  stop() {
    this.isRunning = false;
    clearTimeout(this.#timer);
    this.#timer = undefined;
  }

  // Private methods

  #updateHTML() {
    document.getElementById(this.#div).innerHTML = this.#html;
  }

  #tick() {
    this.prev = this.now;
    this.now = new Date();
    this.#html = this.generateHTML();
    this.#updateHTML();
  }



}