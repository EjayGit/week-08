import {db} from '@/utils/dbConnection'
import DeletePost from '@/components/DeletePost'

export default async function ShowComments({id}){
    
    const {rows} = await db.query(`SELECT * FROM commentboard WHERE postid = $1 ORDER BY id DESC LIMIT 20`,[
        id
    ]);
    
    return(
        <>
        {rows.map((comment) => {
            return (
            <div key={comment.id}>
                {comment.name} {comment.comment}
                <DeletePost id={comment.id}/>
            </div>
            );
        })}
        </>
    )
}