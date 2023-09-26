import { AppBar, Button, Toolbar, Typography} from '@mui/material';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


import Cartwitget from '../CartWidget/CartWitget';

const Navbar = () => {
    return (<AppBar>
           <Toolbar className='toolbar-navbar' sx={{display:"flex", justifyContent:"space-around"}}>
            
            
            <Typography sx={{color:"Yellow"}}>
           
            StreetRules IND
           

            </Typography>
            
            <Button  sx={{color: 'white'}}>
            <NavLink className="navbar-link" to="/">
            Inicio
            </NavLink>
            </Button >
            
            <Button  sx={{color: 'white'}}>
            <NavLink className="navbar-link" to="/products">
            Productos
            </NavLink>
            </Button>
            <Button sx={{color: 'white'}}>
            Envios
            </Button>
           <Cartwitget />
           </Toolbar>

    </AppBar> );

}

export default Navbar;
