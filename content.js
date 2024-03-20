console.log("removed youtube banner!!");
const cont = document.querySelector("ytd-rich-grid-renderer");
const banner = document.querySelectorAll("#big-yoodle");
banner.forEach(e => cont.removeChild(e));
