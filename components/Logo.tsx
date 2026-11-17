import Image from "next/image";

/** Clay's arch icon, from the official Clay logo kit. Decorative. */
export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <Image
      src="/brand/clay-icon.png"
      alt=""
      width={Math.round(size * 1.32)}
      height={size}
      className="shrink-0"
    />
  );
}
