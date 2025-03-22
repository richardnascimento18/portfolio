import HomeComponent from './components/home/Home';
import { MenuComponent } from './components/menu/Menu';

export default function Home() {
  return (
    <div
      className="flex flex-col pt-(--padding-medium) mx-(--margin-container) h-[100vh]"
      id="container"
    >
      <MenuComponent />
      <HomeComponent />
    </div>
  );
}
