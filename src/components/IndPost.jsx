import {db} from '@/utils/dbConnection'

export default async function IndPost(id){
    //console.log(id.postData);
    const {rows} = await db.query(`SELECT * FROM postboard WHERE id = $1`,[
        id.postData
    ]);
    // console.log(rows[0]);
    return(
        <div className='ind-post'>
            <p className='comment-name'>{rows[0].name}</p> <p className='location'>{rows[0].location}</p> <p className='message'>{rows[0].message}</p>

        </div>
    )
}