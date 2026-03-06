"use client";

// import RSCDemo from "./RSCDemo";

// import { useState } from "react";

// by adding "use client" directive, still this component will render in both client and server side

// if we want to manage some state then we must specify that to the client side component, becaue state can only be managed in client components.
// and most react hooks can only be used in client components

export default function ClientDemo({ children }) {
    // const [count, setCount] = useState(0);

    console.log("ClientDemo rendered");
    return (
        <div className="client-cmp">
            <h2>A React Client Component</h2>
            <p>
                Will be rendered on the client <strong>AND</strong> the server.
            </p>
            {/* <p>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                    Increase
                </button>
                <p>{count}</p>
            </p> */}

            {/* NOTE: here it work, because this client component convert this server componetn into client component, so we can see this is rendering into client side, it should not work but it is because it is converting the component to the client component  */}
            {/* we can put async for makng it server component but it through error in console and it still get render in the client side, mean if node js code is in server component then it will not working in client side, we can ues children for make that work  */}
            {/* <RSCDemo /> */}
            {children}
        </div>
    );
}
