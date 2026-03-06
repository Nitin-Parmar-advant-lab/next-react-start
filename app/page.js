// import ClientDemo from "@/components/ClientDemo";
// import DataFetchingDemo from "@/components/DataFetchingDemo";
// import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";
// import RSCDemo from "@/components/RSCDemo";
import fs from "node:fs/promises";
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function Home() {
    const fetchUserPromise = new Promise((resolve, reject) =>
        setTimeout(async () => {
            const data = await fs.readFile("dummy-db.json", "utf-8");
            const users = JSON.parse(data);
            // resolve(users);
            reject(new Error("Error!"));
        }, 2000),
    );

    return (
        // React sernver component and client component
        // <main>
        //     {/* sepecial project setup that is provided by next.js */}
        //     {/* Next.js project are set up such that all React components by default are treated as server components,
        //     which means they ar never rendered on the client side.*/}

        //     {/* RSC(React server component) can directly includde client compnents in their JSX code */}
        //     {/* Client-components can't directly include RSC in their code - only as children (that mean if client component can include server component  if it is render through clildren) */}

        //     {/* <RSCDemo />
        //     <ClientDemo /> */}

        //     {/* Useing children for rending server component */}
        //     {/* <ClientDemo>
        //         <RSCDemo />
        //     </ClientDemo> */}

        //     {/* this component has some node js code, but as we know it will render on the server side so, first it will fetch tha data into server and then send template to the client side to show the component
        //     it is reunning in the server */}
        //     {/* <DataFetchingDemo /> */}

        //     <ServerActionsDemo />
        // </main>

        // use() For promises and Data fetching
        <main>
            {/* 
            The use() Hook can be used for getting access to context
            But it can also be used to await promises - in client - components
            works thogeter with suspense to handle data fetchind and loading fallbacks
            
            **Importand
            use() for promises requires "special promises"
            Created via libraries that integreat with react's suspense feature
            // Your promises, created in your components, can't be used! 
             */}
            {/* Suspense is a component that's providede by React, that can be wrapped around any content that is loading something, somthing can be code or data which are fetching */}
            {/* This work as expected if the fetching and time taking part is in the same file in the component, so we can use suspesnse and fall backe utill component is not ready to visible
            but if component has some state and it must be in the client side then it will not gone work, because time taking proces is part of the server side but state is frontend, and we must user directive to spefiy that this is part of the frontend because without that it will not gone work 
            **So their is conflict so we have to move that time taking backend code outside that file and so that this supense not gone work, it can not help use here
            
            ** so in this case we can take help of use() hook*/}
            <ErrorBoundary fallback={<p>Kuchto gadbad hai!!</p>}>
                <Suspense fallback={<p>Fetching data...</p>}>
                    <UsePromiseDemo usersPromise={fetchUserPromise} />
                </Suspense>
            </ErrorBoundary>
        </main>
    );
}
