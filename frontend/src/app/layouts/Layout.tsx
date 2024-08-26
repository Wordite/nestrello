import { useInitApp } from "@hooks/useInitApp";
import { PropsWithChildren } from "react";


function Layout({ children }: PropsWithChildren) {
    useInitApp()

    return (
        <main className="container">
            {children}
        </main>
    )
}

export { Layout }
