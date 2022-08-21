import { Greeting } from "@components/Greeting";
import { Layout } from "@components/Layout";

const Home = () => (
  <Layout title="Next.js with Typescript, Tailwind and Jest">
    <div className="flex p-4 min-h-screen items-center justify-center">
      <main>
        <Greeting tools={["Typescript", "Tailwind", "Jest"]} />
      </main>
    </div>
  </Layout>
);

export default Home;
