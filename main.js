const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
// const result = contacts.filter(contact => contact.company === 'INSECTUS')
// console.log(result)

//2. an array all of the contacts, with only the name property
// const names = contacts.map(obj => obj.name)
// console.log(names)

//3. an array of all of the contacts over the age of 50
// const result = contacts.filter((contact) => contact.age > 50)
// console.log(result)

//4. the first ten contacts when alphabetically ordered by name

// sort contacts by name in alphabetical order
// contacts.sort((a, b) => a.name.localeCompare(b.name));
// filter first ten contacts from the sorted data
// const firstTenContacts = contacts.slice(0, 10);
// console.log(firstTenContacts);


//5. the oldest person's name
// contacts.sort((a, b) => b.age - a.age)
// const oldestPerson = contacts[0].name
// console.log(oldestPerson)

//6. the contact id with the name Isabella Burke
// const filteredData = contacts.filter((item) => item.name === 'Isabella Burke').map((item) => item.id)
// console.log(filteredData)

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
// const splitName = contacts.map((obj) => {
//   const name = obj.name.split(' ')
//   return {
//     firstName: name[0],
//     lastName: name[1],
//   }
// })
// console.log(splitName)


//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
// const friend = contacts.map(obj => obj.friends)
// console.log(friend)

//9. the average age of the contacts
// const averageAge = contacts.reduce((total, person) => total + person.age, 0) / contacts.length
// console.log(averageAge)

//10. the median age of the contacts
// const ages = contacts.map((obj) => obj.age)
// ages.sort((a, b) => a - b)

// const middle = Math.floor(ages.length / 2)
// const median = ages.length % 2 === 0 ? (ages[middle - 1] + ages[middle]) / 2 : ages[middle]

// console.log(median)