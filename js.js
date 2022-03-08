// const num = [2, 4, 5]
// num.push(6);
// num.push(7);
// console.log(num);
// num.pop();
// num.pop();

// console.log(num)

// let day1 = {
//     squirrel: false,
//     events: ['work', 'touched tree', 'pizza', 'running']
// }

// console.log(Object.keys({

//     squirrel: false,
//     events: ['work', 'touched tree', 'pizza', 'running']

// }))
// console.log("right" in day1);
// console.log("work" in day1);
// console.log("events" in day1);
// console.log(day1.squirrel);
// console.log(day1.wolf);
// day1.wolf = false;
// console.log(day1.wolf);



// let anObject = {left: 1, right:2};
// console.log(anObject.left);
// delete anObject.left;
// console.log(anObject.left);
// console.log('left' in anObject);
// console.log("right" in anObject);

// const score = {visitor : 0 , home: 0}
// console.log(score)

let journal =[]

function addEntry(events, squirrel){
    journal.push({events,squirrel});
}
addEntry(['work', "touch tree", 'pizza', 'running', 'television'], false);
addEntry(["work", 'ice cream', 'cauliflowr', 'lasagna', 'touched tree', 'brushed teeth'], false);
addEntry(["weekedn", "cycling", "break", "peanuts",'beer', true]);

 
// console.log(journal)


// function tableFor (event, journal) {
//     let table = [0, 0, 0,0];
//     for ( let i = 0 ; i < journal.lenght; i++) {
//         let entry = journal[i],index =0;
//         if (entry.event.includes(event)) index =+ 1;
//         if (entry.squirrel) index += 2;
//         table[index] +=1;
//     }
//     return table;
// }

// for(let entry of journal) {
//     console.log(`${entry.events.length} events.`)
// }

/*
const two = [1,2,3,4,5,6]
console.log(two.slice(2));
*/
// function remove(array, index) {
//     return array.slice(0, index)
//         .concat(array.slice(index + 1));
// }

// console.log(re)

// function remove(array, index) {
//     return array.slice(0, index)
//     .concat(array.slice(index + 1));
// }
// console.log(remove(['a','b','c','d','e'],))

// console.log("           okey           ".trim());

// const myFun = new Function("a", "b", "return a* b");
// console.log(myFun(5 , 6));


// function findMax() {
//     let max = -Infinity;
//     for(let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max)
//          max = arguments[i]
//     }
//     return max;
// }
// console.log(findMax(2,5,36,254,999))

// function findMax (){
//     let max = -Infinity;
//     for(let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(25,145,146,144,146.2))


// console.log("coconuts".slice(4,7));
// console.log("coconut".indexOf("t"))
 
// console.log(String(3).padEnd(3,2))

// let sentence = "Secret arybirds specialize in stomping";
// let word = sentence.split(" ");
// console.log(word)
// console.log(word.join(""))


// console.log("la".repeat(5))

// function max(...numbers) {
//     let result = -Infinity
//     for (let number of numbers){
//         if(number > result){
//             result = number;
//         }
//     }
//     return result;
// }
// console.log(max(3,2,5,7,9))

// let x = ["never", "fully"];
// console.log(["will",...x,"understand"]);


// let y = [1,2];
// console.log([0, ...y,3]);

// console.log(Math.sqrt(64))



// console.log(Math.floor(Math.random()



// ))

// let string = JSON.stringify({squirrel: false,
//                            events: ["weekend"]});
//     console.log(string)

//     console.log(JSON.parse(string).events)











