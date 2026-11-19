window.SW = window.SW || {};
SW.RANK = { baik: 0, waspada: 1, buruk: 2 };
SW.classify = function (s) {
  const T = SW.THRESHOLDS;
  const diff = Math.abs(s.waterTemp - s.airTemp);
  const ph =
    s.ph >= T.ph.goodMin && s.ph <= T.ph.goodMax
      ? "baik"
      : s.ph >= T.ph.warnMin && s.ph <= T.ph.warnMax
        ? "waspada"
        : "buruk";
  const turbidity =
    s.turbidity < T.turbidity.goodMax
      ? "baik"
      : s.turbidity <= T.turbidity.warnMax
        ? "waspada"
        : "buruk";
  const tempDiff =
    diff <= T.tempDiff.goodMax
      ? "baik"
      : diff <= T.tempDiff.warnMax
        ? "waspada"
        : "buruk";
  const overall = [ph, turbidity, tempDiff].reduce(
    (w, x) => (SW.RANK[x] > SW.RANK[w] ? x : w),
    "baik",
  );
  return { ph, turbidity, tempDiff, diff, overall };
};
