import { Input, InputLabel, FormControl,FormGroup, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useState, useEffect } from 'react'; 
import { addUser, getUsers} from "../Service/api";
import { useHistory , useParams} from "react-router-dom";
import { editUser } from "../Service/api";
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
const Edit = () =>{
    const [users, setUsers] = useState(initialValues);
    const  {name, username, email, phone} = users
    const {id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() =>{
        loadUserData();
    },[]);
    
    const loadUserData = async()=>{
 const response = await getUsers(id);
 setUsers(response.data);
    }
    const onValueChange = (e) =>{
        console.log(e.target.value)
setUsers({...users,[e.target.name]:e.target.value})
    }
     const addUserDetails =async ()=>{
         await editUser (id, users);
         history.push('./u');
     }
    return(
      <FormGroup className={classes.container}>
          <Typography variant="h4">EDIT USERS</Typography>

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
          <Button variant="contained" onClick={()=> addUserDetails()} color="primary">EDIT </Button>
      </FormGroup>
    )
}
export default Edit;