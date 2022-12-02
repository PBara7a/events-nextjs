import MainHeader from "./MainHeader";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
