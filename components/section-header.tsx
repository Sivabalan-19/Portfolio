import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
  switch?: boolean;
}

export default function SectionHeader({
  title,
  className,
  switch: isSwitched = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        `flex ${isSwitched ? "flex-row-reverse" : ""} w-full items-center gap-4`,
      )}
    >
      <h2 className="font-display text-4xl font-bold leading-none text-white sm:text-5xl md:text-6xl">
        {title}
        <span className="text-[#3dcf91]">.</span>
      </h2>
      <div className="h-px flex-1 bg-[#e3e3e7] opacity-[0.3]" />
    </div>
  );
}
