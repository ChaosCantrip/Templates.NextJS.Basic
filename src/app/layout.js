import "@/styles/global/master.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "New Website"
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}