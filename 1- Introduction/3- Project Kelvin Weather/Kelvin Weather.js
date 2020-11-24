//Temperature in Kelvin
const kelvin = 300;
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

//Let’s convert Kelvin to Celsius
let celsius = kelvin - 273

//Use this equation to calculate Fahrenheit,
let fahrenheit = celsius*(9/5) + 32

//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

