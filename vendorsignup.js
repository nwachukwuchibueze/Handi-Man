import styles from "../styles/vendorsignup.module.css";

function VendorSignUp() {
  return (
    <div>
      <h1 className={styles.title}>Vendor Registration</h1>
      <p className={styles.completesignuptext}>
        Complete form below to Sign Up as a Vendor.
      </p>
      <hr></hr>
      <form>
        <h4 className={styles.organisation}>Organzation/Business</h4>
        <input className={styles.organisationinputfield} type="text"></input>
        <br></br>
        <h4 className={styles.address}>Address</h4>
        <input className={styles.addressinputfield} type="text"></input>
        <p className={styles.streetaddresslines}>Street Address</p>
        <input className={styles.addressinputfield} type="text"></input>
        <p className={styles.streetaddresslines}>Street Address Line 2</p>
        <input className={styles.cityinput}></input>
        <p className={styles.city}>City</p>
        <input className={styles.stateprovinceinput}></input>
        <p className={styles.stateprovince}>State/Province</p>
        <input className={styles.postalzipcodeinput} type="tel"></input>
        <p className={styles.postalzipcode}>Postal/Zip code</p>
        <input className={styles.countryinput}></input>
        <p className={styles.country}>Country</p>
        <h4 className={styles.contactname}>Contact Name</h4>
        <input className={styles.firstnameinput} type="text"></input>
        <p className={styles.firstname}>First Name</p>
        <input className={styles.lastnameinput} type="text"></input>
        <p className={styles.lastname}>Last Name</p>
        <input className={styles.submit} type="submit"></input>
      </form>
    </div>
  );
}

export default VendorSignUp;
