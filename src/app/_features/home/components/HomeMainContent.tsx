import EventAndCalendarPanel from './EventAndCalendarPanel';
import HomeTopImage from './HomeTopImage';
import BasicAndPatchPanel from './notice/BasicAndPatchPanel';

const HomeMainContent = () => {
  return (
    <div className="dark flex flex-1 flex-col gap-2 p-2">
      <HomeTopImage />
      <BasicAndPatchPanel />
      <EventAndCalendarPanel />
    </div>
  );
};

export default HomeMainContent;
