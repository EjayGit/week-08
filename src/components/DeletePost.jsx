import {db} from '@/utils/dbConnection'

export default function DeletePost({id}){

    async function deleteHandler(){
        "use server";
        // console.log(id);
        const response = await db.query(`DELETE FROM commentboard WHERE id = $1`,[
            id
        ]);
    }

    return(
        <div>
            <button className='delBtn' onClick={deleteHandler}>Delete</button>
        </div>
    )
}