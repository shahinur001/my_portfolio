/* ====== RENDERING & UI LOGIC ====== */
const $ = s => document.querySelector(s), 
      esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const S = DATA.social;
const links = [["Email", "mailto:" + S.email], ["LinkedIn", S.linkedin], ["GitHub", S.github]].filter(l => l[1]);
const sl = links.map(([n, u]) => `<a href="${esc(u)}" ${u.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${n}</a>`).join("");

$("#social").innerHTML = sl; 
$("#fsocial").innerHTML = sl;

$("#cl").innerHTML = `<div>Email: <a href="mailto:${esc(S.email)}">${esc(S.email)}</a></div><div>Phone: <a href="tel:${esc(S.phone)}">${esc(S.phone)}</a></div>` + links.slice(1).map(([n, u]) => `<div>${n}: <a href="${esc(u)}" target="_blank" rel="noopener">${esc(u.replace("https://", ""))}</a></div>`).join("");

if (DATA.profile.photo) { 
  const p = $("#photo"); 
  p.style.backgroundImage = `url(${DATA.profile.photo})`; 
  p.textContent = ""; 
}

$("#stats").innerHTML = DATA.stats.map(([a, b]) => `<div class="card stat"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("");
$("#skillGrid").innerHTML = DATA.skills.map(k => `<div class="card"><h3>${esc(k.t)}</h3>${k.i.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>`).join("");

const tl = a => a.map(e => `<div class="item card"><h3 style="margin:0 0 4px;font-size:18px">${esc(e.t)}</h3><p class="meta">${esc(e.o)} · ${esc(e.d)}</p><ul>${e.p.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
$("#tl").innerHTML = tl(DATA.experience); 
$("#edu").innerHTML = tl(DATA.education);

$("#projGrid").innerHTML = DATA.projects.map((p, i) => `<article class="card proj"><div class="cat">${esc(p.c)}</div><h3>${esc(p.n)}</h3><p>${esc(p.d)}</p><div>${p.s.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div><div class="row"><button class="btn" data-i="${i}">View details</button>${p.github ? `<a class="btn" href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}${p.demo ? `<a class="btn" href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo</a>` : ""}</div></article>`).join("");

$("#projGrid").addEventListener("click", e => {
  const b = e.target.closest("button[data-i]"); 
  if (!b) return; 
  const p = DATA.projects[b.dataset.i];
  $("#dlgBody").innerHTML = `<div class="cat" style="color:var(--accent);font-weight:600;font-size:13px">${esc(p.c)}</div><h3 style="margin:4px 0 12px;font-size:22px">${esc(p.n)}</h3><p style="color:var(--muted)">${esc(p.d)}</p>${p.s.map(x => `<span class="tag">${esc(x)}</span>`).join("")}`; 
  $("#dlg").showModal();
});

$("#dlgClose").onclick = () => $("#dlg").close();
$("#yr").textContent = new Date().getFullYear();

/* theme */
const root = document.documentElement, tb = $("#theme");
function setTheme(t) { 
  root.dataset.theme = t; 
  tb.textContent = t === "dark" ? "☾" : "☀"; 
  try { localStorage.setItem("theme", t) } catch (e) { } 
}
let saved = null; 
try { saved = localStorage.getItem("theme") } catch (e) { }
setTheme(saved || "dark"); 
tb.onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

/* mobile menu */
const m = $("#menu"), ls = $("#links");
m.onclick = () => { 
  const o = ls.classList.toggle("open"); 
  m.setAttribute("aria-expanded", o); 
};
ls.addEventListener("click", e => { 
  if (e.target.tagName === "A") { 
    ls.classList.remove("open"); 
    m.setAttribute("aria-expanded", false); 
  } 
});