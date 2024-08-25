import { PropsWithChildren } from "react";


function Layout({ children }: PropsWithChildren) {
    return (
        <main className="container">
            {children}
        </main>
    )
}

export { Layout }
