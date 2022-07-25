import styles from "../styles/usersignin.module.css";

function Login() {
  return (
    <div className={styles.div}>
      <form className={styles.form}>
        <h1 className={styles.title}>Sign In</h1>
        <h6 className={styles.paragraph}>
          Stay updated on your professional world
        </h6>
        <input
          type="Text"
          className={styles.inputsize}
          placeholder="Enter Your Username"
        ></input>
        <br></br>
        <br></br>
        <input
          className={styles.inputsize}
          type="password"
          placeholder="Password"
        ></input>
        <br></br>
        <br></br>
        <button className={styles.forgotpasswordbutton}>
          <b>Forgot password?</b>
        </button>
        <br></br>
        <br></br>
        <button className={styles.signinbutton}>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
