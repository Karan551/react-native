const numbers = [5, 10, 15];
const newNumbers = numbers.map((number) => number * 3);
// console.log(newNumbers);

// second task
const user = {
    name: "Your name",
    age: 18
};
// console.log(`"My name is ${user.name} and I am ${user.age}"`);

const num = [2, 5, 8, 9, 11];
const squareOfNum = (a) => a * a;
const nums = num.map((squareOfNum));
// console.log(nums);

// 3rd Task
const students = ["Ram", "Shyam", "Mohan"];
const studentsDetails = students.map((str) => `"Hello + ${str}"`);
// console.log(studentsDetails);
// next day (day-2 task)

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Here is data::", data);
    } catch (error) {
        console.log("Error ::", error);
    }

};
// getData();

// Task-1
// setTimeout(() => {
//     console.log("Hello after delay.");
// }, 2000);

// Task-2
const getUsersData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("data::", data instanceof Array);
        data.map((eachObj) => {
            console.log("user id::", eachObj.userId);
            console.log("title is::", eachObj.title);
            console.log("body is::", eachObj.body);
        });

    } catch (error) {
        console.log("error::", error);
    }

};
// getUsersData();

// Task-3
const greetMsg = async () => "React Native is fun";
//  async function greetMsg(){
//     return "React Native is fun";
// }

// this is first method to do this
// greetMsg().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log("error is ::", err);
// });
// this is second method to this

async function res() {
    const msg = await greetMsg();
    console.log(msg);
}
res()