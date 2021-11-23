import './Navbar.css'



export const Navbar=(props)=>{
    return(
    <>
    <ul className="navbar">
        <li>{props.menu1}</li>
        <li>{props.menu2}</li>
        <li>{props.menu3}</li>
        <li>{props.menu4}</li>
    </ul>
    </>
    )
}