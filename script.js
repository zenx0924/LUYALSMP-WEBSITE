const SERVER_IP = "luyalsmp.enderman.cloud:45844";

async function checkStatus() {
  const statusEl = document.getElementById("status");
  const playersEl = document.getElementById("players");

  if (!statusEl) return;

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

/* PARTICLES */
const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 1
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#22c55e";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  update();
}

function update() {
  particles.forEach(p => {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 33);
