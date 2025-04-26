import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="flex h-16 w-full flex-col items-center justify-center gap-1 bg-background py-1 text-xs">
      <ul className="flex items-center gap-2">
        <li className="flex items-center gap-2">
          <Link href={'/service/tos'}>이용약관</Link>
          <Separator orientation="vertical" className="h-4" />
        </li>
        <li className="flex items-center gap-2">
          <Link href={'/service/privacy'}>개인정보처리방침</Link>
        </li>
      </ul>

      <p>
        Data based on
        <Link
          href="https://openapi.nexon.com/ko/"
          className="ml-1 text-xs text-blue-600"
        >
          NEXON Open API
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
