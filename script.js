const api = "https://realtime-weather-api-1.onrender.com/data";

async function fetchData() {
  try {
    const res = await fetch(api);
    const data = await res.json();
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("output").textContent = "Error fetching data: " + err;
  }
}

function downloadCSV() {
  window.location.href = "https://raw.githubusercontent.com/vohonghai/RealTime-and-Save-API/main/data.csv";
}

// Initial fetch
fetchData();

// Update every 5 seconds
setInterval(fetchData, 5000);
