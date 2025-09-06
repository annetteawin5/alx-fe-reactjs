import { Link } from 'react-router-dom';
function Navbar (){
   
    return(
        <nav style={{ display:"flex", alignItems:"center", backgroundColor: 'grey', color:'blue', padding: '10px',justifyContent:'flex-end', gap:'15px', padding:'20px'
        }}>
      <Link to="/home">Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/services" >Services</Link>
      <Link to="/contact" >Contact</Link>
        </nav>
    );
}
export default Navbar;