sessionStorage.setItem("year", '1');
//Warnning use extra lives
var animal_status = {
    species_1: {dead:false, name: 'species A', entry_3: 0, extra_lives: 0, entry_1: 0, entry_2: 0, hearts: 1, exist: true, lives: 5},
    species_2: {dead:false, name: 'species B', entry_3: 0, extra_lives: 0, entry_1: 0, entry_2: 0, hearts: 1, exist: true, lives: 5},
    species_3: {dead:false, name: 'species C', entry_3: 0, extra_lives: 0, entry_1: 0, entry_2: 0, hearts: 1, exist: true, lives: 5},
    species_4: {dead:false, name: 'species D', entry_3: 0, extra_lives: 0, entry_1: 0, entry_2: 0, hearts: 1, exist: true, lives: 5},
    species_5: {dead:false, name: 'species E', entry_3: 0, extra_lives: 0, entry_1: 0, entry_2: 0, hearts: 1, exist: false, lives: 3},
    species_6: {dead:false, name: 'species F', entry_3: 0, extra_lives: 0, entry_1: 0, entry_2: 0, hearts: 0, exist: false, lives: 3}
  }

var cell_data = {
  exist: false,
  cell01: '',
  cell02: '',
  cell03: '',
  cell04: '',
  cell05: '',
  cell05: '',
  cell11: '',
  cell12: '',
  cell13: '',
  cell14: '',
  cell15: '',
  cell16: '',
  cell21: '',
  cell22: '',
  cell23: '',
  cell24: '',
  cell25: '',
  cell26: '',
  hearts1: [
    {name: 1, status: 'heart fas fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  hearts2: [
    {name: 1, status: 'heart fas fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  hearts3: [
    {name: 1, status: 'heart fas fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  hearts4: [
    {name: 1, status: 'heart fas fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  dead: {
    status1: false,
    status2: false,
    status3: false,
    status4: false
  }
}

var cell_data2 = {
  exist: false,
  species_F: false,
  cell01: '',
  cell02: '',
  cell03: '',
  cell04: '',
  cell05: '',
  cell05: '',
  cell11: '',
  cell12: '',
  cell13: '',
  cell14: '',
  cell15: '',
  cell16: '',
  cell21: '',
  cell22: '',
  cell23: '',
  cell24: '',
  cell25: '',
  cell26: '',
  hearts1: [
    {name: 1, status: 'heart fas fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  hearts2: [
    {name: 1, status: 'heart fas fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  hearts3: [
    {name: 1, status: 'heart fas fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  hearts4: [
    {name: 1, status: 'heart fas fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  hearts5: [
    {name: 1, status: 'heart far fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  hearts6: [
    {name: 1, status: 'heart far fa-heart'},
    {name: 2, status: 'heart far fa-heart'},
    {name: 3, status: 'heart far fa-heart'},
    {name: 4, status: 'heart far fa-heart'},
    {name: 5, status: 'heart far fa-heart'},
    {name: 6, status: 'heart far fa-heart'},
    {name: 7, status: 'heart far fa-heart'},
    {name: 8, status: 'heart far fa-heart'},
    {name: 9, status: 'heart far fa-heart'},
    {name: 10, status: 'heart far fa-heart'}
  ],
  dead: {
    status1: false,
    status2: false,
    status3: false,
    status4: false,
    status5: false,
    status6: false
  }
}

var animals =[
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
]; 

sessionStorage.setItem("fruits_list", JSON.stringify(animals));

sessionStorage.setItem("cell_data2", JSON.stringify(cell_data2));
sessionStorage.setItem("cell_data", JSON.stringify(cell_data));
sessionStorage.setItem("animal_status", JSON.stringify(animal_status));
