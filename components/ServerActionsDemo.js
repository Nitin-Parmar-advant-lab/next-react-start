// import fs from "node:fs";

import { SaveUserAction as saveUserAction } from "@/actions/SaveUserAction";


export default function ServerActionsDemo() {
    // Form action can be used in client side, but server actions executeson the server not on the client side

    // and we can convert funtion into server action by making that function async and using "use server" directive

    // if we want to make this whole component client side, in that case we can not write at top of this component "use client", becuase their will be conflict so we have to move this function to another file and then importing the function then it will work
    // async function saveUserAction(formData) {
    //     "use server";

    //     console.log("In the backend server");
    //     // this code only gone 

    //     const data = fs.readFileSync("dummy-db.json", "utf-8");
    //     const instructors = JSON.parse(data);
    //     const newInstructor = {
    //         id: new Date().getTime().toString(),
    //         name: formData.get("name"),
    //         title: formData.get("title"),
    //     };

    //     instructors.push(newInstructor);
    //     fs.writeFileSync("dummy-db.json", JSON.stringify(instructors));
    // }

    return (
        <div className="rsc">
            <h2>Server Actions</h2>
            <p>
                A "Form Action" converted to a "Server Action" via{" "}
                <strong>"use server"</strong>.
            </p>
            <p>Can be defined in a server component or a separate file.</p>
            <p>
                Can be called from inside server component or client component.
            </p>
            <form action={saveUserAction}>
                <p>
                    <label htmlFor="name">User name</label>
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </p>
                <p>
                    <button>Save User</button>
                </p>
            </form>
        </div>
    );
}
