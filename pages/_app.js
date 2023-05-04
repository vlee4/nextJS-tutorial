import "../styles/globals.css";

export default function App({Component, pageProps}){
    return <Component {...pageProps} />;
}

// Note: this React component is set to be a top-level component that will wrap all your other app pages.
// It can be both used as a place to keep global state, or add global styles.
//Important: This is the ONLY place you can/should add global CSS. 