import DividerComponent from './Divider';
import ProfileComponent from './Profile';
import ProfileDescriptionComponent from './ProfileDescription';

export default function HomeComponent() {
  return (
    <div className="flex items-center h-[100%] w-(--container-width)">
      <div className="flex flex-col items-center w-[42%]">
        <ProfileComponent />
        <ProfileDescriptionComponent />
      </div>
      <DividerComponent />
      <div className="flex grow"></div>
    </div>
  );
}
