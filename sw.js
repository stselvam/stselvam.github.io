var staticCacheName = "stselvam_gp_pwa";
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                "/manifest.json",
                "/bower_components/foundation-sites/dist/css/foundation.min.css",
                "/bower_components/jqcloud2/dist/jqcloud.min.css",
                "/bower_components/normalize-css/normalize.css",
                "/bower_components/custombox/dist/custombox.min.css",
                "/assets/fonts/foundation-icons/foundation-icons.css",
                "/assets/styles/styles.css",
                "/bower_components/jquery/dist/jquery.min.js",
                "/bower_components/foundation-sites/dist/js/foundation.min.js",
                "/bower_components/typed.js/dist/typed.min.js",
                "/bower_components/jqcloud2/dist/jqcloud.min.js",
                "/bower_components/custombox/dist/custombox.min.js",
                "/assets/images/askanandsp.jpg",
                "/assets/images/axsus.png",
                "/assets/images/chennaiyilnellai.jpg",
                "/assets/images/thiruvadi.pythonanywhere.com.jpg",
                "/assets/images/amazon-clone.jpg",
                "/assets/images/tiktok-mern-clone.jpg",
                "/assets/images/netflix-clone.jpg",
                "/assets/images/simple-zoom-clone.jpg",
                "/assets/images/simple-covid-tracker.jpg",
                "/assets/scripts/gsap.js",
                "/assets/scripts/app.js",
                "/sw.js"
            ]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});