import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export default function SecurityLogo({ className = "" }: LogoProps) {
  const logo = site.header.site.logo;

  return (
    <Link
      href="/"
      aria-label={logo.ariaLabel}
      className={`relative inline-flex items-center transition-opacity hover:opacity-95 ${className}`}
    >
      <div className="relative h-12 w-52 sm:h-14 sm:w-64 md:h-16 md:w-72 lg:h-[4.25rem] lg:w-80">
        <Image
          src={logo.normal}
          alt={logo.alt}
          fill
          priority
          quality={100}
          unoptimized
          sizes="(max-width: 640px) 240px, 400px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
