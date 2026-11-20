import Header from "@/components/ui/header-nav";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main" className="grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
