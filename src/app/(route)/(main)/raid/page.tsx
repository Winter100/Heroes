import BasicContainer from '@/app/_components/layout/BasicContainer';
import { LimitTable, LimitTableMenuBar } from '@/app/_features/raid';

const Page = () => {
  return (
    <BasicContainer className="flex-1 gap-2">
      <LimitTableMenuBar />
      <LimitTable />
    </BasicContainer>
  );
};
export default Page;
