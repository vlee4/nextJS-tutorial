## ---- Notes ----

- Next.js has a built in Image Component that automatically optimizes the linked image by lazy loading them and serving them in formats like WebP which offers bettter compression and quality of the images. This also prevents "cumulative layout shifts".

### Pre-rendering & Data fetching

- By default, Next.js pre-renders each page so that the client doesn't have to do it. This helps optimize performance and SEO. Only
  the minimal necessary JS code is associated with each HTML page, and then only when the browser loads the page is it run and make
  the page interactive (hydration).
- Next.js allows you to specify whether you want "Static Generation" or "Server-side rendering" for each page which should depend on how up-to-date the data on the page needs to be (server-side rendering for pages that require more updates).

- React.js alone doesn't pre-render, so if JS is disabled you wouldn't be able to see the app's content.

- When using pre-rendering, not only can you read from the fs, but you can also fetch data from an external API (via `fetch()`) or directly query your db. Querying the db is possible bc `getStaticProps` only ever runs on the server-side, not the client-side. Although, bc of this you also won't be able to access things like query params or HTTP headers, cuz those are only available tat request time.

  - Example from https://nextjs.org/learn/basics/data-fetching/getstaticprops-details

  ```
      import someDatabaseSDK from 'someDatabaseSDK'

      const databaseClient = someDatabaseSDK.createClient(...)

      export async function getSortedPostsData() {
      // Instead of the file system,
      // fetch post data from a database
      return databaseClient.query('SELECT posts...')
      }
  ```

- `getStaticProps` is ONLY able to be exported from a `page` (a file within the `pages` directory)

### Server-side rendering (SSR)

- To use server-side rendering you use `getServerSideProps` which is pretty much set up the same way `getStaticProps` is, returning an object with props for your given component, except it receives `context` as a parameter.
- `context` will contain request specific parameters
- SSR should only be used if you need to pre-render a page with data that **needs** to be fetched at request time b/c the server will compute the result on every request.

**Note**: Not all data needs to be pre-rendered!

### SWR

- Next has their own React hook for data fetching called `SWR`, used for fetching data, particularly on the client-side. It can be used to handle caching, refetching, revalidation, etc.
