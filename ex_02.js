let obj = {
  age: 57,
  code: "007",
  firstName: "James",
  lastName: "BOND",
};

var phrase = `My name is ${obj.lastName}, ${obj.firstName} ${obj.lastName}! I'm the agent ${obj.code} and I'm ${obj.age} years old.`;

document.addEventListener("DOMContentLoaded", () => {
  const paragraph = document.querySelector("#container p");
  paragraph.textContent = phrase;
});

function addCar(agentString, car) {
  let agentObject = JSON.parse(agentString);
  agentObject.car = car;
  return agentObject;
}

let agentJSON =
  '{"age": 57, "code": "007", "firstName": "James", "lastName": "Bond"}';
let carBrand = "Aston Martin";

let updatedAgent = addCar(agentJSON, carBrand);
console.log(updatedAgent);
