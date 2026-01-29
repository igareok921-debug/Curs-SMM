import phoneIcon from "../assets/el_phone-alt.svg?v=2";

export function ScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-2">
      <a
        href="https://forms.gle/sVCxfXV3WMkLzeRu6"
        target="_blank"
        rel="noreferrer"
        aria-label="Înscriere rapidă"
        className="btn-pulse grid h-14 w-14 place-items-center rounded-full border border-burgundy/15 bg-white text-burgundy shadow-[0_14px_30px_rgba(84,45,45,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
      >
        <img src={phoneIcon} alt="" className="h-14 w-14" />
      </a>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Mergi sus"
          className="grid h-11 w-11 place-items-center rounded-full border border-burgundy/20 bg-white/90 text-burgundy shadow-[0_10px_24px_rgba(84,45,45,0.18)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 14l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={scrollToBottom}
          aria-label="Mergi jos"
          className="grid h-11 w-11 place-items-center rounded-full border border-burgundy/20 bg-white/90 text-burgundy shadow-[0_10px_24px_rgba(84,45,45,0.18)] backdrop-blur transition hover:translate-y-0.5 hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 10l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
