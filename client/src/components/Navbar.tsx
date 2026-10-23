import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onOutsideClick = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navRef.current?.contains(event.target)
      )
        setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutsideClick);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutsideClick);
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen]);

  const closeMenu = (href: string) => {
    setIsOpen(false);
    // Move keyboard focus to the destination after the mobile menu disappears.
    requestAnimationFrame(() =>
      document.querySelector<HTMLElement>(href)?.focus({ preventScroll: true }),
    );
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav
          ref={navRef}
          className="section-shell nav-inner"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="wordmark"
            aria-label="Andrés Gómez Sarmiento, home"
            onClick={() => closeMenu("#hero")}
          >
            Andrés<span className="wordmark-dot">.</span>
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="navigation-links"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
          <div
            id="navigation-links"
            className={`nav-links${isOpen ? " is-open" : ""}`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => closeMenu(link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              className="nav-resume"
              href="/resume.pdf"
              download="Andres-Gomez-Sarmiento-Resume.pdf"
              onClick={() => setIsOpen(false)}
            >
              Résumé <Download size={15} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
