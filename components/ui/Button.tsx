import Link from "next/link";
import ArrowRightIcon from "../icons/ArrowRightIcon";

import styles from "./button.module.css";

type ButtonProps = {
  children: string;
  path?: string;
  handleClick?: () => {};
};

function Button({ children, path, handleClick }: ButtonProps) {
  if (path) {
    return (
      <Link href={path} className={styles.btn}>
        <span>{children}</span>
        <span className={styles.icon}>
          <ArrowRightIcon width={16} height={16} />
        </span>
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
