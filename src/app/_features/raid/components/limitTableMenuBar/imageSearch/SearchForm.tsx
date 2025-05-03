import Loading from '@/app/_components/common/Loading';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { SearchFormProps } from '../../../types';

const SearchForm = ({
  submitHandler,
  loading,
  onChange,
  searchValue,
}: SearchFormProps) => {
  return (
    <form
      id="search"
      onSubmit={submitHandler}
      className="flex h-8 w-full items-center justify-center rounded-lg pl-2"
    >
      <Input
        onChange={onChange}
        spellCheck="false"
        disabled={loading}
        className="text-xs"
        placeholder="캐릭터 이름을 확인해주세요."
        value={searchValue}
      />
      <button
        disabled={loading}
        type="submit"
        className={`flex h-full w-6 items-center justify-center`}
      >
        {!loading ? <Search size={15} /> : <Loading />}
      </button>
    </form>
  );
};

export default SearchForm;
