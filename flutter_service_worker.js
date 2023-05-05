'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fdefa97eef0ffe1b76e819e879436708",
"assets/assets/animations/facebook.json": "f8195df204a8dc0241dc19124ff21afa",
"assets/assets/animations/github.json": "cd0a872a9da3a936662d0820c9027b45",
"assets/assets/animations/instagram2.json": "e5e4ed7b0d60a70a9318952615b032d4",
"assets/assets/animations/linkdin.json": "fc4c5c5b6a37c9c8dbb2e15d1184c684",
"assets/assets/animations/linkdin.png": "1b7d4f5b2025a53313e11dce7efec543",
"assets/assets/animations/thankyou.png": "6c2ef7cbdea1b4bf6b0c13ad8b38b478",
"assets/assets/animations/twitter.json": "4024a33c3cf1edd26f0653af23a91082",
"assets/assets/animations/wave.json": "2d27b677f9e5cda3a91bd25f9f788cc0",
"assets/assets/appRelatedImages/contactapp.png": "a5c613b3994d27c0a7302ca8dde2870f",
"assets/assets/appRelatedImages/currencyapp.png": "59bb58127e830bb8c3bcf15f44291779",
"assets/assets/appRelatedImages/memes.png": "8d7ac7476ce53e04746783d1ed693c85",
"assets/assets/appRelatedImages/mobile.png": "c1e9d585a55628a6d8e016274c2eba66",
"assets/assets/appRelatedImages/moviesapp.png": "b9b643e0b36188e2b2b48f62153f526f",
"assets/assets/appRelatedImages/newsapp.png": "08b06424d5da7e3236a6c6d277bfd91a",
"assets/assets/appRelatedImages/whetherapp.png": "36462230bf0e1a37d993838c3edea837",
"assets/assets/files/model.json": "f803f8a8826adc32432d1610402024db",
"assets/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/images/bg.jpg": "76aa17356e9a454d7a05f6e2b6ad24d1",
"assets/assets/images/imran.jpeg": "9b274a61bccf14889182309d39eeca9b",
"assets/assets/images/imran2.jpeg": "027885f1844102225054dc94615f4e00",
"assets/assets/tech_icons/adobe-xd.svg": "10baff4c898ad2ba358e36ef829d1c60",
"assets/assets/tech_icons/adobe_illustrator-icon.svg": "cf696c5bf3a1ae3912a410304e9cd526",
"assets/assets/tech_icons/css3-original-wordmark.svg": "3359119defc88a608e351bf75e18efc8",
"assets/assets/tech_icons/dartlang-icon.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/tech_icons/figma-icon.svg": "1c4f37801e58491b4778dcece69baadd",
"assets/assets/tech_icons/firebase-icon.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/tech_icons/flutterio-icon.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/tech_icons/getpostman-icon.svg": "f37754ebbdd47159e4d8d382466c474e",
"assets/assets/tech_icons/git-scm-icon.svg": "adcab6a564a11096dc35f681cfb02ce6",
"assets/assets/tech_icons/html5-original-wordmark.svg": "cba10c7c1ce484b82ab9b156b9abc74a",
"assets/assets/tech_icons/java-original.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/assets/tech_icons/kotlinlang-icon.svg": "73c815b94511db676068d478c1e80875",
"assets/assets/tech_icons/microsoft-sql-server-logo.svg": "75adaa49565b2e8ef0fa8a150866ce38",
"assets/assets/tech_icons/mysql-original-wordmark.svg": "2c7563f40818e2fe39b32715444dc790",
"assets/assets/tech_icons/nodejs-original-wordmark.svg": "4d315923fdb4ed913816974c5cdd8004",
"assets/assets/tech_icons/photoshop-line.svg": "f012a100ba46a3503cb88372c59492d3",
"assets/assets/tech_icons/php-original.svg": "fea4d54f3adf48d44cedd0a745841a4a",
"assets/FontManifest.json": "9f41171d536f1ecb9faa171f91209e7a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/loading.gif": "2902b2107feb421cdf04bf04ea889be7",
"assets/NOTICES": "a63d803b4b596684c4a122406dfa36ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "a99b77e0e29addbe90cd4c821ddf46f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d67a2135bd23e27867795e4afb620ac1",
"/": "d67a2135bd23e27867795e4afb620ac1",
"main.dart.js": "3ca82eb2984c2ddd171d1cb68452983f",
"manifest.json": "6fabb243561eb5432eaee89b374dc041",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
