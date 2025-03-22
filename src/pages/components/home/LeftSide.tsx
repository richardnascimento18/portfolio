export default function LeftSideComponent() {
  return (
    <ul id="left-side">
      <li className="list-primary">
        <span> - </span>18 years old
      </li>
      <li className="list-primary">
        <span> - </span>Seniority: Junior
      </li>
      <li className="list-primary">
        <span> - </span>Some technologies I work with:
        <ul className="flex flex-row flex-wrap">
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/Javascript.svg" alt="" />
          </li>
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/TypeScript.svg" alt="" />
          </li>
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/Nodejs.svg" alt="" />
          </li>
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/React.svg" alt="" />
          </li>
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/Nextjs.svg" alt="" />
          </li>
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/TailwindCSS.svg" alt="" />
          </li>
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/HTML5.svg" alt="" />
          </li>
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/CSS3.svg" alt="" />
          </li>
          <li className="mr-(--margin-default) mt-(--margin-default)">
            <img src="/icons/technologies/Git.svg" alt="" />
          </li>
        </ul>
      </li>
    </ul>
  );
}
