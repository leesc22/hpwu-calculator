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
  {name:"Death Eater", difficulty:"Elite Common", stamina:154, power:12, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Werewolf", difficulty:"Formidable", stamina:88, power:9, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Werewolf", difficulty:"Elite Formidable", stamina:163, power:17, proficiencyPower:0.2, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Pixie", difficulty:"Formidable", stamina:50, power:9, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0.05},
  {name:"Pixie", difficulty:"Elite Formidable", stamina:94, power:17, proficiencyPower:0.2, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0.05},
  {name:"Erkling", difficulty:"Formidable", stamina:93, power:8, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0.05},
  {name:"Erkling", difficulty:"Elite Formidable", stamina:173, power:16, proficiencyPower:0.2, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0.05},
  {name:"Acromantula", difficulty:"Formidable", stamina:91, power:10, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Acromantula", difficulty:"Elite Formidable", stamina:170, power:19, proficiencyPower:0.2, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Dark Wizard", difficulty:"Formidable", stamina:76, power:9, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Dark Wizard", difficulty:"Elite Formidable", stamina:141, power:18, proficiencyPower:0.2, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Death Eater", difficulty:"Formidable", stamina:101, power:7, proficiencyPower:0.1, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Death Eater", difficulty:"Elite Formidable", stamina:189, power:14, proficiencyPower:0.2, deficiencyDefence:0, defence:0, defenceBreach:0, dodge:0},
  {name:"Werewolf", difficulty:"Imposing", stamina:109, power:11, proficiencyPower:0.15, deficiencyDefence:0.05, defence:0.25, defenceBreach:0, dodge:0},
  {name:"Werewolf", difficulty:"Elite Imposing", stamina:203, power:21, proficiencyPower:0.3, deficiencyDefence:0.2, defence:0.25, defenceBreach:0, dodge:0},
  {name:"Pixie", difficulty:"Imposing", stamina:58, power:11, proficiencyPower:0.15, deficiencyDefence:0.05, defence:0, defenceBreach:0, dodge:0.25},
  {name:"Pixie", difficulty:"Elite Imposing", stamina:109, power:21, proficiencyPower:0.3, deficiencyDefence:0.2, defence:0, defenceBreach:0, dodge:0.25},
  {name:"Erkling", difficulty:"Imposing", stamina:107, power:10, proficiencyPower:0.15, deficiencyDefence:0.05, defence:0, defenceBreach:0, dodge:0.25},
  {name:"Erkling", difficulty:"Elite Imposing", stamina:200, power:18, proficiencyPower:0.3, deficiencyDefence:0.2, defence:0, defenceBreach:0, dodge:0.25},
  {name:"Acromantula", difficulty:"Imposing", stamina:109, power:13, proficiencyPower:0.15, deficiencyDefence:0.05, defence:0, defenceBreach:0, dodge:0},
  {name:"Acromantula", difficulty:"Elite Imposing", stamina:203, power:24, proficiencyPower:0.3, deficiencyDefence:0.2, defence:0, defenceBreach:0, dodge:0},
  {name:"Dark Wizard", difficulty:"Imposing", stamina:88, power:11, proficiencyPower:0.15, deficiencyDefence:0.05, defence:0.15, defenceBreach:0.1, dodge:0},
  {name:"Dark Wizard", difficulty:"Elite Imposing", stamina:163, power:20, proficiencyPower:0.3, deficiencyDefence:0.2, defence:0.15, defenceBreach:0.2, dodge:0},
  {name:"Death Eater", difficulty:"Imposing", stamina:122, power:9, proficiencyPower:0.15, deficiencyDefence:0.05, defence:0, defenceBreach:0, dodge:0},
  {name:"Death Eater", difficulty:"Elite Imposing", stamina:227, power:17, proficiencyPower:0.3, deficiencyDefence:0.2, defence:0, defenceBreach:0, dodge:0}]

var currentFoe = foes.find(function(e) {
  return e.name == "Werewolf" && e.difficulty.includes("Elite");
});

document.getElementById("currentFoe").innerHTML = currentFoe.difficulty.concat(" ", currentFoe.name);