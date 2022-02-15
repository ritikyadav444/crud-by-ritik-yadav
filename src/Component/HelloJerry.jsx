import { Box, Typography, makeStyles } from '@material-ui/core';
import Insta from '../Assets/Images/Insta.jpg';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const HelloJerry = () =>{
    const classes = useStyles();
    return(
        <Box className={classes.component}>
            <Typography variant="h5">Hello From HackTech</Typography>
            <Box style={{display: 'flex'}}>
                <img src={Insta} className={classes.image} style={{width: '30%', margin: '8px 0 0 60px'}}/>
                <img src={Insta} className={classes.image} style={{width: '30%', margin: '8px 0 0 3px'}}/>
                <img src={Insta} className={classes.image} style={{width: '30%', margin: '8px 0 0 3px'}}/>
            </Box>
        </Box>
    )
}
    
export default HelloJerry;