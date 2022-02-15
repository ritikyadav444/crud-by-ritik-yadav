import { Input, InputLabel, FormControl,FormGroup, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useState, useEffect } from 'react'; 
import { addUser} from "../Service/api";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})
const initialValues  = {
    name: '',
    username: '',
    email: '',
    phone: ''
}
const Add = () =>{
    const [users, setUsers] = useState(initialValues);
    const  {name, username, email, phone} = users
    const classes = useStyles();
    const history = useHistory();
    const onValueChange = (e) =>{
        console.log(e.target.value)
setUsers({...users,[e.target.name]:e.target.value})
    }
     const addUserDetails =async ()=>{
         await addUser(users);
         history.push('./u');
     }
    return(
      <FormGroup className={classes.container}>
          <Typography variant="h4">ADDUSERS</Typography>

          <FormControl>
              <InputLabel>USERNAME</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name='username' value={username}/>
          </FormControl>
          <FormControl>
              <InputLabel>NAME</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name='name' value={name}/>
          </FormControl>
          <FormControl>
              <InputLabel>PHONE</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name='phone' value={phone}/>
          </FormControl>
          <FormControl>
              <InputLabel>EMAIL</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name='email' value={email}/>
          </FormControl>
          <Button variant="contained" onClick={()=> addUserDetails()} color="primary">Add</Button>
      </FormGroup>
    )
}
export default Add;