import {db} from '@/utils/dbConnection'

export default async function IndPost(id){
    //console.log(id.postData);
    const {rows} = await db.query(`SELECT * FROM postboard WHERE id = $1`,[
        id.postData
    ]);
    // console.log(rows[0]);
    return(
        <>
            <h1>Ind post</h1>
            {rows[0].name} {rows[0].location} {rows[0].message}

        </>
    )
}