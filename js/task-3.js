class StringBuilder {
    #value;
  
    constructor(initialValue) {
      this.#value = initialValue;
    }
  
    getValue() {
      return this.#value;
    }
  
    padEnd(str) {
      this.#value += str;
    }
  
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
  
  const builder = new StringBuilder(".");
  const task3ResultsDiv = document.getElementById('task-3-results');
  task3ResultsDiv.innerHTML += `<p>Initial value: ${builder.getValue()}</p>`;
  
  builder.padStart("^");
  task3ResultsDiv.innerHTML += `<p>After padStart: ${builder.getValue()}</p>`;
  
  builder.padEnd("^");
  task3ResultsDiv.innerHTML += `<p>After padEnd: ${builder.getValue()}</p>`;
  
  builder.padBoth("=");
  task3ResultsDiv.innerHTML += `<p>After padBoth: ${builder.getValue()}</p>`;
  