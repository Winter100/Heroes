import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-16 w-full flex-col items-center justify-center gap-1 bg-background py-1 text-xs">
      <p>건의사항: 100taeng@gmail.com</p>
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
