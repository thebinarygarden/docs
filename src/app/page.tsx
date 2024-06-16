import React from "react";
import {theme} from "@/theme";
import {FloraThemeProvider, BGLandingNav, BrowserOnlyFadeIn, FloraGlobalStyle} from "@/app/client";

export default function Home() {
    return (
        <FloraThemeProvider theme={theme}>
            <FloraGlobalStyle/>
            <main>
                <BrowserOnlyFadeIn>
                    <BGLandingNav
                        fullPageLandingProps={{imagePath: "test.jpg", title: "Binary Garden Documentation"}}/>
                </BrowserOnlyFadeIn>
            </main>
        </FloraThemeProvider>
    );
}