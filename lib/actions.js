"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// in this all function will act as server action and will run in server only

function isInvalidText(text) {
    return !text || text.trim() === "";
}

export default async function shareMeal(prevState, formData) {
    // this is called directive: like the use client
    // in function we are calling directive and this called Server Action
    // that ensure that this function gone always run on server
    // for more assurance we can make this functoin async
    // by thw wayt this is react feature not next js but by default in react it is disable and we can't use it
    // we need framwork like next for use this type of features
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes("@") ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            // ...prevState,
            message: "Invalid input.",
        };
    }

    await saveMeal(meal);

    // next js caching system is very aggressive and in the prodction build it will also cache the meal items, and when we add new item it does not show becase it is showing the cached items, not new
    // so we have to tell the next JS to revalidate path that should be revalidate and require changes, so we have to give path where meals are showing and, next js onlyb revaidate only that path not it's child pagesor path
    // reavalidate in simple mean it throw away those cached that is associated with those pages
    revalidatePath("/meals");
    
    // if want to revalidate all the pages in the website we can write this 
    // revalidatePath("/", "layout");

    redirect("/meals");
}
// notice in form we are adding action attribute and that is poisting to the above function
// in next js this mean that take all tha data and send that to the server and handle in the server data no in the client
