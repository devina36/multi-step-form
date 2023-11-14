const initialData = {
  name: null,
  email: null,
  phone: null,
  plan: 'Arcade',
  price: 9,
  bill: 'Monthly',
  addOns: [],
  total: 9,
};

const result = (bill, addOns, price) => {
  let total;
  let add = addOns;
  let totalAddOns = 0;

  if (add.length > 0) {
    if (bill === 'Monthly') {
      totalAddOns = add.reduce((total, addon) => total + addon.priceMonthly, 0);
    } else {
      totalAddOns = add.reduce((total, addon) => total + addon.priceYear, 0);
    }

    total = price + totalAddOns;

    return total;
  }

  return price;
};

function reducer(state, action) {
  switch (action.type) {
    case 'changed_name': {
      return {
        ...state,
        name: action.name,
      };
    }
    case 'changed_email': {
      return {
        ...state,
        email: action.email,
      };
    }
    case 'changed_phone': {
      return {
        ...state,
        phone: action.phone,
      };
    }
    case 'changed_plan': {
      const total = result(state.bill, state.addOns, action.price);
      return {
        ...state,
        plan: action.plan,
        price: action.price,
        total: total,
      };
    }
    case 'changed_bill': {
      const total = result(action.bill, state.addOns, action.price);
      return {
        ...state,
        bill: action.bill,
        price: action.price,
        total: total,
      };
    }
    case 'changed_addOns': {
      let addOns;
      if (action.check === true) {
        addOns = [...state.addOns, action.addOns];
        addOns = addOns.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      } else {
        addOns = state.addOns.filter((d) => d !== action.addOns);
      }
      const total = result(state.bill, addOns, state.price);
      return {
        ...state,
        addOns: addOns,
        total: total,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export { reducer, initialData };
