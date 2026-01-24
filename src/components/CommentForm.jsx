import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostForm({id}){

    async function handleFormSubmit(rawFormData){
        "use server";
        // console.log(rawFormData);
        const formValues = {
            name: rawFormData.get("name"),
            comment: rawFormData.get("comment"),
            id: Number(id),
        }
        // console.log(formValues);

        db.query(`INSERT INTO commentboard (name, comment, postid) VALUES ($1, $2, $3)`,
            [
                formValues.name,
                formValues.comment,
                formValues.id
            ],
        );
        revalidatePath('/posts');
        redirect('/posts');
    }

    return(
        <div>
            <form className='form' action={handleFormSubmit}>
                <label className='form-name' htmlFor="name">Name: </label>
                <input id='form-name' type="text" name='name' placeholder="Name"/>

                <label className='form-post' htmlFor="comment">Blog post: </label>
                <textarea id='form-post' type="text" name='comment' rows="4" cols="30" placeholder="Comment"/>
                
                <button>Submit</button>
            </form>
        </div>
    )
}