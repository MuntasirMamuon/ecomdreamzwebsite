import Image, { type ImageProps } from "next/image";
import { imageSizes } from "@/data/image-sizes";

type ImgProps = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  src: string;
  alt: string;
  /** Use `fill` layout inside a positioned parent instead of intrinsic size. */
  fill?: boolean;
};

/**
 * next/image with intrinsic dimensions looked up from the generated manifest,
 * so every local asset reserves its space and avoids layout shift.
 */
export function Img({ src, alt, fill, ...rest }: ImgProps) {
  // Animated GIFs must not be re-encoded.
  const unoptimized = src.endsWith(".gif") || src.endsWith(".svg") || rest.unoptimized;

  if (fill) {
    return <Image src={src} alt={alt} fill unoptimized={unoptimized} {...rest} />;
  }

  const size = imageSizes[src];
  if (!size) {
    throw new Error(`Missing intrinsic size for ${src}. Re-run the image manifest script.`);
  }

  return <Image src={src} alt={alt} width={size.width} height={size.height} unoptimized={unoptimized} {...rest} />;
}
