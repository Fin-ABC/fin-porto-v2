const bmenu = document.getElementById("btn-menu");
const bclose = document.getElementById("btn-close");
const bd = document.getElementById("body");
const hd = document.getElementById("header");

bmenu.addEventListener("click", () => {
  navigasi("menu");
});

bclose.addEventListener("click", () => {
  navigasi("close");
});

function navigasi(nav) {
  if (nav === "menu") {
    deleteClass(hd, "mobile");
    deleteClass(bd, "navigasi");
    insertClass(bd, "normal");
    insertClass(bmenu, "hidden");
    deleteClass(bclose, "hidden");
  } else {
    insertClass(hd, "mobile");
    insertClass(bd, "navigasi");
    deleteClass(bd, "normal");
    insertClass()
  }
}

function insertClass(component, status) {
  com.classList.add(status);
}
function deleteClass(component, status) {
  com.classList.remove(status);
}


