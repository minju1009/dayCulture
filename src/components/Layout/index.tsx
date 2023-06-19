import Header from "./Header";
import Footer from "./Footer";
import { mainContainer } from "./layout.css";

interface ILayoutProps{
    children: React.ReactNode
}

export default function Layout({children}:ILayoutProps){
    return(
        <>
            <Header />
                <main className={mainContainer}>{children}</main>
            <Footer />
        </>
    )
}