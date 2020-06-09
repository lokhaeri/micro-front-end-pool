# Example Next.js app with micro front ends

This examples shows how to dynamically import micro front ends.
This is just a general example with most easy setup - which is rendering UI Shell on client side.

## How does it work
Next.js is preloading and prerending the app, routing is delegated on Next.js (can be done in Node.js too) level, output templates have very little in them, as all UI Shell even though done in Next.js is rendered on client side, meaning less load on server and SSG engine.
The template, has a marker where to render micro front end application. To avoid possible namespace or other framework collision (like GraphQL or i18n) micro front end is loaded as an external script and DOM marker is added through DangerouslySetInnerHTML React attribute.




TODO:
As mentioned in the start this is just one of 3 possible solutions, a more complex example with Server Side Rendering will be developed later. and as a third solution html template can be prerendered but translations can kick in later.

TODO FOR FUN:
- Try to load other than React framework, for example Angular as a micro front end app.
