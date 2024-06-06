"use client"
import React from "react";
import {FullPageLanding, FloraThemeProvider} from "flora";
import {theme} from "@/theme";

export default function Home() {
    return (
        <FloraThemeProvider theme={theme}>
            <main className="min-h-screen">
                <FullPageLanding imagePath={"test.jpgf"} title={"Binary Garden Documentation"}/>
            </main>
        </FloraThemeProvider>
    );
}