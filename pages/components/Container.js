import { Layout } from "antd";
import Head from "next/head";
import { useContext } from "react";
import A from "./A";
import Context from "./Context";

export default function Container({ children, title }) {
  const { Header, Footer, Content } = Layout;
  const { theme, handleTheme } = useContext(Context);

  return      (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout className="min-h-screen text-black  bg-blue-200 dark:bg-purple-600 flex flex-col container mx-auto">
        <Header className="flex text-white bg-black justify-around text-5xl py-14 items-center">
          <A href="/" text="Main Page"/>
          <A href="/form-hooks" text="Form with hook" />
          <A href="/layout" text="Layout" />
          <button
            className="bg-yellow-300 px-6 py-3 text-purple-700 rounded-full"
            onClick={handleTheme}
          >
            {theme}
          </button>
        </Header>
        <Content>{children}</Content>
        <Footer className="bg-black">Footer</Footer>
      </Layout>
      </>
  );
}
