function pick() {

  var players = 4; //change the number of players

  let number = Math.floor((Math.random() * (players)));
  let list = ['Ally', 'Var', 'Nal', 'Kan']; //add names
  return list[number]
}
function pick2() {

   //change the number of players

  let number = Math.floor((Math.random() * (9)));
  let list = ['https://media.giphy.com/media/eiAj5evcF8dV7Cxkvv/giphy.gif', 'https://media.giphy.com/media/sakSFMWFL8XePzAWnk/giphy.gif', 'https://media.giphy.com/media/L0qTl8hl84EDly62J1/giphy.gif','https://media.giphy.com/media/Wa904jKXSoPO8hiKA5/giphy.gif','https://media.giphy.com/media/5f3qf0iOr8AEoD3yY0/giphy.gif',
"https://media.giphy.com/media/8ZJCPyI1ArLacsBUkN/giphy.gif", "https://media.giphy.com/media/14tvbepZ8vhU40/giphy.gif", "https://media.giphy.com/media/50i6YRZxEiqkM/giphy.gif","https://media.giphy.com/media/6kowdZn2VXQPu/giphy.gif","https://media.giphy.com/media/MbnJqxxg3ljU8KvCF5/giphy.gif"]; //add names
  return list[number]
}



var submit = document.getElementById("submit");

submit.addEventListener('click', function() {
  "strict use";

  var result = document.getElementById("result");
  var final = pick();
  var final2 = pick2();
  var background = document.getElementById("wheel");
let list = ["https://media.giphy.com/media/eiAj5evcF8dV7Cxkvv/giphy.gif"];
  background.style.backgroundImage = "url('"+ final2 + "')";


  result.innerHTML = final;


})
