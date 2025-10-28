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

// console.log(x, z)



// ========================================================================================================== //





// =================================== DESTRUCTURING in Objects ============================================= //

const person = {
    name: "Pedro",
    age: 15,
    city: "NewYork",
};

const { name, age } = person;

//console.log(name, age);

const { city: local} = person;

//console.log(local);

// ========================================================================================================== //



// =================================== REST OPERATOR ============================================= //

/*

    Rest operator -> we use it when we want to get the rest of an object;

    Supondo que queromos pegar tudo que nao for o objeto adress,
    usamos o rest para falar que queremos o adress, e resto va para
    outra variavel no caso a varialvel userWithoutAddress

*/

const user = [

    {
        name: "Pedro Rossi",
        age: 15,
        email: "pedrohrdev@gmail.com",

        adress: {
            
            street: "123 Main st",
            city: "Chique Chique",
            state: "Piauí",
        
        }

    }
];


const usingRest = user.map( ({adress, ...userWithoutAddress}) => {
    return userWithoutAddress
} );

// console.log(usingRest)