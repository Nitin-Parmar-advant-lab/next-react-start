import { Suspense } from "react";
import Link from "next/link";

import styles from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";

export const metadata = {
    title: "All meals",
    description: "Browse the delivious meals shared by out community ",
};

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />;
}

// IN REACT compnent can't be async, but in the next js it possible because this are run in the server
export default function MealsPAge() {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created{" "}
                    <span className={styles.highlight}>bu you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourseld. It is easy
                    and fun!
                </p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share your Favorite Recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                {/* their was also loading.js that used to show loading to the page but it was removed 
                because move we are handling loading with diffrent approch in which the code that fetch the data is seprated and static code
                like heading are seprated so, user can see the data even if fetching is in the background is working
                and we use suspense for the fallback test showing */}

                <Suspense
                    fallback={
                        <p className={styles.loading}>Fetching meals...</p>
                    }
                >
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}
