import styles from './layout.module.css'

export default function Layout({children}){
    return(
        <div className={styles.container}>{children}</div>
    )
}

// Note: Next.js supports CSS Modules, which are CSS files that end in `.module.css`.
// They can be applied just like any other style sheet by importing and appointing the relevent rules to your components. 