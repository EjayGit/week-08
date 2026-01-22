export default async function postId({params}){
    
    const {id} = await params;
    console.log(id);

    return(
        <>
            <h1>Post number: {id}</h1>
        </>
    );
}
