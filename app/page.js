import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from '/styles/links.module.css';

export default function Home() {
  return (
    <div>  
      <title>Swetha Poneasan</title>
      <Navbar/>
      <div className="page">
        {/* <div className="title"> */}
          <h1>Hi, I'm Swetha!</h1>
          <br></br>
          <p>I'm a 4th year Computer Science student at the University of Toronto Scarborough. I am
            passionate about working with data and building software to solve complex problems. I am eager
            to search for new opportunities in the field of technology, please feel free to reach out if you would
            like to connect.
          </p>
          <br></br>
          <h2>Education</h2>
          <p>Honours Bachelors of Science, Computer science (Co-op) </p>
          <p>Specialist in Computer Science- Software Engineering Stream, Minor in Statistics </p>
          <p>September 2021 to August 2025</p>
          <br></br>
          <h2>Relevant Coursework</h2>
          <li>CSCC09: Programming on the Web</li>
          <li>CSCC43: Introduction to Databases</li>
          <li>CSCC69: Operating Systems</li>
          <li>CSCD01: Engineering Large Software Systems</li>
          <br></br>
          <h2>Certifications</h2>
          <li><a className={styles.certifications} href="https://www.credly.com/badges/77cd96db-ed41-44d2-9510-e8b5777d44e9/linked_in_profile">AWS Certified Cloud Practitioner</a> - Issued Dec 2022</li>
          <li><a className={styles.certifications} href="https://portal.bloombergforeducation.com/certificates/1B4NY8Y5BJmHcJGALr1yG6Pc">Bloomberg Finance Fundamentals</a> - Issued April 2024 </li>
          <li>University of Toronto Scarborough Dean's List - 2022, 2023, 2024</li>
        {/* </div> */}
      </div>
      <Footer/>
    </div>
  );
}
