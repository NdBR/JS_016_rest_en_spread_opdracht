// rest
const sum = function (...numbers) {
    return numbers.reduce((previous, current) => current + previous)
}
console.log(sum(1, 2, 3, 4, 5, 6))

const optellen = function (...args) {
    return args.reduce((acc, item) => {
        return acc + item;
    })
}

// const optellen = (...args) => args.reduce((acc, item) => acc + item)// zo korter

console.log(optellen(1, 2, 3, 4, 5, 6)); // verwachte uitkomst: 21


// spread
const sum1 = function () {
    return nums.reduce((previous, current) => current + previous)
}
const nums = [1, 2, 3, 4, 5, 6]

console.log(sum1(...nums))

const optellen1 = (num1, num2, num3) => num1 + num2 + num3;
const cijfers = [1, 2, 3]
console.log(optellen1(...cijfers))// de puntjes hier "spreiden de waardes uit het array over de argumenten in de functie"