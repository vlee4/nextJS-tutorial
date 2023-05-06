This is a starter template for [Learn Next.js](https://nextjs.org/learn).

Following this tutorial for [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app).

---- Notes ----

- Next.js has a built in Image Component that automatically optimizes the linked image by lazy loading them and serving them in formats like WebP which offers bettter compression and quality of the images. This also prevents "cumulative layout shifts".

- By default, Next.js pre-renders each page so that the client doesn't have to do it. This helps optimize performance and SEO. Only
  the minimal necessary JS code is associated with each HTML page, and then only when the browser loads the page is it run and make
  the page interactive (hydration). - Next.js allows you to specify whether you want "Static Generation" or "Server-side rendering" for each page which should depend
  on how up-to-date the data on the page needs to be (server-side rendering for pages that require more updates).

- React.js alone doesn't pre-render, so if JS is disabled you wouldn't be able to see the app's content.
