document.querySelectorAll(".sitewindow-trigger").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.window;

    document.querySelectorAll(".sitewindow-window")
      .forEach(w => w.classList.remove("active"));

    document.querySelector(".sitewindow-overlay").classList.add("active");
    document.getElementById(id).classList.add("active");
  });
});

function sitewindowCloseAll() {
  document.querySelectorAll(".sitewindow-window")
    .forEach(w => w.classList.remove("active"));

  document.querySelector(".sitewindow-overlay")
    .classList.remove("active");
}

document.querySelector(".sitewindow-overlay")
  .addEventListener("click", sitewindowCloseAll);

document.querySelectorAll(".sitewindow-btn-close, .sitewindow-btn-back")
  .forEach(el => el.addEventListener("click", sitewindowCloseAll));
  
document.querySelector(".sitewindow-trigger-jumptop")
  .addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

document.querySelector(".sitewindow-trigger-jumpbottom")
  .addEventListener("click", () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  );

function loadFontSize() {
  const size = localStorage.getItem("sitewindow-fontsize");
  if (size) {
    document.documentElement.style.setProperty("--sitewindow-fontsize", size);
  }
}
loadFontSize();

document.querySelector(".sitewindow-trigger-font")
  .addEventListener("click", () => {
    let current = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--sitewindow-fontsize")
    );

    let next = current + 0.2;
    if (next > 2.2) next = 1; 

    const newSize = next + "rem";
    document.documentElement.style.setProperty("--sitewindow-fontsize", newSize);
    localStorage.setItem("sitewindow-fontsize", newSize);
  });

function loadTheme() {
  const saved = localStorage.getItem("sitewindow-theme");
  const body = document.body;
  const icon = document.querySelector(".sitewindow-trigger-theme i");

  if (saved === "light") {
    body.setAttribute("data-theme", "light");
    icon.classList.remove("ri-lightbulb-line");
    icon.classList.add("ri-lightbulb-fill");
  } else {
    body.removeAttribute("data-theme");
    icon.classList.remove("ri-lightbulb-fill");
    icon.classList.add("ri-lightbulb-line");
  }
}
loadTheme();

document.querySelector(".sitewindow-trigger-theme")
  .addEventListener("click", () => {
    const body = document.body;
    const icon = document.querySelector(".sitewindow-trigger-theme i");

    if (body.getAttribute("data-theme") === "light") {
      body.removeAttribute("data-theme");
      icon.classList.remove("ri-lightbulb-fill");
      icon.classList.add("ri-lightbulb-line");
      localStorage.setItem("sitewindow-theme", "dark");
    } else {
      body.setAttribute("data-theme", "light");
      icon.classList.remove("ri-lightbulb-line");
      icon.classList.add("ri-lightbulb-fill");
      localStorage.setItem("sitewindow-theme", "light");
    }
  });
