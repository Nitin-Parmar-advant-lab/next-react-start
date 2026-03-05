"use client";

import { useFormStatus } from "react-dom";

export default function MealsSubmit() {
    // this hook is in the react, but we can not use this in react derectly we have to use it with framwork like next js
    // this hook give status of Form, if form is in pending state then it will return pending true
    // and this hook gives only status when it is inside of that form
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}>
            {pending ? "Submitting.." : "Share Meal"}
        </button>
    );
}
