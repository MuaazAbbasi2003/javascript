// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

// Use setTimeout to simulate this behaviour.

function simulateAsyncTask() {
  return new Promise((resolve, reject) => {
    console.log("Task started");
    let state = true;
    if (state === true) {
      setTimeout(() => {
        resolve(() => {
          return 2 * "2";
        });
      }, 2000);
    } else {
      setTimeout(() => {
        reject("the task cannot be completed ");
      }, 2000);
    }
  });
}
async function runTask() {
  try {
    const hello = await simulateAsyncTask();
    console.log("resolved", hello());
  } catch (error) {
    console.log("Rejected:", err);
  }
}
runTask();

//   .then((obj) => {
//     console.log("Resolved:", obj());
//   })
//   .catch((err) => {
//     console.log("Rejected:", err);
//   });

// function simulateMultipleTasks() {
// }
// function fetchDataWithCallback(callback) {
// }
