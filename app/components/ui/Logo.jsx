import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      {/* Transparent gradient mark — stands on its own, no colored box behind it */}
      <Image
        src="/logo.png"
        alt="Selinyx"
        width={36}
        height={36}
        className="h-9 w-9 object-contain shrink-0"
        priority
      />
      <span className="text-lg font-bold tracking-tight text-ink-900 dark:text-white">
        Selinyx
      </span>
    </Link>
  );
}
