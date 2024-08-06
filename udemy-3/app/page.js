import { Suspense } from "react";

import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import Head from "next/head";
// import Link from "next/link";

async function LatestPosts() {
  const latestPosts = await getPosts();
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <Head>
        <title>Canonical Tag Example</title>
        <link rel="canonical" href="http://localhost:3000/" />
      </Head>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
