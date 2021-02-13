const { off } = require('process');
const Employee = require('./Employee');

class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;