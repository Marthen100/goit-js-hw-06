const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
  
    getBalance() {
      return this.balance;
    },
  
    getDiscount() {
      return this.discount;
    },
  
    setDiscount(value) {
      this.discount = value;
    },
  
    getOrders() {
      return this.orders;
    },
  
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
  };
  
  customer.setDiscount(0.15);
  const task1ResultsDiv = document.getElementById('task-1-results');
  task1ResultsDiv.innerHTML += `<p>Discount: ${customer.getDiscount()}</p>`;
  
  customer.addOrder(5000, "Steak");
  task1ResultsDiv.innerHTML += `<p>Balance: ${customer.getBalance()}</p>`;
  task1ResultsDiv.innerHTML += `<p>Orders: ${customer.getOrders().join(', ')}</p>`;
  