window.SW = window.SW || {};
SW.KEY = "smartwater.samples";
SW.load = function () {
  try {
    return JSON.parse(localStorage.getItem(SW.KEY)) || [];
  } catch (e) {
    return [];
  }
};
SW.save = function (list) {
  try {
    localStorage.setItem(SW.KEY, JSON.stringify(list));
  } catch (e) {
    alert("Data gagal disimpan di browser.");
  }
};
