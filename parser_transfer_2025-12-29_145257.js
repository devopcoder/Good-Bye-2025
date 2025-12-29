function process(){
const r=document.getElementById("raw").value;
const m={date:new Date().toISOString().split("T")[0],title:r.split("\n")[0].slice(0,40)||"Untitled",category:detect(r),content:r.slice(0,500),tags:r.split(" ").slice(0,5)};
document.getElementById("output").textContent=JSON.stringify(m,null,2);}
function detect(t){if(t.includes("function")||t.includes("code"))return"Project";if(t.includes("iyak"))return"Personal";return"Memory";}