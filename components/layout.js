import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";

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
  );
};
export default Layout;
