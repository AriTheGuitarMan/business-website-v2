// import { WorkerEntrypoint } from "cloudflare:workers";

// export default class extends WorkerEntrypoint<Env> {
//   async fetch(request: Request, env, ctx) {
//     // You can perform checks before fetching assets
//     const user = await checkIfRequestIsAuthenticated(request);

//     if (!user) {
//       return new Response("Unauthorized", { status: 401 });
//     }

//     // You can then just fetch the assets as normal, or you could pass in a custom Request object here if you wanted to fetch some other specific asset
//     const assetResponse = await this.env.ASSETS.fetch(request);

//    const url = "https://waldfamilyoffice.com";
//    const modifiedRequest = new Request(url, request);

//     // You can return static asset response as-is, or you can transform them with something like HTMLRewriter
//     return new HTMLRewriter()
//       .on("#user", {
//         element(element) {
//           element.setInnerContent(JSON.stringify({ name: user.name }));
//         },
//       })
//       .transform(assetResponse);
//   }
// }

// export default {
//   async fetch(request, env, ctx) {
//  const url = "https://waldfamilyoffice.com";
//  if (url){
//       return Response.redirect(url, 301);
//  }
// const modifiedRequest = new Request(url, request);
    // return await fetch(remote, request);
// return new Response("This Is The Wald Family Office Website.", {
//       headers: { "content-type": "text/plain" },
//     });

// import html from './index.html'

// async function handleRequest(request, env) {
//   const output = html
//   const headers = { 'Content-Type': 'text/html' }
//   return new Response(output, { headers })
// }


export default {
  async fetch(request): Promise<Response> {
    const html = `
    
    
    
    
    
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HooBank</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

    
    
    
    `;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
} satisfies ExportedHandler;

// npm audit fix; npx wrangler dev; npx wrangler deploy; npm run preview:worker; npm run deploy:worker;
//npx update-browserslist-db@latest