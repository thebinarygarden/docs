import React from "react";
import {BGLanding} from "bgflora/bg";
import {SideNavbar} from "bgflora/navigation";

export default function HomePage() {

    return (
        <main>
            <BGLanding title={"Binary Garden Documentation"}
                       mp4Path={"newhozions.mp4"}
                       youtube="https://google.com"
                       github="https://google.com"
                       bgdocs="https://google.com"
                       navigation={<SideNavbar />}
            >
                <div>children are here</div>
            </BGLanding>
        </main>
    );
}