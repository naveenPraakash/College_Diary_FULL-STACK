import React , { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Button, Grid, Toolbar} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import {getPosts, deleteAll} from './actions/posts'
import { useDispatch } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const App = () => {
    const [ currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch= useDispatch();
    const [displayForm, setDisplayForm] = useState(false);
    useEffect(() => {
        dispatch(getPosts());
    },[currentId,displayForm, dispatch]);
    if (displayForm) {
        return (
            
            <Container max-width= 'false'>
                <AppBar className={classes.AppBar}  position='static'  >
                    <Toolbar>
                        <Button color= 'secondary' startIcon ={<DeleteForeverIcon  style={{ fontSize: 40 }} onClick= {() => dispatch(deleteAll())}/>}>DELETE ALL</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Typography className={classes.heading} variant="h2"  > College Diary</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button color= 'primary'
                            className={classes.add}
                            startIcon ={<AddIcon style={{ fontSize: 40 }}/>}
                            onClick= {() => setDisplayForm(!displayForm)}>
                            ADD
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grow in> 
                    <Container>
                        <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId= {setCurrentId} setDisplayForm= {setDisplayForm} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId= {currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        );
    }
    return (
        
        <Container max-width='lg'>
            <AppBar className={classes.AppBar}  position='static' color='inherit' >
                <Toolbar>
                    <Button color= 'secondary' startIcon ={<DeleteForeverIcon  style={{ fontSize: 40 }} onClick= {() => dispatch(deleteAll())}/>}>Delete All</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography className={classes.heading} variant="h2"  > College Diary </Typography>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color= 'primary'
                        className={classes.add}
                        startIcon ={<AddIcon style={{ fontSize: 40 }}/>}
                        onClick= {() => setDisplayForm(!displayForm)}>
                        ADD
                    </Button>
                </Toolbar>
            </AppBar>
            <Grow in> 
                <Container>
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId= {setCurrentId} setDisplayForm= {setDisplayForm}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App ;