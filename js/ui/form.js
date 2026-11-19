window.SW = window.SW || {};
SW.initForm = function (onAdd) {
  const form = document.getElementById("form");
  const err = document.getElementById("form-error");
  const now = () =>
    new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16);
  const el = form.elements;
  el.time.value = now();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const s = {
      id: Date.now(),
      location: el.location.value.trim(),
      source: el.source.value,
      time: el.time.value,
      ph: parseFloat(el.ph.value),
      turbidity: parseFloat(el.turbidity.value),
      waterTemp: parseFloat(el.waterTemp.value),
      airTemp: parseFloat(el.airTemp.value),
    };
    const msg = SW.validate(s);
    err.textContent = msg;
    if (msg) return;
    onAdd(s);
    form.reset();
    el.time.value = now();
  });
};
