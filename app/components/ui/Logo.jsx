import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      {/* Purple square container — same shape as friend's logo, but uses logo.png */}
      <div className="h-9 w-9 rounded-xl bg-brand-600 flex items-center justify-center shrink-0 overflow-hidden">
        <Image
          src="/logo.png"
          alt="Selinyx"
          width={36}
          height={36}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      <span className="text-lg font-bold tracking-tight text-ink-900 dark:text-white">
        Selinyx
      </span>
    </Link>
  );
}
