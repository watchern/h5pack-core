/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-86c9b217'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/_...all_-DB55ay4Q.js",
    "revision": null
  }, {
    "url": "assets/_...all_-legacy-BKxbf7h7.js",
    "revision": null
  }, {
    "url": "assets/en-US-B9J-G5JE.js",
    "revision": null
  }, {
    "url": "assets/en-US-legacy-BGEerD1N.js",
    "revision": null
  }, {
    "url": "assets/index-BliXucuV.js",
    "revision": null
  }, {
    "url": "assets/index-BXpmkWsB.js",
    "revision": null
  }, {
    "url": "assets/index-C_b8hplf.js",
    "revision": null
  }, {
    "url": "assets/index-CFSFc5co.js",
    "revision": null
  }, {
    "url": "assets/index-Cm9E2GDo.js",
    "revision": null
  }, {
    "url": "assets/index-CTulDoT8.js",
    "revision": null
  }, {
    "url": "assets/index-CUjX46ZY.js",
    "revision": null
  }, {
    "url": "assets/index-CX0LkVW1.js",
    "revision": null
  }, {
    "url": "assets/index-CY7U-C6U.js",
    "revision": null
  }, {
    "url": "assets/index-D0hWZXC0.js",
    "revision": null
  }, {
    "url": "assets/index-D8O4A3t3.js",
    "revision": null
  }, {
    "url": "assets/index-De8W_u3S.js",
    "revision": null
  }, {
    "url": "assets/index-DjXSGzVO.js",
    "revision": null
  }, {
    "url": "assets/index-KqYi8nBH.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-0t8JmDCt.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-a9oWbRRZ.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-BGcbzosc.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-CqmKfJIV.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-Cx6YTntw.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-Cye9tU36.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-D-lKK0eD.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-D0Km6zOn.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-D39K3ktw.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-DaOWFFEC.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-DEnYYchP.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-Dne4NqDY.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-DpsS-lfO.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-DWsDcWml.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-DxQ-0KJt.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-oT1tbKix.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-R9XIwlbI.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-yTwRgCB1.js",
    "revision": null
  }, {
    "url": "assets/index-lJ5Vk__L.js",
    "revision": null
  }, {
    "url": "assets/index-oHtZATCW.js",
    "revision": null
  }, {
    "url": "assets/index-oje8qQRB.js",
    "revision": null
  }, {
    "url": "assets/index-RCnV9MeG.js",
    "revision": null
  }, {
    "url": "assets/inline-px-to-vw-CrALOm_x.js",
    "revision": null
  }, {
    "url": "assets/inline-px-to-vw-legacy-JEKdfdxu.js",
    "revision": null
  }, {
    "url": "assets/polyfills-legacy-PQ_NF2JD.js",
    "revision": null
  }, {
    "url": "assets/route-block-B_A1xBdJ.js",
    "revision": null
  }, {
    "url": "assets/route-block-legacy-wdPIt6g0.js",
    "revision": null
  }, {
    "url": "assets/style-6b7_jfDG.css",
    "revision": null
  }, {
    "url": "assets/toNumber-BA28v8oo.js",
    "revision": null
  }, {
    "url": "assets/toNumber-legacy-Dr0V64cZ.js",
    "revision": null
  }, {
    "url": "assets/use-id-BQTAkVon.js",
    "revision": null
  }, {
    "url": "assets/use-id-legacy-C0n7ZrS5.js",
    "revision": null
  }, {
    "url": "assets/zh-CN-legacy-CFj66MNd.js",
    "revision": null
  }, {
    "url": "assets/zh-CN-RmQdZnYC.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "2196e4ee1695313017535ff9ef8e656b"
  }, {
    "url": "registerSW.js",
    "revision": "402b66900e731ca748771b6fc5e7a068"
  }, {
    "url": "favicon.svg",
    "revision": "5e61da5c606901b58c5e28c370cad943"
  }, {
    "url": "pwa-192x192.png",
    "revision": "1295b2399a65986b617cf4aafd2e19fb"
  }, {
    "url": "pwa-512x512.png",
    "revision": "cc6117e96c29c8310db089c9363b8ffe"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "c847932962d6e527cf68076180f037a5"
  }, {
    "url": "manifest.webmanifest",
    "revision": "2b11b66c9d99bafcf24484c1d7d0c997"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
