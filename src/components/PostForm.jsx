import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function PostForm(){

    async function handleFormSubmit(rawFormData){
        "use server";
        console.log(rawFormData);
        const formValues = {
            name: rawFormData.get("name"),
            location: rawFormData.get("location"),
            post: rawFormData.get("post"),
        }
        console.log(formValues);

        db.query(`INSERT INTO postboard (name, location, message) VALUES ($1, $2, $3)`,
            [
                formValues.name,
                formValues.location,
                formValues.post
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

                <label className='form-name' htmlFor="location">Location: </label>
                <input id='form-name' type="text" name='location' maxLength={255} placeholder="Location" />

                <label className='form-post' htmlFor="post">Blog post: </label>
                <textarea id='form-post' type="text" name='post' rows="4" cols="30" placeholder="Blog"/>
                
                <button className="bg-amber-600">Submit</button>
            </form>
        </div>
    )
}