import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

// const DUMMY_MEETUPS = [
//     {
//         id: "m1",
//         title: "A First Meetup",
//         image: "https://upload.wikimedia.org/wikipedia/commons/d/de/France-002364_-_Square_House_%2815867600545%29.jpg",
//         address: "this is first address",
//         description: "this is a first meetup",
//     },
//     {
//         id: "m2",
//         title: "A second Meetup",
//         image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG",
//         address: "this is second address",
//         description: "this is a second meetup",
//     },
//     {
//         id: "m3",
//         title: "A Third Meetup",
//         image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/2013.07.05_roussillon_-_roque_anth%C3%A9ron_172.JPG",
//         address: "this is Thired address",
//         description: "this is a Thired meetup",
//     },
//     {
//         id: "m4",
//         title: "A Fourth Meetup",
//         image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Fa%C3%A7ade_Palais_Bourbon_3.jpg",
//         address: "this is Fourth address",
//         description: "this is a Fourth meetup",
//     },
// ];

export default function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export async function getStaticProps() {
    const client = await MongoClient.connect(process.env.MONGO_CONNECTION);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();
    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 10,
    };
}
