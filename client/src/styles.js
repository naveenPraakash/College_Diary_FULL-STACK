import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  AppBar: {
    borderRadius: 30,
    background: 'linear-gradient(30deg, #FE6888, #FF8E53)',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  add : {
    display: 'flex', justifyContent: 'flex-end',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  [theme.breakpoints.down('sm')] : {
    mainContainer: {
        flexDirection: "column-reverse"
    }
  }
  
}));
