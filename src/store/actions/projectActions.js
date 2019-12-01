export const createProject = (project) =>{
    // return{
    //     type:'ADD-PROJECT',
    //     project: project
    // }
    //above is how action usually done but with 'thunk' we will return a function which allow us to make asyn call
    return(dispatch,getState, {getFirebase, getFirestore}) => {
        //make async call to database 
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Net',
            authorLastName:'Hung',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type:'CREATE_PROJECT_ERROR'}, err);
        });
        
    }
}