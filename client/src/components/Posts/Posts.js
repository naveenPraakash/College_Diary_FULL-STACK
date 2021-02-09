import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
const Posts = ({ setCurrentId, setDisplayForm }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className= {classes.container} container alignItems= "stretch" spacing= {3}>
            {
                posts.map((post) => (
                    <Grid key= {post._id} item xs= {12} sm= {6}>
                        <Post post= {post} setCurrentId= { setCurrentId } setDisplayForm= {setDisplayForm}/>
                    </Grid>)
                )
            }
        </Grid>)
    );
}
export default Posts;