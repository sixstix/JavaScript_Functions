console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 0; i < count; i++) {
        if(i % 2 != 0) {
            console.log(i);
        } 
    }
}

printOdds(10);
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
    let oldEnough = `Congratulations ${name}! You can drive!`;
    let tooYoung = `Sorry ${name}, you have to wait ${16 - age} years until you can drive.`;

    if (age < 16) {
        console.log(tooYoung);
    }  else {
        console.log(oldEnough);
    }

}
checkAge("Sam", 11);
checkAge("Melvin, 19");

// Exercise 3 Section
console.log("Exercise 3: \n=========\n");

function whichQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quad 1";
    }   else if (x < 0 && y > 0) {
        return "Quad 2";
    }   else if (x < 0 && y < 0) {
        return "Quad 3";
    }   else if (x > 0 && y < 0) {
        return "Quad 4"; 
    }   else if (x == 0 && y != 0) {
        return "X Axis";
    }   else if (x != 0 && y == 0); {
        return "Y Axis";
    }  
        
}

console.log(whichQuadrant(2, 5));
console.log(whichQuadrant(-1, 9));
console.log(whichQuadrant(3, -5));
console.log(whichQuadrant(-3, -5));

//Exercise 4 Section
console.log("Exercise 4: \n==========\n");

function isValidTriangle(a, b, c) {
    return a + b > c || a + c > b || b + c > a;       
}   

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) { 
            console.log("Equilateral");
        }   else if (a == b || b == c || a == c) {
            console.log("Isosceles");
        }   else {
            console.log("Scalene");
        }
    }   else {
        console.log("Not valid");
    }

}
checkTriangle(1, 2, 2);
checkTriangle(8, 8, 8);
checkTriangle(7, 11, 14);
checkTriangle(8, 8, 4);







