window.SW = window.SW || {};
/** 
 * Batas baik: Permenkes No. 2 Tahun 2023.
 * Batas waspada: sementara, kemudian disepakati tim Matematika dan Statistika.
 */  

SW.THRESHOLDS = {
  ph: { goodMin: 6.5, goodMax: 8.5, warnMin: 6.0, warnMax: 9.0 },
  turbidity: { goodMax: 3, warnMax: 5 },
  tempDiff: { goodMax: 3, warnMax: 5 },
};
