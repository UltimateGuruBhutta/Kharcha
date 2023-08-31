// local storage

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// create budget

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID,
    name: name,
    createAt: Date.now().toString(),
    amount: +amount
  }
  const existingBudgets = fetchData("budgets") ?? [];
  const updatedBudgets = [...existingBudgets, newItem];
  localStorage.setItem("budgets", JSON.stringify(updatedBudgets));
  return updatedBudgets; // Return the updated array
};