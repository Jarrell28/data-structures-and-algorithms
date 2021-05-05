'use strict';

const Stack = require('./stacks.js');

module.exports = function multiBracketValidation(string) {
    if (typeof string !== "string") return false;
    //Input types
    let open = ['[', '{', '('];
    let closed = [']', '}', ')'];

    //Starting with closing bracket, false
    if (closed.includes(string[0])) return false;

    const stack = new Stack();

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];

        //Contains open bracket, push it to stack
        if (open.includes(letter)) {
            stack.push(letter);
        } else if (closed.includes(letter)) { // We have a closing bracket
            if (stack.isEmpty()) return false; // Stack is empty so open bracket was not in string before closing

            //Make comparison for open and closing bracket
            if ((stack.peek() === "[" && letter === "]") || (stack.peek() === "{" && letter === "}") || (stack.peek() === "(" && letter === ")")) {
                stack.pop();
            } else {
                //Closing bracket does not match with open bracket at top of stack
                return false;
            }
        } else {
            //Continue to loop through entire word
            continue;
        }
    }

    //If empty stack, that means all open brackets have been closed
    if (stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}

// console.log(multiBracketValidation("(]("));