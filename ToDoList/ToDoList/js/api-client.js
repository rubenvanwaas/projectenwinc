const getNewTasks = async function () {
    const apiUrl =
        "https://wincacademydatabase.firebaseio.com/ruben/tasks.json";
    try {
        const result = await fetch(apiUrl, { method: "GET" });
        const res = await result.json();
        console.log("Before(the raw result):", res);
        let tasks = Object.keys(res).map(key => ({
            id: key,
            description: res[key].description,
            done: res[key].done
        }))
        console.log("After the tasks array", tasks);
    }
    catch (err) {
        return err;
    };
}

getNewTasks();

  /*
const getTasks = async function() {
  try {
    let apiUrl = `https://wincacademydatabase.firebaseio.com/ruben/tasks.json`;
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    console.log("The data in getData function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
*/

const postTasks = async function(description, done) {
  fetch("https://wincacademydatabase.firebaseio.com/ruben/tasks.json", {
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({ description: description, done: done })
  })
   
};

const deleteTasks = async function(description, done) {
fetch("https://wincacademydatabase.firebaseio.com/ruben/tasks.json", {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({description: description, done: done})
  })
}
