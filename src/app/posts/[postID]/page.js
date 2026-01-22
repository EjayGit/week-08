export default async function PostID({params}){
    
    const {id} = await params;
    
    return(
        <>
            <h1>Post number: {id}</h1>
        </>
    )
}