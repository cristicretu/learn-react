import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";

export default function Home({ session }) {
    if (!session) return <Login />;
    return (
        <div>
            <Head>
                <title>Facebook</title>
            </Head>

            {/* header */}
            <Header />

            <main>
                {/* sidebar */}
                {/* feed */}
                {/* widgets */}
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}
