"use server";

// in this all function will act as server action and will run in server only

export default async function shareMeal(formData) {
    // this is called directive: like the use client
    // in function we are calling directive and this called Server Action
    // that ensure that this function gone always run on server
    // for more assurance we can make this functoin async
    // by thw wayt this is react feature not next js but by default in react it is disable and we can't use it
    // we need framwork like next for use this type of features
    const meal = {
        title: formData.get("title"),
        name: formData.get("name"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };

    console.log(meal);

    return meal;
}
// notice in form we are adding action attribute and that is poisting to the above function
// in next js this mean that take all tha data and send that to the server and handle in the server data no in the client
