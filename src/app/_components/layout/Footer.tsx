import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center p-2 text-xs">
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
