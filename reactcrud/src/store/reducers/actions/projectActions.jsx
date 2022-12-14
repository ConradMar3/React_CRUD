export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to DB
        const firestore = getFirestore();
        firestore.collection('Project 2 - React.Redux.Firebase').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};