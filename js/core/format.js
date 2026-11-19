window.SW = window.SW || {};
SW.LABEL = { baik: "Baik", waspada: "Waspada", buruk: "Buruk" };
SW.num = (n) => Number(n).toLocaleString("id-ID", { maximumFractionDigits: 1 });
SW.date = (t) =>
  new Date(t).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
