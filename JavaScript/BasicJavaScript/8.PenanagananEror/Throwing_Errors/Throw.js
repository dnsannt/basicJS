let json = '{ "age": 20 }';

try {
  let user = JSON.parse(json);

  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
