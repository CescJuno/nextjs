import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";

function Profile() {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Head>
          <title>Profile</title>
        </Head>
        <Container>Hello, my name is {router.query.name}. I use next.js</Container>
      </Layout>
    </>
  );
}

export default Profile;
