"use client";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import shareMeal from "@/lib/actions.js";
import MealsSubmit from "@/components/meals/meals-submit";
import { useActionState } from "react";

export default function ShareMealPage() {
    /*
    // Server Action function:
    async function shareMeal(formData) {
        // this is called directive: like the use client
        // in function we are calling directive and this called Server Action
        // that ensure that this function gone always run on server
        // for more assurance we can make this functoin async
        // by thw wayt this is react feature not next js but by default in react it is disable and we can't use it
        // we need framwork like next for use this type of features
        "use server";
        const meal = {
            title: formData.get("title"),
            name: formData.get("name"),
            summary: formData.get("summary"),
            instructions: formData.get("instructions"),
            image: formData.get("image"),
            creator: formData.get("name"),
            creator_email : formData.get('email')
        };

        console.log(meal);
        
        return;
    }
    // notice in form we are adding action attribute and that is poisting to the above function
    // in next js this mean that take all tha data and send that to the server and handle in the server data no in the client
    */

    const [state, formAction] = useActionState(shareMeal, { message: null });
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your{" "}
                    <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input
                            type="text"
                            id="summary"
                            name="summary"
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label="Your image" name="image" />
                    {state.message && <p>{state.message}</p>}
                    <p className={classes.actions}>
                        <MealsSubmit />
                    </p>
                </form>
            </main>
        </>
    );
}
