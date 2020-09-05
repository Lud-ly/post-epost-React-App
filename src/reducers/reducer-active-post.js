import {AT_POSTS} from "../actions/action-types"



export default function reducerActivePost (state=null,action){
       switch(action.type){
           case AT_POSTS.READ :
               return action.payload;
             }
             return state;
}