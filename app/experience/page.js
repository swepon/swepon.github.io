import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import styles from "/styles/experience.module.css";
const experience = () => {
 return (
  <div>    
    <Navbar/>
    <div className="page">
      <title>Swetha Poneasan</title>
      <div className="title">
      <h1>Experience</h1>
      <br></br>
      <h3>Senior Intern Analyst at Canada Pension Plan Investment Board</h3>
      <p>January to April 2024</p>
      <br></br>
      <h3>Intern Analyst at Canada Pension Plan Investment Board</h3>
      <p>May to August 2023</p>
      <br></br>
      <h3>Intern Analyst at Canada Pension Plan Investment Board</h3>
      <p>September to December 2022</p>
      </div>
    </div>
    <Footer/>
  </div>
 );
};
export default experience;