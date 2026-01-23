import IndPost from '@/components/IndPost'
import CommentForm from '@/components/CommentForm'
import ShowComments from '@/components/ShowComments'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function postId({params}){
    
    const {id} = await params;
    // console.log(id);

    return(
        <>
            <Header/>
            <h1>Post number: {id}</h1>
            <IndPost postData={id}/>
            <CommentForm id={id}/>
            <ShowComments id={id}/>
            <Footer/>
        </>
    );
}
