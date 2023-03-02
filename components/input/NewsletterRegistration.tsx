import { NextFetchEvent } from "next/server";
import { FormEvent } from "react";
import styles from "./newsletterRegistration.module.css";

function NewsletterRegistration() {
  function registrationHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // get user input
    // send data to API
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
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
