function isNumber(n) {
 return !Number.isNaN(Number(n));
}

function dissectInstruction(instruction) {
  return instruction.split(' ');


function minilang(instruction) {
  const STACK = [];
  const OPERATIONS = {
    ASSIGN : (n) => register = Number(n),
    PUSH: () => STACK.push(register),
    ADD: () => register += STACK.pop(),
    SUB: () => register -= STACK.pop(),
    MULT: () => register *= STACK.pop(),
    DIV: () => register = Math.round(register / STACK.pop()),
    REMAINDER: () => register %= STACK.pop(),
    POP: () => register = STACK.pop(),
    PRINT: () => console.log(register)
  };

  let register = 0;
  let instructionSequence = dissectInstruction(instruction);
  instructionSequence.forEach(element => {
    if (isNumber(element)) {
      OPERATIONS.ASSIGN(element);
    } else {
      if (Object.keys(OPERATIONS).includes(element)) {
        OPERATIONS[element]();
      }
    }
  });
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// 