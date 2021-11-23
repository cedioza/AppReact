import { FirstPresentation } from "../../Layouts/FirstPresentation/FirstPresentation";
import { Footer } from "../../Layouts/Footer/Footer";
import { Header } from "../../Layouts/Header/Header";
import './Home.css'


function  Home() {
    return (
       <div className="contHome">
           <Header />
           <FirstPresentation/>
           <Footer/>
        
       </div>
       
    );
}
export default Home;