import './Card.css';
import flork from '../../../Images/flork.jpg';


   
export const Card =()=>{
   
    return (
        <>
        <div className="card">
        <img className="image"src={flork} alt="" />
        <p className="title"> Hola Grupo</p>
        </div>
        </>
    )
}