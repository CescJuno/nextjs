import Footer from "./Footer";
import Meta from "./meta";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <section >
        <main>{children}</main>
      </section>
      <Footer />
    </>
  )
};
export default Layout;
