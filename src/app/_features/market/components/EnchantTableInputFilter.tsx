'use client';
import { GrRefresh } from 'react-icons/gr';
import Row from '@/app/_components/layout/Row';
import { Button } from '@/components/ui/button';
import Search from '@/app/_components/common/search/Search';
import EnchantDropListFilterDialog from './dialog/EnchantDropListFilterDialog';
import { FormEvent, RefObject } from 'react';

interface EnchantTableInputFilterProps {
  inputRef: RefObject<HTMLInputElement>;
  onSearch: (e: FormEvent) => void;
  onReset: () => void;
}

const EnchantTableInputFilter = ({
  inputRef,
  onReset,
  onSearch,
}: EnchantTableInputFilterProps) => {
  return (
    <Row className="mt-2 flex h-8 items-center justify-center gap-1 rounded-md text-xs text-white">
      <Search
        maxLength={10}
        className="w-full px-2"
        onSubmit={onSearch}
        inputRef={inputRef}
        placeholder="인챈트를 입력해주세요."
      />
      <Button className="w-12 sm:w-20" variant="outline" onClick={onReset}>
        <GrRefresh />
      </Button>
      <EnchantDropListFilterDialog />
    </Row>
  );
};

export default EnchantTableInputFilter;
