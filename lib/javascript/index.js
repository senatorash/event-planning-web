document.querySelectorAll("header nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the target page ID
    const pageId = link.getAttribute("href");

    // Scroll to the target page
    document.querySelector(pageId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
