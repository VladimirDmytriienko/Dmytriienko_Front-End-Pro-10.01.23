const table = document.createElement("table");
document.body.append(table);
for (let i = 0; i < 10; i++) {
  const tr = document.createElement("tr");
  table.append(tr);
  for (let i = 0; i < 10; i++) {
    const td = document.createElement("td");
    tr.append(td);
  }
}

////////////////////////////////////////////////////
const randomNum = Math.floor(Math.random() * 10) + 1;
const randomPic = String(randomNum) + ".jpg";

const img = document.createElement("img");
img.src = `./img/35-36 Hw/${randomPic}`;

document.body.appendChild(img);
