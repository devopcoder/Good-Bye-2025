fetch("data/memories-2025.json").then(r=>r.json()).then(d=>render(d));
function render(m){const t=document.getElementById("timeline");t.innerHTML="";
m.forEach(x=>{const d=document.createElement("div");d.className="memory";
d.innerHTML=`<h3>${x.title}</h3><small>${x.date} • ${x.category}</small><p>${x.content}</p>`;t.appendChild(d)});
document.getElementById("search").oninput=e=>render(m.filter(x=>x.title.toLowerCase().includes(e.target.value)||x.content.toLowerCase().includes(e.target.value)));}