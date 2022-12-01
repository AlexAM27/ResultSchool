const START_NR = 1016;
const END_NR = 1937;

const firstRequirement = function(ticketNr) {
  return ticketNr % 3 === 0 && ticketNr % 7 === 0;
}

const secondRequirement = function(ticketNr) {
  return ticketNr % 5 !== 0 && ticketNr % 2 !== 0;
}

const findWinner = function() {
  const possibleWinnerArray = [...Array(END_NR - START_NR + 1).keys()].map(x => x + START_NR);
  return Math.max(...possibleWinnerArray.filter(nr => firstRequirement(nr) && secondRequirement(nr)));
}

console.log('Winner number',findWinner());