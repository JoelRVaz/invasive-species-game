var selected_cards = [];
localStorage.setItem("year", '1');

var cardset = new Vue({
  el: '#card-container',
  data: {  
    random:0,
    cards: [
      {
        points: 1,
        picture: '/assets/cards/card_1.png',
        fruit: 'red'
      },
      {
        points: 1,
        picture: '/assets/cards/card_2.png',
        fruit: 'blue'
      },
      {
        points: 1,
        picture: '/assets/cards/card_3.png',
        fruit: 'yellow'
      },
      {
        points: 1,
        picture: '/assets/cards/card_4.png',
        fruit: 'white'
      },
      {
        points: 2,
        picture: '/assets/cards/card_5.png',
        fruit: 'red'
      },
      {
        points: 2,
        picture: '/assets/cards/card_6.png',
        fruit: 'blue'
      },
      {
        points: 2,
        picture: '/assets/cards/card_7.png',
        fruit: 'yellow'
      },
      {
        points: 2,
        picture: '/assets/cards/card_8.png',
        fruit: 'white'
      },
      {
        points: 3,
        picture: '/assets/cards/card_9.png',
        fruit: 'red'
      },
      {
        points: 3,
        picture: '/assets/cards/card_10.png',
        fruit: 'blue'
      },
      {
        points: 3,
        picture: '/assets/cards/card_11.png',
        fruit: 'yellow'
      },
      {
        points: 3,
        picture: '/assets/cards/card_12.png',
        fruit: 'white'
      },
      {
        points: 1,
        picture: '/assets/cards/card_1.png',
        fruit: 'red'
      },
      {
        points: 1,
        picture: '/assets/cards/card_2.png',
        fruit: 'blue'
      },
      {
        points: 1,
        picture: '/assets/cards/card_3.png',
        fruit: 'yellow'
      },
      {
        points: 1,
        picture: '/assets/cards/card_4.png',
        fruit: 'white'
      },
      {
        points: 2,
        picture: '/assets/cards/card_5.png',
        fruit: 'red'
      },
      {
        points: 2,
        picture: '/assets/cards/card_6.png',
        fruit: 'blue'
      },
      {
        points: 2,
        picture: '/assets/cards/card_7.png',
        fruit: 'yellow'
      },
      {
        points: 2,
        picture: '/assets/cards/card_8.png',
        fruit: 'white'
      },
      {
        points: 3,
        picture: '/assets/cards/card_9.png',
        fruit: 'red'
      },
      {
        points: 3,
        picture: '/assets/cards/card_10.png',
        fruit: 'blue'
      },
      {
        points: 3,
        picture: '/assets/cards/card_11.png',
        fruit: 'yellow'
      },
      {
        points: 3,
        picture: '/assets/cards/card_12.png',
        fruit: 'white'
      },
      {
        points: 1,
        picture: '/assets/cards/card_1.png',
        fruit: 'red'
      },
      {
        points: 1,
        picture: '/assets/cards/card_2.png',
        fruit: 'blue'
      },
      {
        points: 1,
        picture: '/assets/cards/card_3.png',
        fruit: 'yellow'
      },
      {
        points: 1,
        picture: '/assets/cards/card_4.png',
        fruit: 'white'
      },
      {
        points: 2,
        picture: '/assets/cards/card_5.png',
        fruit: 'red'
      },
      {
        points: 2,
        picture: '/assets/cards/card_6.png',
        fruit: 'blue'
      },
      {
        points: 2,
        picture: '/assets/cards/card_7.png',
        fruit: 'yellow'
      },
      {
        points: 2,
        picture: '/assets/cards/card_8.png',
        fruit: 'white'
      },
      {
        points: 3,
        picture: '/assets/cards/card_9.png',
        fruit: 'red'
      },
      {
        points: 3,
        picture: '/assets/cards/card_10.png',
        fruit: 'blue'
      },
      {
        points: 3,
        picture: '/assets/cards/card_11.png',
        fruit: 'yellow'
      },
      {
        points: 3,
        picture: '/assets/cards/card_12.png',
        fruit: 'white'
      }
    ]
  },
  created: function () {
    // `this` points to the vm instance
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }
});

function turn_card(card) {
  var tag = {
    points: card.getAttribute("points"),
    picture: card.getAttribute("pic"),
    fruit: card.getAttribute("fruit")
  }

  if(!card.style.content.includes(card.getAttribute("pic"))){
    selected_cards.push(tag);
    if(selected_cards.length >= 12){
      play();
    }
  }
  card.style.content = "url(" + card.getAttribute("pic") + ")";

}

var animal_status = {
  species_1: {dead:false, name: 'species A', exist: true},
  species_2: {dead:false, name: 'species B', exist: true},
  species_3: {dead:false, name: 'species C', exist: true},
  species_4: {dead:false, name: 'species D', exist: true},
  species_5: {dead:false, name: 'species E', exist: false},
  species_6: {dead:false, name: 'species F', exist: false}
}

function play() {
  localStorage.setItem("cards", JSON.stringify(selected_cards));
  localStorage.setItem("animal_status", JSON.stringify(animal_status));
  window.location.href = "../game/index.html";
}
