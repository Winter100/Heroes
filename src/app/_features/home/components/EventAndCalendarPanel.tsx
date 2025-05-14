import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import EventPanel from './notice/EventPanel';
import EventCalendar from './calendar/EventCalendar';

const EventAndCalendarPanel = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-col gap-2 lg:flex-row">
        <div className="flex flex-1 flex-col bg-muted/50">
          <EventPanel />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <RoundedContainer className="flex flex-1 bg-muted/50">
            <EventCalendar />
          </RoundedContainer>
        </div>
      </div>
    </div>
  );
};

export default EventAndCalendarPanel;
