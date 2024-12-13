import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>      
      <Navbar/>
      <div className="page">
        <title>Swetha Poneasan</title>
        <div className="title">
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
          <p>September 2021 to December 2025</p>
          <br></br>
          <h2>Relevant Coursework</h2>
          <li>CSCC09: Programming on the Web</li>
          <li>CSCC43: Introduction to Databases</li>
          <li>CSCC69: Operating Systems</li>
          <li>CSCD01: Engineering Large Software Systems</li>
          <br></br>
          <h2>Certifications</h2>
          <li>AWS Certified Cloud Practitioner - Issued Dec 2022</li>
          <li>Bloomberg Finance Fundamentals - Issued April 2024 </li>
          <li>University of Toronto Scarborough Dean's List - 2022, 2023, 2024</li>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
