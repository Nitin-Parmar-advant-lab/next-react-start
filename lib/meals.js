import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('Loading meals failed')
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

async function generateUniqueSlug(title) {
    let slug = slugify(title, { lower: true });
    let existingMeal = db
        .prepare("SELECT * FROM meals WHERE slug = ?")
        .get(slug);

    let counter = 1;
    while (existingMeal) {
        slug = `${slugify(title, { lower: true })}-${counter}`;
        existingMeal = db
            .prepare("SELECT * FROM meals WHERE slug = ?")
            .get(slug);
        counter++;
    }

    return slug;
}

export async function saveMeal(meal) {
    meal.slug = await generateUniqueSlug(meal.title); // Use the unique slug generator
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image failed!");
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(
        `
        INSERT INTO meals 
            (title, summary, instructions, creator, creator_email, image, slug)
            VALUES (
                @title,
                @summary,
                @instructions,
                @creator,
                @creator_email,
                @image,
                @slug
            )
        `,
    ).run(meal);
}
