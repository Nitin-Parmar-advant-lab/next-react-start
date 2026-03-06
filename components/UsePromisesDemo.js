// import fs from "node:fs/promises";
"use client";

import { useState, use } from "react";

export default function UsePromiseDemo({ usersPromise }) {
    // use() handles the await
    const users = use(usersPromise);
    // time taking server code, but this will not gone work here becase now in the compnent we are using state
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // const data = await fs.readFile("dummy-db.json", "utf-8");
    // const users = JSON.parse(data);

    const [count, setCount] = useState(0);
    return (
        <div className="rsc">
            <h2>RSC with Data Fetching</h2>
            <p>
                Uses <strong>async / await</strong> for data fetching.
            </p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.title})
                    </li>
                ))}
            </ul>
            <p>
                <button onClick={() => setCount((prevState) => prevState + 1)}>
                    Increment
                </button>
                <span>{count}</span>
            </p>
        </div>
    );
}
