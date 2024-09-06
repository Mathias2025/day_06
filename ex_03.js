function addCarToAgent(agent, brand, model, color, power) {
  if (
    typeof agent !== "object" ||
    typeof brand !== "string" ||
    typeof model !== "string" ||
    typeof color !== "string" ||
    typeof power !== "string"
  ) {
    console.error("Erreur : Un des arguments est manquant ou mal typé.");
    return null;
  }

  // ajout de car à agent
  agent.car = {
    brand: brand,
    model: model,
    color: color,
    power: power,
  };

  shareThatBeauty(agent);

  return agent;
}

let agent = {
  firstName: "James",
  lastName: "Bond",
  age: 57,
  code: "007",
};

addCarToAgent(agent, "Aston Martin", "DB5", "Silver", "282 hp");
