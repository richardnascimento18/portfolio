export default function ProfileDescriptionComponent() {
  return (
    <div className="flex flex-col w-[415px] mt-(--margin-medium)">
      <h1 className="font-inter font-bold text-primary-50 text-4xl text-center">
        Hello, my name is <span>Richard.</span>
      </h1>
      <p className="font-normal text-xl text-[#CCCCCC] mt-(--margin-xs)">
        Short description below, about 3 lines talking about my life and who I
        am, in short just a paragraph.
      </p>
      <div className="flex justify-center mt-(--margin-big)">
        <button className="flex btn-primary mr-(--margin-xmedium)">
          <img src="/icons/linkedin.svg" alt="" className="mr-(--margin-xxs)" />
          LinkedIn
        </button>
        <button className="flex btn-primary">
          <img src="/icons/github.svg" alt="" className="mr-(--margin-xxs)" />
          GitHub
        </button>
      </div>
    </div>
  );
}
