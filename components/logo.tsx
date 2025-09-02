import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
}

export const Logo = ({ width, height, className }: LogoProps) => {
  return (
    <Link href="/" className={className}>
      <Image src="/logo.svg" alt="Logo" width={width} height={height} />
    </Link>
  );
};
