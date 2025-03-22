export default function RightSideComponent() {
  return (
    <ul id="right-side" className="ml-(--margin-big)">
      <li className="list-primary">
        <span> - </span>Location: São Paulo - SP, Brazil
      </li>
      <li className="list-primary">
        <span> - </span>Contact me at:
        <ul>
          <li className="list-primary flex ml-(--margin-xxsv2)">
            <img src="/icons/email.svg" alt="" className="mr-[8px]" />
            juniordomingos1980@gmail.com
          </li>
        </ul>
      </li>
      <div id="buttons" className="mt-(--margin-xmedium)">
        <li className="flex list-primary cursor-pointer">
          CHECK OUT MY PORTFOLIO
          <img src="/icons/arrow-right.svg" alt="" className="ml-[8px]" />
        </li>
        <li className="flex">
          <button className="flex btn-primary">
            <img
              src="/icons/download.svg"
              alt=""
              className="mr-(--margin-xxs)"
            />
            CV EN
          </button>
          <button className="flex btn-primary ml-(--margin-xs)">
            <img
              src="/icons/download.svg"
              alt=""
              className="mr-(--margin-xxs)"
            />
            CV PT
          </button>
        </li>
      </div>
    </ul>
  );
}
