function tableCreate() {
  const body = document.createElement("body");
  const tbl = document.createElement("table");
  tbl.style.borderCollapse = "collapse";
  tbl.style.width = "30%";

  let number = 1;
  for (let i = 0; i < 10; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < 8; j++) {
      if (number <= 76) {
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(number));
        td.style.border = "1px solid black";
        td.style.padding = "8px";
        td.style.textAlign = "center";
        number++;
      }
    }
  }

  body.appendChild(tbl);
  document.body.appendChild(body);
}

tableCreate();
