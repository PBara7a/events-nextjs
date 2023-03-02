import { FormEvent, useRef } from "react";
import styles from "./newsletterRegistration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  async function registrationHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userEmail = emailInputRef.current?.value;

    const options = {
      method: "POST",
      body: JSON.stringify({ email: userEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/api/newsletter", options);
    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
