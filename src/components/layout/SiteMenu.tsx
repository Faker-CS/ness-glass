"use client";

import { useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { contact, mainNav, primaryCta } from "@/data/site";

const roundButtonClasses =
  "flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brand/51 text-snow backdrop-blur-button transition-colors duration-200 hover:bg-brand/70";

/**
 * Hamburger button (Figma "arrow 5", 31:4490) and the menu it opens. The menu is not
 * designed in Figma (PROGRESS.md, A4): a modal <dialog> gives focus trapping, Escape
 * to close and focus return for free.
 */
export function SiteMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className={roundButtonClasses}
        aria-label="Ouvrir le menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={show}
      >
        <MenuIcon className="size-9.25" />
      </button>

      <dialog
        ref={dialogRef}
        id="site-menu"
        aria-label="Menu principal"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // A click on the backdrop targets the dialog element itself.
          if (event.target === event.currentTarget) close();
        }}
        className="m-0 ml-auto h-dvh max-h-none w-full max-w-md overflow-y-auto bg-glow-hero text-snow backdrop:bg-black/60 backdrop:backdrop-blur-marquee"
      >
        <div className="flex min-h-full flex-col gap-10 px-6 pt-6 pb-10 sm:px-10">
          <div className="flex justify-end">
            <button type="button" className={roundButtonClasses} aria-label="Fermer le menu" onClick={close}>
              <CloseIcon className="size-9.25" />
            </button>
          </div>

          <nav aria-label="Sections de la page">
            <ul className="flex flex-col gap-4">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="font-display text-lead font-bold uppercase transition-colors duration-200 hover:text-brand-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col items-start gap-4">
            <ButtonLink href={primaryCta.href} onClick={close}>
              {primaryCta.label}
            </ButtonLink>
            <a href={contact.phoneHref} className="hover:text-brand-cyan">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-brand-cyan">
              {contact.email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
