import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// assetstocache, mendaftarkan seluruh aset statis yang membentuk keseluruhan aplikasi(app shell)

const assetsToCache = [
  './',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x48.png',
  './icons/maskable_icon_x72.png',
  './icons/maskable_icon_x96.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
  // saat sw proses install, seluruh assets dari apps shell akan melakukan caching

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
  // menghapus cache lama yang sudah tidak digunakan

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
  // TODO: Add/get fetch request to/from caches
});
