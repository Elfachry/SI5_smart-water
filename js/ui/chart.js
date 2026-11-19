window.SW = window.SW || {};
SW.renderChart = function (samples) {
  const T = SW.THRESHOLDS;
  const params = [
    {
      key: "ph",
      title: "pH",
      note: "baik 6,5 – 8,5",
      get: (s) => s.ph,
      limits: [T.ph.goodMin, T.ph.goodMax],
      min: 14,
    },
    {
      key: "turbidity",
      title: "Kekeruhan (NTU)",
      note: "baik < 3",
      get: (s) => s.turbidity,
      limits: [T.turbidity.goodMax],
      min: 10,
    },
    {
      key: "tempDiff",
      title: "Selisih suhu air dan udara (°C)",
      note: "baik ≤ 3",
      get: (s) => Math.abs(s.waterTemp - s.airTemp),
      limits: [T.tempDiff.goodMax],
      min: 6,
    },
  ];
  const box = document.getElementById("chart");
  if (!samples.length) {
    box.innerHTML =
      '<p style="color:#666">Grafik muncul setelah ada sampel.</p>';
    return;
  }
  const list = samples
    .slice()
    .sort((a, b) => b.time.localeCompare(a.time))
    .slice(0, 8);
  box.innerHTML = params
    .map((p) => {
      const max = Math.max(p.min, ...list.map(p.get)) * 1.05;
      const pct = (v) => Math.min(100, (v / max) * 100);
      const rows = list
        .map((s) => {
          const st = SW.classify(s)[p.key],
            v = p.get(s);
          return `<div class="bar-row"><span class="bar-label"></span>
        <div class="track"><div class="bar ${st}" style="width:${pct(v)}%"></div>${p.limits.map((l) => `<i class="limit" style="left:${pct(l)}%"></i>`).join("")}</div>
        <span class="bar-val"><span class="dot ${st}"></span>${SW.num(v)}</span></div>`;
        })
        .join("");
      return `<div class="chart-group"><h3>${p.title} <small>garis putus-putus: ${p.note}</small></h3>${rows}</div>`;
    })
    .join("");
  box.querySelectorAll(".bar-label").forEach((el, i) => {
    el.textContent = list[i % list.length].location;
  });
};
