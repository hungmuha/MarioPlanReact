export const createProject = (project) =>{
    // return{
    //     type:'ADD-PROJECT',
    //     project: project
    // }
    //above is how action usually done but with thunk we will return a function which allow us to make asyn call
    return(dispatch,getState) => {
        //make async call to database 
        dispatch({type:'CREATE_PROJECT', project});
    }
}