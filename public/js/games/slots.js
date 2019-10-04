// welcome to slots message
// 3 slot screen items
let slotOne = 0;
let slotTwo = 0;
let slotThree = 0;

$("#spinBtn").on("click",()=>{
    slotOne = Math.floor(Math.random()*3)+1;
    slotTwo = Math.floor(Math.random()*3)+1;
    slotThree = Math.floor(Math.random()*3)+1;
    if(slotOne === slotThree && slotOne === slotTwo){
        console.log(`you win!`);
        console.log(slotOne,slotTwo,slotThree)
    } else{
        console.log(`thanks for your money`);
        console.log(slotOne,slotTwo,slotThree)
    };

});



// explain rules and cost of game
// user will click spin 
    // spin will run 
    // if spin matches slot number add 1 coin through databse
    // if spin does not match deduct 1 coin through database
// update database to show coin value

// comparing logic---------------
// generate 3 arrays 
// [0,1,2]

// start of game


// write sequelize function to update coin count after every win or loss for game.
