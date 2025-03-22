import DividerComponent from './Divider';
import LeftSideComponent from './LeftSide';
import ProfileComponent from './Profile';
import ProfileDescriptionComponent from './ProfileDescription';
import RightSideComponent from './RightSide';
import TitleComponent from './Title';

export default function HomeComponent() {
  return (
    <div className="flex items-center justify-items-start h-[100%] w-(--container-width)">
      <div className="flex flex-row w-[100%] items-center justify-evenly">
        <div className="flex flex-col grow items-center">
          <ProfileComponent />
          <ProfileDescriptionComponent />
        </div>
        <DividerComponent />
        <div className="flex flex-col items-center grow justify-center">
          <TitleComponent />
          <div className="flex flex-row w-[850px]">
            <LeftSideComponent />
            <RightSideComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
