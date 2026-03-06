import fs from "node:fs";

export async function SaveUserAction(formData) {
    "use server";

    console.log("In the backend server");
    // this code only gone

    const data = fs.readFileSync("dummy-db.json", "utf-8");
    const instructors = JSON.parse(data);
    const newInstructor = {
        id: new Date().getTime().toString(),
        name: formData.get("name"),
        title: formData.get("title"),
    };

    instructors.push(newInstructor);
    fs.writeFileSync("dummy-db.json", JSON.stringify(instructors));
}
