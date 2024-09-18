import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-9 flex-col items-center justify-center rounded-lg bg-white p-2 text-xs shadow-sm">
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
