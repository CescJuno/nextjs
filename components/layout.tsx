import Footer from "./Footer";
import Meta from "./meta";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <section className="min-h-screen">
        <main>{children}</main>
      </section>
      <Footer />
    </>
  )
};
export default Layout;
