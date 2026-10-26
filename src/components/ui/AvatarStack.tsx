import Image from "next/image";
import { cn } from "@/lib/cn";

type Avatar = {
  src: string;
  alt: string;
};

type AvatarStackProps = {
  avatars: Avatar[];
  className?: string;
};

/** Overlapping 36 px round photos with a 1 px silver ring (Figma "Group 1", 31:4527). */
export function AvatarStack({ avatars, className }: AvatarStackProps) {
  return (
    <ul className={cn("flex", className)}>
      {avatars.map((avatar, index) => (
        <li key={avatar.src} className={cn(index === 1 && "-ml-4.5", index > 1 && "-ml-4")}>
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={36}
            height={36}
            className="size-9 rounded-full object-cover ring-1 ring-silver"
          />
        </li>
      ))}
    </ul>
  );
}
