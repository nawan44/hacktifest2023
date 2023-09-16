// let name = "Putri";
// console.log(name);

// const gender = "female";
// name = "Indah"

// console.log("aku")


const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
app.set ("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
const tasks = ["mandi", "makan", "minum"];


app.get('/', (req, res) => {
//   res.send('Hello World!')
res.render("index", {tasks})
})

app.post ("/add-task", (request, response) => {
// console.log(req.body)
const {taskName} = request.body
console.log("taskName", taskName);
if (taskName) {
    tasks.push(taskName);

}
response.redirect("/")
})

// app.get('/about', (req, res) => {
//     res.send('Hello about!')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})