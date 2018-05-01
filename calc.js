//**************************************************************************************//
//                     Node.js Command Line Calculator by Tony Scott                    //
//**************************************************************************************//
//                                                                                      //
//  Date   | new ver | old ver | Description                                             //
// ------------------------------------------------------------------------------------ //
// 04/2018 |   00    |         | Initial implementation                                 //
//______________________________________________________________________________________//
//**************************************************************************************//

// Variables
var calc = process.argv[2];                 // Math operator
var num1 = parseInt(process.argv[3]);       // First number of math problem
var num2 = parseInt(process.argv[4]);       // Second number of math problem
var answ = 0;                               // Answer to solved math problem
var alg1 = 0;                               // First value of algebra problem
var alg2 = 0;                               // Second value of algebra problem
var alg3 = 0;                               // Third value of algebra problem
var algNum = 0;                             // Value used to solve algebra problem
var swch = false;                           //              Indicators
var swch1 = 0;                              //             for solving
var swch2 = 0;                              //           algebra problem

//Switch logic: Determines math operations & solves arithmetic, etc. problems
switch (calc) {
    case "add":                            // Addition?
        answ = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + answ );
        break;
    case "subtract":                       //Subtraction?
        answ = num1 - num2;
        console.log(num1 + " - " + num2 + " = " + answ );
        break;
    case "multiply":                       //Multiply?
        answ = num1 * num2;
        console.log(num1 + " * " + num2 + " = " + answ );
        break;
    case "divide":                         //Divide?
        answ = num1 / num2;
        console.log(num1 + " / " + num2 + " = " + answ );
        break;
    case "rem":                            //Remainder?
        answ = num1 % num2;
        console.log("The remainder of " +num1 + " and " + num2 + " is " + answ );
        break;
    case "exp":                            //Exponent?
        for (var x = 0;x < num2;x++) {
            if (answ === 0){
                answ = answ + num1;
            } else {
                answ = answ * num1;
            }
        }
        console.log(num1 + " with an exponent of " + num2 + " is equal to " + answ );
        break;
    case "algebra":                        //Algebra?

        // Algebra algorithm
        for(var i = 0;i <= process.argv[3].length; i++) {


            if (process.argv[3][i] === "="  && swch2 === 0) {
                swch2++;
            } else if (process.argv[3][i] === "x"  && swch === false) {
                swch = true;
                i++;
            } else if (process.argv[3][i] !== "x"  && swch === false) {
                if (i === 0) {
                    alg1 = process.argv[3][i];
                } else {
                    alg1 = alg1 + process.argv[3][i];
                }
            } else if (process.argv[3][i] !== "x"  && swch === true && swch2 === 0) {
                if (swch1 === 0) {
                    alg2 = process.argv[3][i];
                    swch1++
                } else {
                    alg2 = alg2 + process.argv[3][i];
                }
            } else if (process.argv[3][i] !== "x"  && swch === true && swch1 === 1){
                if (process.argv[3][i] !== undefined) {
                    if (swch2 === 0) {
                        alg3 = process.argv[3][i];
                        swch2++
                    } else {
                        alg3 = alg3 + process.argv[3][i];
                    }
                }
            }
        }

        algNum = parseFloat(alg3) - parseFloat(alg2);   //Determine value used to solve algebra problem
        answ = parseFloat(algNum) / parseFloat(alg1);                    //Solve algebra problem
        console.log(alg1 + "x+" + alg2 + "=" + alg3 + ", x=" + answ);    //Display user output
        break;
}
