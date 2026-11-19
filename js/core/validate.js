window.SW = window.SW || {};
SW.validate = function (s) {
  if (!s.location) return "Lokasi wajib diisi.";
  if (!s.time) return "Waktu wajib diisi.";
  const nums = [s.ph, s.turbidity, s.waterTemp, s.airTemp];
  if (nums.some((n) => !Number.isFinite(n)))
    return "Semua nilai pengukuran harus berupa angka.";
  if (s.ph < 0 || s.ph > 14) return "pH harus antara 0 dan 14.";
  if (s.turbidity < 0) return "Kekeruhan tidak boleh negatif.";
  if (s.waterTemp < -5 || s.waterTemp > 60 || s.airTemp < -5 || s.airTemp > 60)
    return "Suhu di luar rentang wajar (-5 sampai 60 °C).";
  return "";
};
