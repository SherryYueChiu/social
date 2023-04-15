/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/bootstrap-grid.css","7b52e20ede6580765c2c89bda1f1aa32"],["css/bootstrap-grid.css.map","3d0d17468411df256d08bce20bba9fa0"],["css/bootstrap-grid.min.css","cc2e938b4d105a8a92babefec483e4fe"],["css/bootstrap-grid.min.css.map","61a768383bbde9e965559f31ccf1c126"],["css/bootstrap-reboot.css","ec10e174c52e1f2e2e9d6885f4481988"],["css/bootstrap-reboot.css.map","c49a2062b1f4afe8ee346105547bc9f0"],["css/bootstrap-reboot.min.css","40e1ba5a8e4af033bc65a517659b63cd"],["css/bootstrap-reboot.min.css.map","4c139e23170ea77e6ba4957ac31ead16"],["css/bootstrap.css","dd16fa2688a9e68aafa535bc97a2fd5d"],["css/bootstrap.css.map","9864d47d450a0382cdcc141947a13813"],["css/bootstrap.min.css","d66fe393345e62baa20253a974cdc8d2"],["css/bootstrap.min.css.map","8569328fe58981e7ad4406f67e7db34f"],["css/index.css","c9bda2a04f5ad20c372d464dcd5d3be8"],["css/index.css.map","57ab3dd0951917f9bedf84fbe3741697"],["css/index.scss","6f6b7a8c607e7ae77923ec1a784226cd"],["images/avatar/FengLePark.jpg","fe43e0abdf30551554b29fb3991ebe8a"],["images/avatar/Sketch.jpg","8b4a43d59c958d5c166b8d182677bba9"],["images/avatar/ZhongYanGingYuan.jpg","7c7b4e89d7b85fc7a0a9282119200ac0"],["index.html","77ec2563ef9a2359797e15df59b3c363"],["js/app.js","bbf46aaf0d80c43a9c5b4bd0a6cc587e"],["js/calendar.js","8c8d3da79e4b8eb8248a306071044022"],["js/clipboard.min.js","1695ade2efc18cc627b47ae406293f48"],["js/index.js","fb9434ad63bdef42bdebf233796febbd"],["js/jquery-3.6.0.slim.min.js","03f22b19c0cb2319e92d4d37e94ee6ef"],["js/lazysizes.min.js","b82368b55ab941d0bb7db421e1084d6c"],["js/ls.bgset.min.js","aa470a4ac0ec1e9670357f3fbd815540"],["js/medias.js","2d67accad9e21088bfdd6101710f5dca"],["js/popper.min.js","855075c14fed65779e9226874c12d223"],["js/posts.js","5f55006fa6708fbc4202841b199d3a8b"],["media/thumbnail/1683Coffee230105.webp","b417788caa2d75ab2416c832ea4e974d"],["media/thumbnail/1683Coffee230105_2.webp","a1aa873a5cd6fbaf25b4dc7b3c875bb7"],["media/thumbnail/APK_mod220814.webp","341be7256ec9e8e06c02be09ac7d5a01"],["media/thumbnail/DiveCubeOW.webp","31e7dea0dacd67055a17e18d8d405eec"],["media/thumbnail/DokiMaidCafe221225.webp","b22a1744cfc6a72afcf78ee4674f4fa4"],["media/thumbnail/HoloFace220911.webp","4c439daddec013eafa64aa10dbbe266f"],["media/thumbnail/JiHaoShiJi220807.webp","5e6b401a87af898623fe636f89bfc952"],["media/thumbnail/JiHaoShiJi220820.webp","87dd95b24235f4e778b07baeb79dc016"],["media/thumbnail/JiHaoShiJi221105.webp","6c22987386dfc2afad817b1c5ae7cc60"],["media/thumbnail/JiaRiZhiSen221211.webp","fbe98e018fdddeef6afbf22f1bdd5ada"],["media/thumbnail/KengDingOW.webp","4e11eb92e6a08b3c9603e81e2aa72c65"],["media/thumbnail/LiPaoKart221022.webp","ae63805e4aadb663554727e3dc876fa1"],["media/thumbnail/QingXinHotSpring220913.webp","28593d081d62c1bd3a1f1022231484a3"],["media/thumbnail/SunMoonLakeSwimming220904.webp","f588623736d6ad389ec1ffdec3ca4660"],["media/thumbnail/TriffBar230219.webp","a5b06bec695ea68d60a31f63ca58b4f7"],["media/thumbnail/WaiPuWangYouGu221022.webp","cec1cbd35f6a8b59a75241eef887a821"],["media/thumbnail/XingXingCafe221210.webp","3cc036c1088277f13e6f8281fc71adbc"],["media/thumbnail/aiPaoKa230110.webp","f574f5c3d0935ad899d9d3c4c762e5e6"],["media/thumbnail/bodyflight220423.webp","2ccf5e4a2662e45ece8620ea5dab1722"],["media/thumbnail/buYeTianCafe.webp","97ab70af582208d5a5dd4f64d5405949"],["media/thumbnail/bubbleSoccer230211.webp","b779496f59b408b6d9b0146e8a7dbd3d"],["media/thumbnail/bubbles221007.webp","08abb474ef73505d868cecb9e396f1bf"],["media/thumbnail/caier220427.webp","4c02f2fb4401e91658ce4e9f14754e04"],["media/thumbnail/capsuleHotel230218.webp","77f381c506d40670cbc51e8c8ea592a6"],["media/thumbnail/centralPark221231.webp","831b01374529bf2bcae6fa9f2898e030"],["media/thumbnail/centralPark221231_2.webp","c21d3476d5b2f0b15db450bbb0be12fc"],["media/thumbnail/centralPark221231_3.webp","10b8dff133b84c51f265a61a3e8fa053"],["media/thumbnail/centralPark221231_4.webp","6b743dfeb8c1f0cbab5cdf94013731e9"],["media/thumbnail/chittyMood220226.webp","be8d85e6819c004cc399ee3694b459e1"],["media/thumbnail/chunshanPhoto221225.webp","ae5d8c69b84533587097168a6837eb83"],["media/thumbnail/citylink230312.webp","e5c1543bbb5d9ddfdd90bc30cc18e0cb"],["media/thumbnail/climbCafe230126.webp","867f8ef5537ac5aa916829dccd0ecd83"],["media/thumbnail/climbCafe230126_1.webp","e50d3fc49571eba5fc0e45149b22632e"],["media/thumbnail/climbCafe230126_2.webp","be97b4859ce627a674b0abe167db8414"],["media/thumbnail/climbCafe230126_3.webp","7b236f0080aa9283dfa80d6d2d863a08"],["media/thumbnail/dumplingGift.webp","27eaecc36b95873cb52e8ba9c8dc37d5"],["media/thumbnail/feiWenXue230106.webp","8684e3dfebbadbf3578de8e0245f6949"],["media/thumbnail/feiWenXue230106_1.webp","af6625652c777991aa9dc29123019b05"],["media/thumbnail/jojozoo230126.webp","66a5738faf6e3d1bef9fffd348636e91"],["media/thumbnail/jojozoo230126_1.webp","bfd15d7023dc8feeaa9f369f9cec5fac"],["media/thumbnail/jojozoo230126_10.webp","b72074f36fd4bcaa1a1640f51763d162"],["media/thumbnail/jojozoo230126_2.webp","c44b98dac2f18bc2e692b3c8f469dc56"],["media/thumbnail/jojozoo230126_3.webp","5e1fe333ca2f215235d8cae0041a0505"],["media/thumbnail/jojozoo230126_4.webp","7254d21689e5d17ca0b6fc701ebe9f46"],["media/thumbnail/jojozoo230126_5.webp","876d2aa200853b8867737e41f3277e71"],["media/thumbnail/jojozoo230126_6.webp","d90e37ec6950ad0da0236f7749a961d6"],["media/thumbnail/jojozoo230126_7.webp","cc079d1275a120d81f456374358f37fc"],["media/thumbnail/jojozoo230126_8.webp","758d81452e32eaeeaabf6260c5e36492"],["media/thumbnail/jojozoo230126_9.webp","0074158bfa707ae547c5dc7b2d911eb7"],["media/thumbnail/knifeHealing220918.webp","fcbbcbfc97afc0fef339689b199ad670"],["media/thumbnail/linDongFarm230122.webp","7eee444fea08aabbbf04c6206a915964"],["media/thumbnail/linDongFarm230122_1.webp","7df32caa7727eb29ba21bceb404aada8"],["media/thumbnail/linDongFarm230122_2.webp","05af58df0d85a167fe1ad289187f0dbb"],["media/thumbnail/linDongFarm230122_3.webp","c89dc68b861d92303532e8b3c59e19e6"],["media/thumbnail/linDongFarm230122_4.webp","a080cd2d3f77ae50c21d7ae0b089e4c0"],["media/thumbnail/lipaoMala221009.webp","398bee435ef82ff757f79d7cb00ee098"],["media/thumbnail/liuChuan230101.webp","1db80459679785687540e14d5f3060a9"],["media/thumbnail/liuChuan230101_1.webp","bae428383d07e27fa24ea594a10ff23d"],["media/thumbnail/liuChuan230101_3.webp","16dfd8db4239959bf2fac317defcf62e"],["media/thumbnail/loyalSpring230403.webp","3578bfc00c7b3c6764a92b6885fb7e25"],["media/thumbnail/luYaCoffee230108.webp","e079de408648694bd57e9efaa4d5c2fd"],["media/thumbnail/luYaCoffee230108_1.webp","71285735bf4275f12cb7f50fe5dbc55c"],["media/thumbnail/luYaCoffee230108_3.webp","40b36ee95308089c8208280ce8462a4c"],["media/thumbnail/maoTouYingSquare230102.webp","d48353116cf9ffad8e63b31edd3512b2"],["media/thumbnail/maoTouYingSquare230102_2.webp","70a2ce749f236f306b79e1886783ce1d"],["media/thumbnail/maoTouYingSquare230102_3.webp","0167945af6463bc33fda7b309521e8c8"],["media/thumbnail/mitaka230108.webp","047cf72db47c2a73a84ce24bfcb05f2e"],["media/thumbnail/openmic.webp","7e96dcc5d2d077e7b48267eb94e8f81a"],["media/thumbnail/paragliding220604.webp","5b39da69d9d9bfc96d90ecbb8947c1f7"],["media/thumbnail/photoBoth230107.webp","fa66f19aeda001c5df53d10cd21d5129"],["media/thumbnail/pointerDigitalClock.webp","5520e7be761492ed7de2e5fc471c0919"],["media/thumbnail/ricoNocheCafe.webp","8b800bd17adefc725b060594ee7f2d2c"],["media/thumbnail/ricoNocheCafe_1.webp","7e97a84287e1c915bda06a906b7aad60"],["media/thumbnail/ricoNocheCafe_3.webp","4fd7ac2d12cfb2fee58863c1da2cddb5"],["media/thumbnail/rollerSkating.webp","33212a8ca808c884adfeb6bc5fea6416"],["media/thumbnail/rouQiuSenLin.webp","609e0f76d9323eac9aca978602b6f461"],["media/thumbnail/sing220918.webp","bf2aa12ef266bf5aff393766a1a396e4"],["media/thumbnail/slide220929.webp","350714f07730d4bee4810cc231ed5c16"],["media/thumbnail/swimming220528.webp","d60d73d6fac19b5eeaeb1e0c4a2c75ac"],["media/thumbnail/taipei230402.webp","afd1ac7e1401fc21f1b2ed362067a5bd"],["media/thumbnail/taiwanBlvdChallenge220605.webp","c7971491b575a212fad5d49b3812273c"],["media/thumbnail/taoYueCoffee220515.webp","6a574c0d113efc638e6391a2184e0b90"],["media/thumbnail/theSunHotSpring221001.webp","0df232507da16a4cbb48c831f61e3f58"],["media/thumbnail/tiaoGaoCafe230125.webp","d65d1e44cb173462f51bd58a9bafe3bf"],["media/thumbnail/twocafe221009.webp","be426ff97338496df922525075f42ae2"],["media/thumbnail/wangJingCoffee230106.webp","63559500a0d57834f9f643088e9c9cfc"],["media/thumbnail/xingXinHotSpring.webp","df647365632c926dabcbe80b85ec6a3a"],["media/thumbnail/xingYueTianKongCafe.webp","2af420c4c8729a388054c978ff30a683"],["media/thumbnail/yilan230404.webp","ab1cdb5ca04cc9332a385a383707cd40"],["media/thumbnail/yunHeXingKong230115.webp","1c489b4c0de2e39898329f492df5b347"],["media/thumbnail/yunHeXingKong230115_1.webp","d47797da676ac06bfa691f90754d07ad"],["media/thumbnail/zhongYangGongYuan230305.webp","2bd8d97dab175934070a407c8ab0f5b7"],["media/thumbnail/zili230124.webp","f7bd452e6a41432fc7769f20dd86d58b"],["media/thumbnail/zili230124_2.webp","f7bd452e6a41432fc7769f20dd86d58b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/.*/, toolbox.fastest, {});




