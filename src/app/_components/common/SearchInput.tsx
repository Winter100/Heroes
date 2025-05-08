import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ComponentProps } from 'react';

const SearchInput = ({ ...props }: ComponentProps<'input'>) => {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5" size={15} />
      <Input
        tabIndex={-1}
        autoFocus={false}
        type="search"
        className="pl-8 text-xs"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
