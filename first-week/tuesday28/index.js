/*
    Daily objective: 
        1 - Learn Destructuring;

            1.1 - Create examples of destructuring;
        
        2 - Learn spred/rest operators;

            2.1 - Make a function that returns any number of arguments (rest);

*/

// =================================== DESTRUCTURING in Arrays ==============================================



const nums = [10, 20, 30]



const [a = 5, b = 5, c = 5] = nums; // <-- It is possible to pass default values ​​if there is no value;



// console.log(a, b, c) <-This will return 10, 20, 30;



const [x, , z] = nums; // <-- It is possible to skip a value if you do not want to assign it to a variable.

console.log(x, z)



// ========================================================================================================== //