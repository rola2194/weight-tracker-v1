//#region initialization firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, push, onValue, set, remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://weight-app-7974f-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, 'weights');
//#endregion
const decine = document.getElementById('touchCounter-1');
const unità = document.getElementById('touchCounter-2');
const decimi = document.getElementById('touchCounter-3');


// Set initial data

// event listeners
const saveBtn = document.querySelector('.save-btn');
const dateBtn = document.querySelector('.date-btn');

saveBtn.addEventListener('click', () => {
  const today = dateBtn.textContent;
  const dbSpecificPath = ref(db, 'weights/' + today);
  const weight = Number(decine.textContent + unità.textContent + '.' + decimi.textContent);
  set(dbSpecificPath, weight);
});

// Listen for changes
let listeners = [];
let latestData = [];
onValue(dbRef, (snapshot) => {
  const data = snapshot.val();
  const dates = [];
  const weights = [];
  
  
  for (const [key, value] of Object.entries(data)) {
    dates.push(key);
    weights.push(value);
  }
  latestData = [dates, weights];
  for (const listener of listeners) {
    listener(dates, weights);
  }
});

export { listeners, latestData };
