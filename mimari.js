"use strict";

// Class definitions

class Opcode {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

class Instruction {
    constructor(opcode, operands) {
        this.opcode = opcode;
        this.operands = operands;
    }
}

class Register {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}

class Traps {
    constructor(name, value, func) {
        this.name = name;
        this.value = value;
        this.func = func;
    }
}

class Program {
    constructor(instructions) {
        this.instructions = instructions;
    }
}

class Machine {
    constructor(memory, registers, stack, traps, program) {
        this.memory = memory;
        this.registers = registers;
        this.stack = stack;
        this.traps = traps;
        this.program = program;
    }
}

// Opcodes

const ADD = new Opcode('ADD', 0x0001);
const SUB = new Opcode('SUB', 0x0002);
const MUL = new Opcode('MUL', 0x0003);
const DIV = new Opcode('DIV', 0x0004);
const MOV = new Opcode('MOV', 0x0005);
const JMP = new Opcode('JMP', 0x0006);
const JZ = new Opcode('JZ', 0x0007);
const JNZ = new Opcode('JNZ', 0x0008);
const JE = new Opcode('JE', 0x0009);
const JNE = new Opcode('JNE', 0x000A);
const JL = new Opcode('JL', 0x000B);
const JLE = new Opcode('JLE', 0x000C);
const JG = new Opcode('JG', 0x000D);
const JGE = new Opcode('JGE', 0x000E);
const CMP = new Opcode('CMP', 0x000F);
const PUSH = new Opcode('PUSH', 0x0010);
const POP = new Opcode('POP', 0x0011);
const CALL = new Opcode('CALL', 0x0012);
const RET = new Opcode('RET', 0x0013);
const HLT = new Opcode('HLT', 0x0014);
const NOP = new Opcode('NOP', 0x0015);
const TRAP = new Opcode('TRAP', 0x0016);

// Instructions

var instructions = [
    new Instruction(ADD, 2),
    new Instruction(SUB, 2),
    new Instruction(MUL, 2),
    new Instruction(DIV, 2),
    new Instruction(MOV, 2),
    new Instruction(JMP, 1),
    new Instruction(JZ, 1),
    new Instruction(JNZ, 1),
    new Instruction(JE, 1),
    new Instruction(JNE, 1),
    new Instruction(JL, 1),
    new Instruction(JLE, 1),
    new Instruction(JG, 1),
    new Instruction(JGE, 1),
    new Instruction(CMP, 2),
    new Instruction(PUSH, 1),
    new Instruction(POP, 1),
    new Instruction(CALL, 1),
    new Instruction(RET, 0),
    new Instruction(HLT, 0),
    new Instruction(NOP, 0),
    new Instruction(TRAP, 1)
];

// Memory

var memory = new Array(1 * 1024 ^ 3);

// Registers

var registers = [
    new Register('R0', 0),  // Accumulator
    new Register('R1', 0),
    new Register('R2', 0),
    new Register('R3', 0),
    new Register('R4', 0),
    new Register('R5', 0),
    new Register('R6', 0),
    new Register('R7', 0),
    new Register('R8', 0),
    new Register('R9', 0),
    new Register('R10', 0),
    new Register('R11', 0),
    new Register('R12', 0),
    new Register('R13', 0),
    new Register('R14', 0),
    new Register('R15', 0)   // Program counter
];

// Stack

var stack = new Stack();

// Traps

var traps = [
    new Traps('TRAP', 0, function() {
        console.log('Trap 0');
    }),
    new Traps('TRAP', 1, function() {
        console.log('Trap 1');
    }),
    new Traps('TRAP', 2, function() {
        console.log('Trap 2');
    }),
    new Traps('TRAP', 3, function() {
        console.log('Trap 3');
    }),
    new Traps('TRAP', 4, function() {
        console.log('Trap 4');
    }),
    new Traps('TRAP', 5, function() {
        console.log('Trap 5');
    }),
    new Traps('TRAP', 6, function() {
        console.log('Trap 6');
    }),
    new Traps('TRAP', 7, function() {
        console.log('Trap 7');
    }),
    new Traps('TRAP', 8, function() {
        console.log('Trap 8');
    }),
    new Traps('TRAP', 9, function() {
        console.log('Trap 9');
    }),
    new Traps('TRAP', 10, function() {
        console.log('Trap 10');
    }),
    new Traps('TRAP', 11, function() {
        console.log('Trap 11');
    }),
    new Traps('TRAP', 12, function() {
        console.log('Trap 12');
    }),
    new Traps('TRAP', 13, function() {
        console.log('Trap 13');
    }),
    new Traps('TRAP', 14, function() {
        console.log('Trap 14');
    }),
    new Traps('TRAP', 15, function() {
        console.log('Trap 15');
    })
];

// The instructions to run

var instructions = [
    new Instruction(ADD, [0, 5]),
    new Instruction(ADD, [1, 6]),
    new Instruction(MOV, [0, 1]),
    new Instruction(TRAP, [15]),
    new Instruction(HLT, []),
];

// Execute

function execute(instruction) {
    switch (instruction.opcode) {
        case ADD:
            var operand1 = instruction.operands[0];
            var operand2 = instruction.operands[1];
            console.log("ADD " + operand1 + " " + operand2);
            registers[operand1].value += operand2.value;
            break;
        case SUB:
            var operand1 = instruction.operands[0];
            var operand2 = instruction.operands[1];
            console.log("SUB " + operand1 + " " + operand2);
            registers[operand1].value -= operand2.value;
            break;
        case MUL:
            var operand1 = instruction.operands[0];
            var operand2 = instruction.operands[1];
            console.log("MUL " + operand1 + " " + operand2);
            registers[operand1].value *= operand2.value;
            break;
        case DIV:
            var operand1 = instruction.operands[0];
            var operand2 = instruction.operands[1];
            console.log("DIV " + operand1 + " " + operand2);
            registers[operand1].value /= operand2.value;
            break;
        case MOV:
            var operand1 = instruction.operands[0];
            var operand2 = instruction.operands[1];
            console.log("MOV " + operand1 + " " + operand2);
            registers[operand1].value = operand2.value;
            break;
        case JMP:
            var operand1 = instruction.operands[0];
            console.log("JMP " + operand1.value);
            registers[15].value = operand1.value;
            break;
        case JZ:
            var operand1 = instruction.operands[0];
            console.log("JZ " + operand1);
            if (registers[0].value == 0) {
                registers[15].value = operand1;
            }
            break;
        case JNZ:
            var operand1 = instruction.operands[0];
            console.log("JNZ " + operand1);
            if (registers[0].value != 0) {
                registers[15].value = operand1;
            }
            break;
        case JE:
            var operand1 = instruction.operands[0];
            console.log("JE " + operand1);
            if (registers[0].value == registers['R1'].value) {
                registers[16].value = operand1;
            }
            break;
        case JNE:
            var operand1 = instruction.operands[0];
            console.log("JNE " + operand1);
            if (registers[0].value != registers['R1'].value) {
                registers[15].value = operand1;
            }
            break;
        case JL:
            var operand1 = instruction.operands[0];
            console.log("JL " + operand1);
            if (registers[0].value < registers['R1'].value) {
                registers[15].value = operand1;
            }
            break;
        case JLE:
            var operand1 = instruction.operands[0];
            console.log("JLE " + operand1);
            if (registers[0].value <= registers['R1'].value) {
                registers[15].value = operand1;
            }
            break;
        case JG:
            var operand1 = instruction.operands[0];
            console.log("JG " + operand1);
            if (registers[0].value > registers['R1'].value) {
                registers[15].value = operand1;
            }
            break;
        case JGE:
            var operand1 = instruction.operands[0];
            console.log("JGE " + operand1);
            if (registers[0].value >= registers['R1'].value) {
                registers[15].value = operand1;
            }
            break;
        case CMP:
            var operand1 = instruction.operands[0];
            var operand2 = instruction.operands[1];
            console.log("CMP " + operand1 + " " + operand2);
            if (operand1 == operand2) {
                registers[0].value = 0;
            } else if (operand1 < operand2) {
                registers[0].value = -1;
            } else {
                registers[0].value = 1;
            }
            break;
        case PUSH:
            var operand1 = instruction.operands[0];
            console.log("PUSH " + operand1);
            stack.push(operand1);
            break;
        case POP:
            var operand1 = instruction.operands[0];
            console.log("POP " + operand1);
            operand1 = stack.pop
            break;
        case CALL:
            var operand1 = instruction.operands[0];
            console.log("CALL " + operand1);
            stack.push(registers[16].value);
            registers[15].value = operand1;
            break;
        case RET:
            console.log("RET");
            registers[15].value = stack.pop();
            break;
        case HLT:
            console.log("HLT");
            break;
        case NOP:
            console.log("NOP");
            break;
        case TRAP:
            var operand1 = instruction.operands[0];
            console.log("TRAP " + operand1);
            traps[operand1].func();
            break;
    }

    registers[15].value++;
}

// Main procedure

function main(machine) {
    while (true) {
        if (machine.program.instructions[machine.registers[15].value].opcode == HLT) {
            console.log("Machine halted!");
            break;
        }

        execute(machine.program.instructions[machine.registers[15].value]);
    }
}

// Initialize a new program

var program = new Program(instructions);

// Load the program to memory

for (var i = 0; i < program.instructions.length; i++) {
    memory[i] = program.instructions[i].opcode.code;
}

// Initialize the machine

var machine = new Machine(memory, registers, stack, traps, program);

// Initialize the screen

var screenCanvas = document.getElementById('screenCanvas');
var screenCanvasContext = screenCanvas.getContext('2d');
screenCanvasContext.fillStyle = 'black';
screenCanvasContext.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

// Run the machine

main(machine);
