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
  {name:"Death Eater", difficulty:"Elite Imposing", stamina:227, power:17, proficiencyPower:0.3, deficiencyDefence:0.2, defence:0, defenceBreach:0, dodge:0},
  {name:"Werewolf", difficulty:"Dangerous", stamina:133, power:13, proficiencyPower:0.2, deficiencyDefence:0.07, defence:0.4, defenceBreach:0.1, dodge:0},
  {name:"Werewolf", difficulty:"Elite Dangerous", stamina:247, power:25, proficiencyPower:0.4, deficiencyDefence:0.15, defence:0.4, defenceBreach:0.1, dodge:0},
  {name:"Pixie", difficulty:"Dangerous", stamina:67, power:14, proficiencyPower:0.2, deficiencyDefence:0.07, defence:0, defenceBreach:0, dodge:0.4},
  {name:"Pixie", difficulty:"Elite Dangerous", stamina:126, power:27, proficiencyPower:0.4, deficiencyDefence:0.15, defence:0, defenceBreach:0, dodge:0.4},
  {name:"Erkling", difficulty:"Dangerous", stamina:124, power:11, proficiencyPower:0.2, deficiencyDefence:0.07, defence:0, defenceBreach:0, dodge:0.4},
  {name:"Erkling", difficulty:"Elite Dangerous", stamina:231, power:21, proficiencyPower:0.4, deficiencyDefence:0.15, defence:0, defenceBreach:0, dodge:0.4},
  {name:"Acromantula", difficulty:"Dangerous", stamina:136, power:17, proficiencyPower:0.2, deficiencyDefence:0.07, defence:0, defenceBreach:0, dodge:0},
  {name:"Acromantula", difficulty:"Elite Dangerous", stamina:254, power:32, proficiencyPower:0.4, deficiencyDefence:0.15, defence:0, defenceBreach:0, dodge:0},
  {name:"Dark Wizard", difficulty:"Dangerous", stamina:101, power:12, proficiencyPower:0.2, deficiencyDefence:0.07, defence:0.3, defenceBreach:0.2, dodge:0},
  {name:"Dark Wizard", difficulty:"Elite Dangerous", stamina:189, power:24, proficiencyPower:0.4, deficiencyDefence:0.15, defence:0.3, defenceBreach:0.2, dodge:0},
  {name:"Death Eater", difficulty:"Dangerous", stamina:147, power:10, proficiencyPower:0.2, deficiencyDefence:0.07, defence:0, defenceBreach:0, dodge:0},
  {name:"Death Eater", difficulty:"Elite Dangerous", stamina:273, power:19, proficiencyPower:0.4, deficiencyDefence:0.15, defence:0, defenceBreach:0, dodge:0},
  {name:"Werewolf", difficulty:"Fierce", stamina:159, power:16, proficiencyPower:0.25, deficiencyDefence:0.12, defence:0.6, defenceBreach:0.3, dodge:0},
  {name:"Werewolf", difficulty:"Elite Fierce", stamina:296, power:30, proficiencyPower:0.5, deficiencyDefence:0.25, defence:0.6, defenceBreach:0.3, dodge:0},
  {name:"Pixie", difficulty:"Fierce", stamina:75, power:18, proficiencyPower:0.25, deficiencyDefence:0.12, defence:0, defenceBreach:0, dodge:0.6},
  {name:"Pixie", difficulty:"Elite Fierce", stamina:140, power:43, proficiencyPower:0.5, deficiencyDefence:0.25, defence:0, defenceBreach:0, dodge:0.6},
  {name:"Erkling", difficulty:"Fierce", stamina:139, power:13, proficiencyPower:0.25, deficiencyDefence:0.12, defence:0, defenceBreach:0, dodge:0.6},
  {name:"Erkling", difficulty:"Elite Fierce", stamina:258, power:24, proficiencyPower:0.5, deficiencyDefence:0.25, defence:0, defenceBreach:0, dodge:0.6},
  {name:"Acromantula", difficulty:"Fierce", stamina:166, power:22, proficiencyPower:0.25, deficiencyDefence:0.12, defence:0, defenceBreach:0, dodge:0},
  {name:"Acromantula", difficulty:"Elite Fierce", stamina:310, power:41, proficiencyPower:0.5, deficiencyDefence:0.25, defence:0, defenceBreach:0, dodge:0},
  {name:"Dark Wizard", difficulty:"Fierce", stamina:113, power:14, proficiencyPower:0.25, deficiencyDefence:0.12, defence:0.5, defenceBreach:0.4, dodge:0},
  {name:"Dark Wizard", difficulty:"Elite Fierce", stamina:211, power:26, proficiencyPower:0.5, deficiencyDefence:0.25, defence:0.5, defenceBreach:0.4, dodge:0},
  {name:"Death Eater", difficulty:"Fierce", stamina:177, power:11, proficiencyPower:0.25, deficiencyDefence:0.12, defence:0, defenceBreach:0, dodge:0},
  {name:"Death Eater", difficulty:"Elite Fierce", stamina:328, power:22, proficiencyPower:0.5, deficiencyDefence:0.25, defence:0, defenceBreach:0, dodge:0}]

displayFoe();

function displayFoe() {
  var foeOptions = document.getElementById("foes");
  var selectedFoe = foeOptions.options[foeOptions.selectedIndex].value;

  var difficultyOptions = document.getElementById("difficulties");
  var selectedDifficulty = difficultyOptions.options[difficultyOptions.selectedIndex].value;

  var selectedLevel = document.getElementById("level").value;

  var currentFoe = foes.find(function(e) {
    return e.name == selectedFoe && e.difficulty.includes(selectedDifficulty);
  });

  document.getElementById("currentFoe").innerHTML = ("Level ").concat(selectedLevel.toString(), " ", currentFoe.difficulty, " ", currentFoe.name);

  document.getElementById("foeStamina").innerHTML = Math.round(currentFoe.stamina * (1 + 0.0816 * selectedLevel));
  document.getElementById("foePower").innerHTML = Math.round(currentFoe.power * (1 + 0.0816 * selectedLevel));
  document.getElementById("foeProficiencyPower").innerHTML = Math.round(currentFoe.proficiencyPower * (1 + 0.009999999776 * selectedLevel) * 100) + "%";
  document.getElementById("foeDeficiencyDefence").innerHTML = Math.round(currentFoe.deficiencyDefence * (1 + 0.009999999776 * selectedLevel) * 100) + "%";
  document.getElementById("foeDefence").innerHTML = currentFoe.defence * 100 + "%";
  document.getElementById("foeDefenceBreach").innerHTML = currentFoe.defenceBreach * 100 + "%";
  document.getElementById("foeDodge").innerHTML = currentFoe.dodge * 100 + "%";
}