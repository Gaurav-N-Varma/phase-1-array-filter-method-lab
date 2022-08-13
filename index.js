// Code your solution here

const drivers = ['Alixon', 'Umut', 'Ian']

function findMatching(driverList, string){
    return driverList.filter((name) => name.toLowerCase() === string.toLowerCase())
}

// function fuzzyMatch(driverList, string){
//     // iterates through driverList
//     return driverList.filter((name) => {
//         // iterates through given string
//         for (let i = 0; i < string.length; i++){
//             if (name[i] === string[i]){
//                 // if it matches it does nothing
//             } else {
//                 // if not, returns false
//                 return false
//             }
//         }
//         // getting out the of the for loop means that the letters matched
//         // hence return true
//         return true
//     })
// }

// function fuzzyMatch(source, testString) {
//     return source.filter(
//       (possibleMatch) =>
//         possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     );
//   }

function fuzzyMatch(driverList, string){
    return driverList.filter((element) => {
        return element.toLowerCase().indexOf(string.toLowerCase()) === 0
    })
}


const driverObjects = [
    {name: 'Ian', hometown: 'Vermont'},
    {name: 'Umut', hometown: 'Turkey'}
]

function matchName(driverInfo, string){
    return driverInfo.filter(element => element.name === string)
}