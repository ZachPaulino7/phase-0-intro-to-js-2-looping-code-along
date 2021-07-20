//for (let age = 30; age < 40; age++) {
  //  console.log(`I'm ${age} years old. Happy Birthday to me!`);
  //  debugger;
// }

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
    //for (let i = 0; i < gifts.length; i++) {
        //console.log(`Wrapped ${gifts[i]} and added a bow!`);
   //     debugger;
    // }
    //return gifts;
//}
//wrapGifts(gifts);


const name = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(name) {
    let message= []
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)     
    }
    return message;
}

writeCards(name);

function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    }
}