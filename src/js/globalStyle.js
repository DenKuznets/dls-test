import { createGlobalStyle } from "styled-components";
import cssResets from "./cssResets";

const GlobalStyle = createGlobalStyle`
${cssResets};

html{
    scroll-behavior: smooth;
    ${"" /* scroll-padding-top: 70px; */}
}

body {
    font-family: 'Roboto', sans-serif;
}

main {
    padding: 0 1.25rem;
}

.container{
    max-width: 72.5rem;
    margin: 0 auto;
}

`;

export default GlobalStyle;
