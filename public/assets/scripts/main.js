document.addEventListener("DOMContentLoaded", function() {
    const bellIcon = document.querySelector(".navbar a .fa-bell");
    const notifications = document.getElementById("notificaciones");

    bellIcon.addEventListener("click", function(e) {
        e.preventDefault();
        notifications.style.display = notifications.style.display === "none" || notifications.style.display === "" ? "block" : "none";
    });

    document.addEventListener("click", function(e) {
        if (!notifications.contains(e.target) && e.target !== bellIcon) {
            notifications.style.display = "none";
        }
    });
});