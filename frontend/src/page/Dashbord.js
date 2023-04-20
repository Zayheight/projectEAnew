import "../css/home.css";
import "../css/dashbord.css";
import Navbar from "../component/navbar";


function Dashbord() {
  
  console.log("l");
  return (
    <div>
      <Navbar></Navbar>
      <div className="landingpage_dashbord">
        <div className="container">
          <h1>dashbord</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
