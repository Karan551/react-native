const todos = [
    { id: 1, text: 'Learn JavaScript' },
    { id: 2, text: 'Learn React' },
    { id: 3, text: 'Build something awesome' },
    { id: 4, text: 'Get a job' },
    { id: 5, text: 'Learn Dart' },
];


const timeStamp = Date.now();
const date = new Date(timeStamp);
console.log(date,date.toString());

// ({ [key]: value }));
// todos.map(({ id, text }) => console.log(`${id}:${text}`));
const res = todos.map(({ id, text }) => ({ [id]: text }));
console.log(res);
const newTodos = [...todos, { id: 7, text: "learn flutter" }];
console.log(newTodos);