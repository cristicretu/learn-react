import { getSession } from "next-auth/client";

import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
    if (!session) return <Login />;
    return (
        <div>
            <Head>
                <title>Facebook</title>
            </Head>

            {/* header */}
            <Header />

            <main className="flex">
                {/* sidebar */}
                <Sidebar />
                {/* feed */}
                <Feed posts={posts} />
                {/* widgets */}
                <Widgets />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    const posts = await db
        .collection("posts")
        .orderBy("timestamp", "desc")
        .get();

    const docs = posts.docs.map((post) => ({
        id: post.id,
        ...post.data(),
        timestamp: null,
    }));

    return {
        props: {
            session,
            posts: docs,
        },
    };
}
