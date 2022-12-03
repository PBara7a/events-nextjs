import styles from "./errorAlert.module.css";

type ErrorAlertProps = {
  children: React.ReactNode;
};

function ErrorAlert({ children }: ErrorAlertProps) {
  return <div className={styles.alert}>{children}</div>;
}

export default ErrorAlert;
