import styles from "./commentList.module.css";

function CommentList() {
  return (
    <ul className={styles.comments}>
      {/* Replace with comments fetched from API */}
      <li>
        <p>Wow, what a comment!</p>
        <div>
          By <address>Barata</address>
        </div>
      </li>
      <li>
        <p>Another one?</p>
        <div>
          By <address>Barata</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
