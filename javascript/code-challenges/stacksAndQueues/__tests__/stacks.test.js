'use strict';

const Stack = require("../stacks.js");


describe('STACKS', () => {


    it('should successfully push onto a stack', () => {
        const stack = new Stack();

        stack.push(1);

        expect(stack.peek().value).toEqual(1);
    });

    it('should successfully push multiple values onto a stack', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.length).toEqual(3);
    });

    it('should successfully pop off the stack', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop().value).toEqual(3);
    });

    it('should successfully empty a stack after multiple pops', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.pop();
        stack.pop();

        expect(stack.isEmpty()).toBe(true);
    });

    it('should successfully peek the next item on the stack', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);

        expect(stack.pop().value).toEqual(2);
    });

    it('should successfully instantiate an empty stack', () => {
        const stack = new Stack();

        expect(stack.isEmpty()).toBe(true);
    });

    it('should call exception when calling pop or peek on empty stack', () => {
        const stack = new Stack();

        expect(stack.pop()).toEqual("Empty Stack");
    })
})