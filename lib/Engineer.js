const Employee = require('./Employee');

class Engineer {
    constructor(github) {
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        returns "Engineer";
    }
}

module.exports = Engineer;