class Storage {
    #items;
  
    constructor(items) {
      this.#items = items;
    }
  
    getItems() {
      return this.#items;
    }
  
    addItem(newItem) {
      this.#items.push(newItem);
    }
  
    removeItem(itemToRemove) {
      this.#items = this.#items.filter(item => item !== itemToRemove);
    }
  }
  
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  const task2ResultsDiv = document.getElementById('task-2-results');
  task2ResultsDiv.innerHTML += `<p>Initial items: ${storage.getItems().join(', ')}</p>`;
  
  storage.addItem("Droid");
  task2ResultsDiv.innerHTML += `<p>After adding Droid: ${storage.getItems().join(', ')}</p>`;
  
  storage.removeItem("Prolonger");
  task2ResultsDiv.innerHTML += `<p>After removing Prolonger: ${storage.getItems().join(', ')}</p>`;
  