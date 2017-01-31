const freezeDeep = (obj) => {
  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    var prop = obj[name];

    // Freeze prop if it is an object
    if (typeof prop == 'object' && prop !== null) {
      freezeDeep(prop);
    }
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
};

export const deepFreeze = (obj) => {
  return freezeDeep(obj);
};
