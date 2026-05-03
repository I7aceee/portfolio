import Image from "next/image";

interface IconProps {
  className?: string;
}

/**
 * Effector — официальный логотип из public/icons/effector.svg
 * Скачать: https://effector.dev → правая кнопка на логотип → "Сохранить как"
 * Или: https://raw.githubusercontent.com/effector/effector/master/website/static/img/logo.svg
 * Положить в: public/icons/effector.svg
 */
export function EffectorIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <Image
      src="/icons/effector.svg"
      alt="Effector"
      width={20}
      height={20}
      className={className}
      style={{ filter: "brightness(0) invert(0.5)" }}
    />
  );
}

/**
 * FSD (Feature-Sliced Design) — официальный логотип из public/icons/fsd.svg
 * Скачать: https://feature-sliced.design → логотип в шапке
 * Или: https://raw.githubusercontent.com/feature-sliced/documentation/master/static/img/logo.svg
 * Положить в: public/icons/fsd.svg
 */
export function FsdIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <Image
      src="/icons/fsd.png"
      alt="Feature-Sliced Design"
      width={20}
      height={20}
      className={className}
      style={{ filter: "brightness(0) invert(0.5)" }}
    />
  );
}
