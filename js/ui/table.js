window.SW = window.SW || {};
SW.renderTable = function (samples, onDelete) {
  const body = document.getElementById("table-body");
  document.getElementById("empty").hidden = samples.length > 0;
  body.innerHTML = "";
  samples
    .slice()
    .sort((a, b) => b.time.localeCompare(a.time))
    .forEach((s) => {
      const c = SW.classify(s);
      const tr = document.createElement("tr");
      const cell = (text, status) => {
        const td = document.createElement("td");
        if (status) {
          const d = document.createElement("span");
          d.className = "dot " + status;
          td.appendChild(d);
        }
        td.appendChild(document.createTextNode(text));
        tr.appendChild(td);
        return td;
      };
      cell(`${s.location} (${s.source})`);
      cell(SW.date(s.time));
      cell(SW.num(s.ph), c.ph);
      cell(SW.num(s.turbidity) + " NTU", c.turbidity);
      cell(SW.num(c.diff) + " °C", c.tempDiff);
      cell(SW.LABEL[c.overall], c.overall).className = "badge";
      const td = document.createElement("td");
      const btn = document.createElement("button");
      btn.className = "delete";
      btn.textContent = "Hapus";
      btn.addEventListener("click", () => onDelete(s.id));
      td.appendChild(btn);
      tr.appendChild(td);
      body.appendChild(tr);
    });
};
