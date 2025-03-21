import { LanguageChevron } from './LanguageChevron';

export function Menu() {
  return (
    <div className="flex">
      <div className="flex grow justify-center">
        <ul className="flex flex-row font-inter text-primary-50 font-semibold text-2xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer mx-(--margin-medium)">Portfolio</li>
          <li className="cursor-pointer">Contact Me</li>
        </ul>
      </div>
      <LanguageChevron />
    </div>
  );
}
