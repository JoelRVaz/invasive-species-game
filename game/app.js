


$(document).ready(function(){
  $("body").tooltip({ selector: '[data-toggle=tooltip]', placement: 'top'});

});


document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and

console.log(sessionStorage.getItem("year"));
var current_year =  parseInt(sessionStorage.getItem("year"));
if(!sessionStorage.hasOwnProperty("year")){
  console.log("hello");
  window.location.href = "/index.html";
}
var bake = current_year;
var round = "Round 1";
if(current_year >= 4){
  bake = bake - 3;
  round = "Round 2"
}

document.getElementById('year_indicator').innerHTML = round + ", " + "Year " + bake;

if(current_year == 1 ){
  $(document).ready(function(){
    $('#start_instruction').modal('toggle');
  });
}



var selected = new Vue({
    el: '#cards',
    data: {
        cards: [

        ]
    },
    methods: {
      locator: function () {
      for(card in this.cards){
        var pos = parseInt(card);
        this.cards[card].tagnum = pos;
        console.log(this.cards[card]);
      }
    }
  }

  });




var animal_stat = JSON.parse(sessionStorage.getItem("animal_status"));
var kane = sessionStorage.getItem("fruits_list");
var card_list = JSON.parse(sessionStorage.getItem("fruits_list"));

function reshuffle(){
  cards = card_list.sort(() => Math.random() - 0.5);
  selected.cards = cards;
}

reshuffle();


  selected.locator();

  var animal_container;

var animal_status = animal_stat;
  var table_data = new Vue({
    el: '#table1',
    data: {
      info: JSON.parse(sessionStorage.getItem("cell_data"))
    }
  });
  
  var table_data2 = new Vue({
    el: '#table2',
    data: {
      info: JSON.parse(sessionStorage.getItem("cell_data2"))
    }
  });

function show_table(){
  if(current_year <=3 ){
    table_data.info.exist = true;
  }
}

/*
if(current_year <= 3){
  var celldata = table_data.info;
  var stat = false;
  for (let x = 0; x < 3; x++) {
    for (let y = 1; y < 5; y++) {
      var cell =  'cell' + x.toString() + y.toString();
      console.log(cell);
      if(parseInt(celldata[cell]) >= 0){
        stat = true;
      }
    }
  }
  if(stat){console.log("sklfskfkslfklfklkfljslkjlkjlkjjkl");}
}
*/

if(current_year >= 4) {
  tablecheck = table_data2.info;
}

var tablecheck = table_data.info;
var animal_status = animal_stat;
var species = new Vue({
  el: '#species-container',
  data: {
    cards:{
      species_1: [

      ],
      species_2: [],
      species_3: [],
      species_4: [],
      species_5: [],
      species_6: [],
      trash: [
       
      ]
    },
    food: {
      species_1: ['red', 'yellow'],
      species_2: ['yellow', 'blue'],
      species_3: ['blue', 'white'],
      species_4: ['white', 'red'],
      species_5: ['blue', 'only blue'],
      species_6: ['white', 'red', 'yellow', 'blue']
    },
    points: {
      species_1: 0,
      species_2: 0,
      species_3: 0,
      species_4: 0,
      species_5: 0,
      species_6: 0
    },
    hearts: {
      species_1: Object.values(tablecheck.hearts1).filter(ticked_hearts).length,
      species_2: Object.values(tablecheck.hearts2).filter(ticked_hearts).length,
      species_3: Object.values(tablecheck.hearts3).filter(ticked_hearts).length,
      species_4: Object.values(tablecheck.hearts4).filter(ticked_hearts).length,
      species_5: Object.values(tablecheck.hearts3).filter(ticked_hearts).length,
      species_6: Object.values(tablecheck.hearts4).filter(ticked_hearts).length,
    },
    /*
    hearts: {
      species_1: Object.values(table_data.info.hearts1.status).filter(ticked_hearts).length,
      species_2: Object.values(table_data.info.hearts2.status).filter(ticked_hearts).length,
      species_3: Object.values(table_data.info.hearts3.status).filter(ticked_hearts).length,
      species_4: Object.values(table_data.info.hearts4.status).filter(ticked_hearts).length,
      species_5: Object.values(table_data.info.hearts1.status).filter(ticked_hearts).length,
      species_6: 0
    },
    */

    animal_status: animal_stat,
    alert: {
      new: '',
      new_img: ''
    }
}
});

function ticked_hearts(status) {
  return status.status == 'heart fas fa-heart';
}

var animal_container;

function allowDrop(ev, container) {
  ev.preventDefault();
  animal_container = container;
}


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  console.log("hello");
  var data = ev.dataTransfer.getData("text");
  chosen(document.getElementById(data));
}

function trashdrop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  var card = (document.getElementById(data));
  var pos = card.getAttribute("tag");
  species.cards['trash'].push(selected.cards[pos]);
  selected.cards.splice(pos, 1);
}

function discarder(){
  var pos = selected.cards.length - 1;
  species.cards['trash'].push(selected.cards[pos]);
  selected.cards.splice(pos, 1);
}

if(current_year == 4 || current_year == 5){
  $(document).ready(function(){
    $('#invasive_species_alert').modal('toggle');
  });
}


if(current_year == 4){
  species.animal_status["species_1"].exist = true;
  species.animal_status["species_2"].exist = true;
  species.animal_status["species_3"].exist = true;
  species.animal_status["species_4"].exist = true;
  species.animal_status["species_5"].exist = true;
    species.animal_status["species_1"].dead = false;
  species.animal_status["species_2"].dead = false;
  species.animal_status["species_3"].dead = false;
  species.animal_status["species_4"].dead = false;
  species.animal_status["species_5"].dead = false;

  animal_status["species_5"].exist = true;
  species.alert['new'] = "species E";
  species.alert['new_img'] = "/assets/species_5.png";
}

if(current_year == 3){
  document.getElementById("btn-text").innerHTML = "Round 2";
}

if(table_data.info.exist) {
  document.getElementById('round_1_heading').style.display = "block";
}
if(current_year >=4 ){
  document.getElementById('round_1_heading').style.display = "none";
  document.getElementById('round_2_heading').style.display = "block";
  table_data.info.exist = false;
    table_data2.info.exist = true;
  species.animal_status["species_5"].exist = true;
}

if(current_year == 5){
  table_data2.info.species_F = true;
  species.animal_status["species_6"].exist = true;
  animal_status["species_6"].exist = true;
  species.alert['new'] = "species F";
  species.alert['new_img'] = "/assets/species_6.png";
}

if(current_year >= 5 ){
  species.animal_status["species_6"].exist = true;
}

if(current_year >= 4){
  species.hearts = {
    species_1: Object.values(table_data2.info.hearts1).filter(ticked_hearts).length,
    species_2: Object.values(table_data2.info.hearts2).filter(ticked_hearts).length,
    species_3: Object.values(table_data2.info.hearts3).filter(ticked_hearts).length,
    species_4: Object.values(table_data2.info.hearts4).filter(ticked_hearts).length,
    species_5: Object.values(table_data2.info.hearts5).filter(ticked_hearts).length,
    species_6: Object.values(table_data2.info.hearts6).filter(ticked_hearts).length,
  }
}

if(current_year >= 6 ){
  document.getElementById('btn-text').innerHTML = "Done";
}

var foods = [];
for(animal in animal_status){
  if(animal_status[animal].exist){
    console.log("hello");
    console.log(species.food[animal]);
    foods = foods.concat(species.food[animal]);
  }
}

function shuffler(){
  while(!foods.includes(selected.cards[selected.cards.length - 1].fruit)){
    console.log("trutrubronit");
    selected.cards = selected.cards.sort(() => Math.random() - 0.5);
  }
}

shuffler();

function chosen(card) {
  if(!species.animal_status[animal_container].dead){
    chosen1(card);
  }else{
        $('#extinctfeed').modal('toggle');
  }
}

function chosen1(card) {
  if(true){
    var pos = card.getAttribute("tag");
    var fruit = card.getAttribute("fruit");
    var points = parseInt(card.getAttribute("points"));
    var points_container = animal_container + "_points";
    var species_E = ((!species.animal_status.species_5.dead) && (species.animal_status.species_5.exist)  && ((fruit == 'blue') && (points== 1) && (animal_container != "species_5")));
    var species_F = ((!species.animal_status.species_6.dead) && (species.animal_status.species_6.exist) && (points == 3) && (animal_container != "species_6"));
    console.log(species_E);
    console.log(species_F);
    if(species.food[animal_container].includes(fruit)){
      if(!species_E && !species_F){
      species.cards[animal_container].push(selected.cards[pos]);
      species.points[animal_container] = parseInt(species.points[animal_container]) + points;
      selected.cards.splice(pos, 1);
      shuffler()
      console.log(pos);
    }else{
      $('#wrong_food').modal('show');
      console.log(animal_container + "nbghghghrrgfg");
      if(species_E){
        document.getElementById('wrong_food_description').innerHTML = "All blue cards that have 1 food point must only be eaten by species E"
      }else{
        document.getElementById('wrong_food_description').innerHTML = "All cards that have 3 food point must only be eaten by species F"
      }
    }
    }else{
      $('#wrong_food').modal('show');
      console.log(animal_container + "nbghghghrrgfg");
      document.getElementById('wrong_food_description').innerHTML = species.animal_status[animal_container].name + " only likes " + species.food[animal_container][0]
      + ' and ' + species.food[animal_container][1] + ' fruits';
    }
  }


  select = false;
  animal_container = ""
  selected.locator();
  if((selected.cards.length + species.cards['trash'].length) == 24){
    document.getElementById('cards').style.display = "none";
    finish_game()
  }
  document.getElementById("select_card").innerHTML = "";

}

function finish_game() {
  if(current_year == 3 || current_year == 6){
    document.getElementById('obs-pop-h3').innerHTML = "";
document.getElementById('obs-pop-h5').innerHTML = "Congratulations! You have completed the round. Please tally your points, and then let’s reflect on what happened to the species in your forest.";
  $('#record_modal').modal('show');
  document.getElementById('next-btn').style.display = "block";
  

  }else{
  $('#record_modal').modal('show');
  document.getElementById('next-btn').style.display = "block";
  if(current_year <= 3){
      table_data.info.exist = true;
        document.getElementById('round_1_heading').style.display = "block";
  }else{
            table_data.info.exist = false;

  }
  }
}

  if(current_year >= 4){
     document.getElementById('round_1_heading').style.display = "noen";

  }

function species_question(){
  $('#dead_animals').modal('toggle');
}

//clickerheart

function add_heart(heart) {
  var tag = parseInt(heart.getAttribute("tag")) - 1;
  var id = heart.getAttribute("id");
  console.log("heart");
  if(table_data.info[id][tag].status == 'heart far fa-heart'){
    table_data.info[id][tag].status = 'heart fas fa-heart';
  }else{
    table_data.info[id][tag].status = 'heart far fa-heart';
  }
};

function add_heart2(heart) {
  var tag = parseInt(heart.getAttribute("tag")) - 1;
  var id = heart.getAttribute("id");
  if(table_data2.info[id][tag].status == 'heart far fa-heart'){
    table_data2.info[id][tag].status = 'heart fas fa-heart';
  }else{
    table_data2.info[id][tag].status = 'heart far fa-heart';
  }
};

//cherka
  function dead_status(animal){
      var check = animal.getAttribute('name');
      if(check === 'species_5' || check === 'species_6'){
    species.animal_status[check].dead = !species.animal_status[check].dead;

      }else{
      species.animal_status[check].exist = !species.animal_status[check].exist;
      species.animal_status[check].dead = !species.animal_status[check].dead;
      }
    }


function hello(){
  console.log("hello");
} 

function next_year(){
    next_year1();
}

function next_year1(){
  if(current_year >= 6 ){
    $('#end_of_game').modal('toggle');
  }else{
    var year = current_year + 1;
    sessionStorage.setItem("year", year);
    sessionStorage.setItem("cell_data", JSON.stringify(table_data.info));
    sessionStorage.setItem("cell_data2", JSON.stringify(table_data2.info));
    sessionStorage.setItem("animal_status", JSON.stringify(species.animal_status));
    location.reload();
  }
}

function next_year_disabled(){
  var checked = Object.values(species.animal_status);
  var points = Object.values(species.points);
  var right_ans = true;
  var dead_animal = [];
  for (var dead = 0; dead < 6; dead++){
    var correct = true;
    var pos = parseInt(dead) + 1;
    if(points[dead] + checked[dead].hearts < checked[dead].lives){
      dead_animal.push("species_" + pos);
    }
    if(points[dead] + checked[dead].hearts < checked[dead].lives != checked[dead].dead && checked[dead].exist){
      correct = false;
    }else{
      console.log(animal_status["species_" + pos].lives);
    }



    if((checked[dead].entry_1 != (points[dead] - (checked[dead].lives))) && checked[dead].exist){
      correct = false;
      if((points[dead] < checked[dead].lives) && (checked[dead].entry_1 == 0)){
        console.log("breadboarder1890");
        correct = true;
      }
    }
    console.log(Math.floor((points[dead] - (checked[dead].lives - checked[dead].hearts)) / 2)  + checked[dead].hearts);
      if((checked[dead].entry_2 !=  (Math.floor((points[dead] - (checked[dead].lives)) / 2)) + checked[dead].hearts) && checked[dead].exist){
      correct = false;
      console.log("norincobortis");
      if(points[dead] < checked[dead].lives && (checked[dead].entry_2 == (points[dead] + checked[dead].hearts - checked[dead].lives))){
        correct = true;
        console.log("mafghddfghn");
        console.log("broniccrongjtj oftjk" + checked[dead].hearts + ' ' + Math.floor((points[dead] - checked[dead].lives) / 2));
      }
     if((points[dead] + checked[dead].hearts - checked[dead].lives) < 0 && checked[dead].entry_2 == 0){
        correct = true;
        console.log("melokeeemann40404");
     }
    }

    if(checked[dead].entry_3 != points[dead]){
      correct = false;
    }

    if(checked[dead].entry_2 < 0 || checked[dead].entry_1 < 0){
      correct = false;
    }
    console.log(correct + "===3445==4==4=4=4=45=45=45=45=4===4545");

    if(!correct){
      right_ans = false;
    }

  }


  if(!right_ans) {
    document.getElementById('answer_display').innerHTML = "Your answer is incorrect! Try again"
    console.log("dfggddgfgdfgdf========");
  }else{
    console.log("minionminionminionminion");

    for (var i = 1; i < 7; i++){
      console.log("hellok============");
      if(animal_status["species_" + i].exist){
        console.log("hello");
        animal_status["species_" + i].hearts = parseInt(checked[i - 1].entry_2);

      }
      animal_status["species_" + i].entry_1 = 0;
      animal_status["species_" + i].entry_2 = 0;
    }

    if(current_year >= 6){
      $('#dead_animals').modal('toggle');
      $('#end_of_game').modal('toggle');
    }else{

    $('#dead_animals').modal('toggle');
    kill_animals(dead_animal);

    var year = current_year + 1;
    sessionStorage.setItem("year", year);
    sessionStorage.setItem("animal_status", JSON.stringify(animal_status));
    location.reload();
    }

  }

  }


function kill_animals(dead){
  for(animal in dead){
    animal_status[dead[animal]].exist = false;
  }
}
