// ==========================
// ESM Mobile App Controller
// ==========================

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then(() => console.log("Service Worker Active"))
      .catch(err => console.log("Service Worker Error:", err));
  });
}


// ==========================
// Initialize App
// ==========================

document.addEventListener("DOMContentLoaded", async () => {

  try {

    await initDB();

    console.log("ESM App Initialized");

    routePage();

  } catch (err) {

    console.error("App Init Failed:", err);

  }

});


// ==========================
// Simple Page Router
// ==========================

function routePage() {

  const path = window.location.pathname;

  if (path.includes("tournament")) loadTournaments();
  else if (path.includes("teams")) loadTeams();
  else if (path.includes("players")) loadPlayers();
  else if (path.includes("matches")) loadMatches();
  else if (path.includes("standings")) loadStandings();
  else if (path.includes("bracket")) loadBracket();
  else if (path.includes("media")) loadMedia();
  else if (path.includes("faqs")) loadFAQs();

}


// ==========================
// TOURNAMENT LOADER (SKELETON)
// ==========================

async function loadTournaments() {

  const data = await getAllRecords("tournaments");

  console.log("Tournaments:", data);

}


// ==========================
// TEAMS LOADER (SKELETON)
// ==========================

async function loadTeams() {

  const data = await getAllRecords("teams");

  console.log("Teams:", data);

}


// ==========================
// PLAYERS LOADER (SKELETON)
// ==========================

async function loadPlayers() {

  const data = await getAllRecords("players");

  console.log("Players:", data);

}


// ==========================
// MATCHES LOADER (SKELETON)
// ==========================

async function loadMatches() {

  const data = await getAllRecords("matches");

  console.log("Matches:", data);

}


// ==========================
// STANDINGS LOADER (SKELETON)
// ==========================

async function loadStandings() {

  const data = await getAllRecords("teams");

  console.log("Standings:", data);

}


// ==========================
// BRACKET LOADER (SKELETON)
// ==========================

async function loadBracket() {

  console.log("Bracket module ready");

}


// ==========================
// MEDIA LOADER (SKELETON)
// ==========================

async function loadMedia() {

  const data = await getAllRecords("media");

  console.log("Media:", data);

}


// ==========================
// FAQ LOADER (SKELETON)
// ==========================

async function loadFAQs() {

  const data = await getAllRecords("faqs");

  console.log("FAQs:", data);

}
