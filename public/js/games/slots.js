// welcome to slots message
// explain rules and cost of game
// user will click spin 
    // spin will run 
    // if spin matches slot number add 1 coin through databse
    // if spin does not match deduct 1 coin through database
// update database to show coin value

// comparing logic---------------
// generate 3 arrays 
// [0,1,2]
// [1,2,0]
// [2,0,1]
// 1 coin payout line  middle row ----
// [0,1,2]
// [0,0,0]
// [2,1,0]
// 2 coin payout line diagonal bottum/////
// [0,1,1]
// [0,1,0]
// [1,1,1]
// 3 coin payout line --- + ///
// [0,1,1]
// [1,1,1]
// [1,0,2]

// start of game


// write sequelize function to update coin count after every win or loss for game.