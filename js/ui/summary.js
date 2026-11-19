window.SW = window.SW || {};
SW.renderSummary = function (samples) {
  const c = { baik: 0, waspada: 0, buruk: 0 };
  samples.forEach((s) => c[SW.classify(s).overall]++);
  const box = (cls, label, n) =>
    `<div class="stat ${cls}"><b>${n}</b><span>${label}</span></div>`;
  document.getElementById("summary").innerHTML =
    box("", "Total sampel", samples.length) +
    box("baik", "Baik", c.baik) +
    box("waspada", "Waspada", c.waspada) +
    box("buruk", "Buruk", c.buruk);
};
