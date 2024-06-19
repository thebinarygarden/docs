import React from "react";
import {theme} from "@/theme";
import {FloraThemeProvider, BGLandingNav, BrowserOnlyFadeIn, FloraGlobalStyle} from "@/app/client";

export default function Home() {


    return (
        <FloraThemeProvider theme={theme}>
            <FloraGlobalStyle/>
            <main>
                <BrowserOnlyFadeIn>
                    <BGLandingNav imagePath={"test.jpg"} title={"Binary Garden Documentation"} buttonInfo={[]}>
                        <div>children are here</div>
                    </BGLandingNav>
                </BrowserOnlyFadeIn>
            </main>
        </FloraThemeProvider>
    );
}