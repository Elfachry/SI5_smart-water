(function () {
  let samples = SW.load();
  function render() {
    SW.renderSummary(samples);
    SW.renderChart(samples);
    SW.renderTable(samples, (id) => {
      samples = samples.filter((s) => s.id !== id);
      SW.save(samples);
      render();
    });
  }
  SW.initForm((s) => {
    samples.push(s);
    SW.save(samples);
    render();
  });
  render();
})();
