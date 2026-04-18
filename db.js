// ==========================
// ESM Mobile Database System
// IndexedDB Core Controller
// ==========================

const DB_NAME = "esmDatabase";
const DB_VERSION = 1;

let dbInstance = null;


// ==========================
// Initialize Database
// ==========================

function initDB() {

  return new Promise((resolve, reject) => {

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = function (event) {

      const db = event.target.result;

      // Tournament Store
      if (!db.objectStoreNames.contains("tournaments")) {
        db.createObjectStore("tournaments", { keyPath: "id" });
      }

      // Teams Store
      if (!db.objectStoreNames.contains("teams")) {
        db.createObjectStore("teams", { keyPath: "id" });
      }

      // Players Store
      if (!db.objectStoreNames.contains("players")) {
        db.createObjectStore("players", { keyPath: "id" });
      }

      // Matches Store
      if (!db.objectStoreNames.contains("matches")) {
        db.createObjectStore("matches", { keyPath: "id" });
      }

      // Media Store
      if (!db.objectStoreNames.contains("media")) {
        db.createObjectStore("media", { keyPath: "id" });
      }

      // FAQs Store
      if (!db.objectStoreNames.contains("faqs")) {
        db.createObjectStore("faqs", { keyPath: "id" });
      }

    };


    request.onsuccess = function (event) {

      dbInstance = event.target.result;

      console.log("ESM Database initialized");

      resolve(dbInstance);

    };


    request.onerror = function (event) {

      console.error("Database error:", event.target.error);

      reject(event.target.error);

    };

  });

}



// ==========================
// Add Record
// ==========================

function addRecord(storeName, record) {

  return new Promise((resolve, reject) => {

    const transaction =
      dbInstance.transaction([storeName], "readwrite");

    const store = transaction.objectStore(storeName);

    const request = store.add(record);

    request.onsuccess = () => resolve(true);

    request.onerror = () => reject(request.error);

  });

}



// ==========================
// Get All Records
// ==========================

function getAllRecords(storeName) {

  return new Promise((resolve, reject) => {

    const transaction =
      dbInstance.transaction([storeName], "readonly");

    const store = transaction.objectStore(storeName);

    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);

    request.onerror = () => reject(request.error);

  });

}



// ==========================
// Update Record
// ==========================

function updateRecord(storeName, record) {

  return new Promise((resolve, reject) => {

    const transaction =
      dbInstance.transaction([storeName], "readwrite");

    const store = transaction.objectStore(storeName);

    const request = store.put(record);

    request.onsuccess = () => resolve(true);

    request.onerror = () => reject(request.error);

  });

}



// ==========================
// Delete Record
// ==========================

function deleteRecord(storeName, id) {

  return new Promise((resolve, reject) => {

    const transaction =
      dbInstance.transaction([storeName], "readwrite");

    const store = transaction.objectStore(storeName);

    const request = store.delete(id);

    request.onsuccess = () => resolve(true);

    request.onerror = () => reject(request.error);

  });

          }
