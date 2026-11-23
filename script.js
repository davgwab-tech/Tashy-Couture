// Update the WhatsApp number below before publishing. Use country code only, no + or spaces.
const WHATSAPP_NUMBER = "27622529377";
const DEFAULT_MESSAGE = "Hello Tashy Couture, I would like to enquire about a design.";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
