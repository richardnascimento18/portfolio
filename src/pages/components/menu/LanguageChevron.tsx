export function LanguageChevronComponent() {
  return (
    <div id="chevron" className="cursor-pointer">
      <p className="flex text-primary-50 font-bold text-base">
        English
        <img
          src="/icons/chevron-down.svg"
          alt=""
          className="ml-(--margin-xxs)"
        />
      </p>
    </div>
  );
}
