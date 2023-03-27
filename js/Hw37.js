document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("http://") && !href.startsWith("https://")) {
      link.setAttribute("href", `https://${href}`);
    }
  });
});
