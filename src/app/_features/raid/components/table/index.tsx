import dynamic from 'next/dynamic';
import LimitTableHead from './LimitTableHead';
import { Table } from '@/components/ui/table';

const LimitTableBody = dynamic(() => import('./LimitTableBody'), {
  ssr: false,
});

const RaidLimitUserTable = () => {
  return (
    <Table className="table-fixed caption-top">
      <caption className="hidden">캐릭터 리스트</caption>
      <LimitTableHead />
      <LimitTableBody />
    </Table>
  );
};

export default RaidLimitUserTable;
