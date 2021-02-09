
import {FETCH_ALL, DELETE, UPDATE, CREATE, DELETE_ALL} from '../constants/actionTypes';
export default  (posts= [], action) => {
    switch(action.type){
        
        case FETCH_ALL :
            return posts;
        case DELETE :
            return posts.filter((post) => post._id !== action.payload);
        case CREATE : 
            return [...posts, action.payload];
        case UPDATE : 
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE_ALL : 
            return action.payload;
        default : 
            return posts;
        
    }
}
