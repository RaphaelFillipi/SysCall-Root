import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@mfe/auth",
  app: () => System.import<LifeCycles>("@mfe/auth"),
  activeWhen: ["/auth"],
});

start({
  urlRerouteOnly: true,
});

registerApplication({
  name: "@mfe/agenda",
  app: () => System.import<LifeCycles>("@mfe/agenda"),
  activeWhen: ["/agenda"],
});

registerApplication({
  name: "@mfe/sidebar",
  app: () => System.import<LifeCycles>("@mfe/sidebar"),
  activeWhen: ["/sidebar"],
});

registerApplication({
  name: "@mfe/profile",
  app: () => System.import<LifeCycles>("@mfe/profile"),
  activeWhen: ["/profile"],
});

start({
  urlRerouteOnly: true,
});
