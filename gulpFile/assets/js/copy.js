const notification = document.getElementById('notification');

function showNotification() {
  notification.classList.add("active");
  setTimeout(() => {
    notification.classList.remove("active");
  }, 1500);
}

var clipboard = new ClipboardJS('.btn');

clipboard.on("success", function(e) {
  showNotification();
  e.clearSelection();
});
