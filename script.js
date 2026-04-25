const SERVER_IP = "luyalsmp.enderman.cloud:45844";

async function checkStatus() {
  const statusEl = document.getElementById("status");
  const playersEl = document.getElementById("players");

  try {
    const res = await fetch(`https://api.mcsrvstat.us/bedrock/2/${SERVER_IP}`);
    const data = await res.json();

    if (data.online) {
      statusEl.textContent = "🟢 Online";
      playersEl.textContent = `Players: ${data.players.online} / ${data.players.max}`;
    } else {
      statusEl.textContent = "🔴 Offline";
    }
  } catch {
    statusEl.textContent = "Error";
  }
}

function copyIP() {
  navigator.clipboard.writeText(SERVER_IP);
  alert("IP copied!");
}

checkStatus();
setInterval(checkStatus, 30000);
