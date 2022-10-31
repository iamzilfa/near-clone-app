import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Near</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
