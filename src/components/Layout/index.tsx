import Header from "./Header";
import Footer from "./Footer";
import { mainContainer } from "./layout.css";
import { PropsWithChildren } from "react";

interface ILayoutProps {
    children?: React.ReactNode
}


export default function Layout({children}:PropsWithChildren<ILayoutProps>){
    return(
        <>
            <Header />
                <main className={mainContainer}>{children}</main>
            <Footer />
        </>
    )
}
