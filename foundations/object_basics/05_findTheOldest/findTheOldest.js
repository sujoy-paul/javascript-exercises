const findTheOldest = function (people) {
    return people.reduce((lastPerson, currPerson) => {
        const currYear = new Date().getFullYear()
        let lastAge = ("yearOfDeath" in lastPerson) ? lastPerson.yearOfDeath - lastPerson.yearOfBirth : currYear - lastPerson.yearOfBirth;

        let currAge = ("yearOfDeath" in currPerson) ? currPerson.yearOfDeath - currPerson.yearOfBirth : currYear - currPerson.yearOfBirth;

        return currAge > lastAge ? currPerson : lastPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
