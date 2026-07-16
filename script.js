const filterButtons = document.querySelectorAll("[data-filter]");
const accessCards = document.querySelectorAll(".access-card");
const copyButtons = document.querySelectorAll("[data-copy]");
const toast = document.querySelector(".toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    accessCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !isVisible);
    });
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const link = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(link);
      showToast("Link copied");
    } catch {
      showToast("Copy unavailable");
    }
  });
});
