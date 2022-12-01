import Link from "next/link";
import ArrowRightIcon from "../icons/ArrowRightIcon";

import styles from "./button.module.css";

type ButtonProps = {
  text: string;
  path: string;
};

function Button({ path, text }: ButtonProps) {
  return (
    <Link href={path} className={styles.btn}>
      <span>{text}</span>
      <span className={styles.icon}>
        <ArrowRightIcon color="#dafff7" width={16} height={16} />
      </span>
    </Link>
  );
}

export default Button;
