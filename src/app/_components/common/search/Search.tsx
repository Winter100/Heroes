import { FormEvent, RefObject, useState } from "react";
import { GoSearch } from "react-icons/go";

import Row from "../../layout/Row";
import Input from "../Input";
import Loading from "../Loading";

interface SearchProps {
  loading?: boolean;
  className?: string;
  onSubmit: (e: FormEvent) => void;
  placeholder: string;
  inputRef: RefObject<HTMLInputElement>;
}

const Search = ({
  loading = false,
  onSubmit,
  className = "",
  placeholder = "",
  inputRef,
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Row
      className={`${isFocused ? "border-blue-300" : "border-borderColor"} ${loading ? "bg-backgroundTwo" : ""} h-8 gap-1 rounded-lg border text-sm ${className}`}
    >
      <form id="search" onSubmit={onSubmit} className="flex h-full w-full pl-2">
        <Input
          spellCheck="false"
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="h-full w-full flex-1 border-none bg-inherit text-xs text-inherit outline-none"
          placeholder={placeholder}
          disabled={loading}
        />
        <button
          disabled={loading}
          type="submit"
          className={`flex h-full w-6 items-center justify-center`}
        >
          {!loading ? <GoSearch /> : <Loading />}
        </button>
      </form>
    </Row>
  );
};

export default Search;
// import { RefObject, useState } from "react";
// import { GoSearch } from "react-icons/go";

// import Row from "../../layout/Row";
// import Input from "../Input";
// import Loading from "../Loading";

// interface SearchProps {
//   loading: boolean;
//   className?: string;
//   onSubmit: () => void;
//   inputRef: RefObject<HTMLInputElement>;
//   placeholder: string;
// }

// const Search = ({
//   inputRef,
//   loading = false,
//   onSubmit,
//   className = "",
//   placeholder = "",
// }: SearchProps) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <Row
//       className={`${isFocused ? "border-blue-300" : "border-borderColor"} ${loading ? "bg-backgroundTwo" : ""} h-8 gap-1 rounded-lg border text-sm shadow-sm outline-blue-300 ${className}`}
//     >
//       <form id="search" onSubmit={onSubmit} className="flex h-full w-full pl-2">
//         <Input
//           spellCheck="false"
//           ref={inputRef}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className="h-full w-full flex-1 border-none bg-inherit text-[10px] outline-none md:text-xs"
//           placeholder={placeholder}
//           disabled={loading}
//         />
//         <button
//           disabled={loading}
//           type="submit"
//           className={`flex h-full w-6 items-center justify-center`}
//         >
//           {!loading ? <GoSearch /> : <Loading />}
//         </button>
//       </form>
//     </Row>
//   );
// };

// export default Search;
