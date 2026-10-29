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
      <div className="relative h-10 w-[9.25rem] max-w-[52vw] sm:h-12 sm:w-48 sm:max-w-none md:h-14 md:w-56 lg:h-16 lg:w-64 xl:w-72">
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
