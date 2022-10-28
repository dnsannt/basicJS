const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
  };
  
  const person = {
    name: 'Bobo'
  };
  const dennis = {
    name: 'Dennis'
  };
  
  const newPerson = createPersonWithAge(18, person);
  const newPerson2 = createPersonWithAge(28, dennis);
  console.log({
    person,
    newPerson,
    newPerson2
  });
  
  /**
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
      }
  */