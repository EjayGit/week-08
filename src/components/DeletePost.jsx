import {db} from '@/utils/dbConnection'
import './delbtn.css'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default function DeletePost({id}){

    async function deleteHandler(){
        "use server";
        // console.log(id);
        const response = await db.query(`DELETE FROM commentboard WHERE id = $1`,[
            id
        ]);
    }

    return(
        <div className='delBtnContainer'>
            <button className='delBtn' onClick={deleteHandler}>Delete</button>
        </div>
    )
}