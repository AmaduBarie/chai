import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
 
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { green } from '@material-ui/core/colors/green';

 
 
 










const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    width: 300,
  }
  ,
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  conbotton:{
    display:'flex',
    justifyContent:'center'
  },
  button:{
    backgroundColor:'green',
    marginTop:'.4em',
    width:'37em',
    '&:hover':{
        backgroundColor: 'rgba(54, 190, 12, 0.958)'
    }

  },
  conbtn:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  con:{
marginTop:'10vh',
display:'flex',
width:'80%',
justifyContent:'center',
alignItems:'center',
marginLeft:'10%',
 marginRight:'10%',
 border:'2px solid green',
 borderTopRightRadius:'.5em',
 borderTopLeftRadius:'.5em',
  },
  lname:{
    display:'flex',
    marginRight:"1em",
    marginTop:'-.4em',
    justifyContent:'flex-end',
    alignSelf:'flex-end',
    color:'white'
    
  },
  lpassword:{
    display:'flex',
    marginRight:"1em",
    marginTop:'1.2em',
    justifyContent:'flex-end',
    alignSelf:'flex-end',
    color:'white'
  },
  name:{
    display:'flex',
    marginTop:'.8em',
    justifyContent:'flex-start'
  },
  password:{
    display:'flex',
    marginTop:'.8em',
    justifyContent:'flex-start'
  },
  namepass:{
      marginTop:"-2em",
      width:'40em',
    
  },
  lnamelpass:{
      backgroundColor:'green',
      height:'50vh',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     flexDirection:'column',
     width:'5em'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();



  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };




  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <Typography variant="h3">
                  Input Details
              </Typography>
          </Paper>
        </Grid>


        <Grid container className={classes.conbotton} spacing={0}>

       
        <Grid container className={classes.con} spacing={1}>

        <Grid item className={classes.lnamelpass}  xs={6}>
           <Grid item className={classes.lname} >
           <Typography variant="h4">Name:</Typography>
        </Grid>
        <Grid item className={classes.lpassword}>
           <Typography variant="h4">Password:</Typography>
        </Grid>
        </Grid>


        <Grid item className={classes.namepass} xs={6}>
           <Grid item className={classes.name}>

               
           <FormControl noValidate autoComplete="on" className={clsx(classes.password, classes.textField)}> 
      <TextField id="standard-basic"   />
        </FormControl>

        </Grid>

 
           <Grid item className={classes.password}>

           <FormControl className={clsx(classes.password, classes.textField)}>
          {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>


        </Grid>
        </Grid>


   
        </Grid>
       
        <Grid item className={classes.conbtn} spacing={1}>
        <Button variant="contained" color="secondary" className={classes.button}>
        Login
      </Button>
        </Grid>
        </Grid>
         
      </Grid>
    </div>
  );
}
