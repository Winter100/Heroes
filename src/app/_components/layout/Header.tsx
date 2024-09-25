import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex h-14 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm">
      <ul className="flex items-center justify-center gap-28 border border-red-600 text-sm">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/preview"}>능력치 미리보기</Link>
        </li>
        <li>
          <Link href={"/"}>문의</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
