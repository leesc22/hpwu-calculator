// Stats - Stamina, Power, Protego Power, Precision, Critical Power, Proficiency Power, Deficiency Defence, Defence, Defence Breach, Accuracy

// Foes - Werewolf, Pixie, Erkling, Acromantula, Dark Wizard, Death Eater

var foes = [
  {name:"Werewolf", difficulty:"Common", stamina:70, power:7, proficiencyPower:0.05, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Werewolf", difficulty:"Elite Common", stamina:131, power:13, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Pixie", difficulty:"Common", stamina:41, power:7, proficiencyPower:0.05, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0.01},
  {name:"Pixie", difficulty:"Elite Common", stamina:77, power:13, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0.02},
  {name:"Erkling", difficulty:"Common", stamina:76, power:7, proficiencyPower:0.05, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0.01},
  {name:"Erkling", difficulty:"Elite Common", stamina:141, power:13, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0.02},
  {name:"Acromantula", difficulty:"Common", stamina:72, power:8, proficiencyPower:0.05, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Acromantula", difficulty:"Elite Common", stamina:135, power:16, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Dark Wizard", difficulty:"Common", stamina:62, power:7, proficiencyPower:0.05, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Dark Wizard", difficulty:"Elite Common", stamina:115, power:14, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Death Eater", difficulty:"Common", stamina:83, power:6, proficiencyPower:0.05, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Death Eater", difficulty:"Elite Common", stamina:154, power:12, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0}]

var currentFoe = foes.find(function(e) {
  return e.name == "Werewolf" && e.difficulty.includes("Elite");
});

document.getElementById("currentFoe").innerHTML = currentFoe.difficulty.concat(" ", currentFoe.name);