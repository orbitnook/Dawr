(() => {
  const supportEmail = "hello.dawr@gmail.com";
  const menus = Array.from(document.querySelectorAll("[data-contact-menu]"));

  const setMenuOpen = (menu, open) => {
    const toggle = menu.querySelector(".footer-contact-toggle");
    const popover = menu.querySelector(".contact-popover");

    toggle.setAttribute("aria-expanded", String(open));
    popover.hidden = !open;
    menu.toggleAttribute("data-open", open);
  };

  menus.forEach((menu) => {
    const toggle = menu.querySelector(".footer-contact-toggle");

    toggle.addEventListener("click", () => {
      const shouldOpen = toggle.getAttribute("aria-expanded") !== "true";

      menus.forEach((otherMenu) => setMenuOpen(otherMenu, false));
      setMenuOpen(menu, shouldOpen);
    });
  });

  document.addEventListener("click", (event) => {
    menus.forEach((menu) => {
      if (!menu.contains(event.target)) {
        setMenuOpen(menu, false);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    const openMenu = menus.find(
      (menu) => menu.querySelector(".footer-contact-toggle").getAttribute("aria-expanded") === "true",
    );

    if (openMenu) {
      const toggle = openMenu.querySelector(".footer-contact-toggle");
      setMenuOpen(openMenu, false);
      toggle.focus();
    }
  });

  const copyWithFallback = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(supportEmail);
      return;
    }

    const input = document.createElement("textarea");
    input.value = supportEmail;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();

    if (!copied) {
      throw new Error("Clipboard copy was unavailable");
    }
  };

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    const label = button.querySelector("[data-copy-label]");
    let resetTimer;

    button.addEventListener("click", async () => {
      window.clearTimeout(resetTimer);

      try {
        await copyWithFallback();
        label.textContent = "Copied";
      } catch {
        label.textContent = "Copy failed";
      }

      resetTimer = window.setTimeout(() => {
        label.textContent = "Copy email";
      }, 1800);
    });
  });
})();
