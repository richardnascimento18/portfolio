import { Menu } from './components/menu/Menu';

export default function Home() {
  return (
    <div
      className="flex flex-col pt-(--padding-medium) mx-(--margin-container) h-[100vh]"
      id="container"
    >
      <Menu />
      <div className="flex items-center h-[100%]">
        <div className="flex grow">
          <li>hey</li>
        </div>
        <div className="w-[2px] h-[680px] bg-primary-700 rounded-(--radius-app)"></div>
        <div className="flex grow"></div>
      </div>
    </div>
  );
}
