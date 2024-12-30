import React from "react";
import {BGLanding} from "flora"

export default function HomePage() {

    return (
        <main>
            <BGLanding title={"Binary Garden Documentation"} imagePath={"test.jpg"}
                       imageAlt="BG Documentation Thumbnail" buttons={[]}>
                <div>children are here</div>
            </BGLanding>
        </main>
    );
}