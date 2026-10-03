const CACHE_NAME = 'v5.0.2-Prismatic';

const CORE_URLS = [
    '/',
    '/index.html',
    './SandBox3D/sb3d_page',
    './RiftRunners2D/rr2d_page',
    './RiftRunners2D/RiftRunners2D',
    './SandBox3D/SandBox3D_PC',
    './SandBox3D/SandBox3D_Mobile',
    './Other/ismycompteureron',
    './Other/devcheck',
    './Other/notmoving',
    './Other/gifview',
    './Other/mathlol',
    './Other/coinsort',
    './Other/websend',
    './Tools/lapscan',
    './Tools/pixelpeek',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Other/js/ismycompteureron.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Other/js/devcheck.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Other/js/notmoving.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Other/js/gifview.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Other/js/mathlol.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Other/js/coinsort.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Other/js/websend.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Tools/js/lapscan.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/Tools/js/pixelpeek.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/project-assets/monsieurshaman.png',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/project-assets/shinobiakira.png',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/project-assets/haku.png',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/project-assets/logo.png',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/project-assets/logo2.png',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/project-assets/logo192.png',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/project-assets/logo512.png',
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500;700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
];

const GAME_URLS = [
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/sb3dfavicon.svg',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/sb3dammo.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/sb3dmatyou.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/sb3duianim_pc.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/sb3duianim_mobile.js',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/blind.mp4',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/explode.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/neutral/neu1.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/neutral/neu2.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/neutral/neu3.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/evening/eve1.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/evening/eve2.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/evening/eve3.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/midnight/mid1.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/midnight/mid2.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/midnight/mid3.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/project-prism@main/SandBox3D/asset/midnight/mid4.mp3',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/sb3d-assets@main/obj_glass.png',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/sb3d-assets@main/ground_texturepbr.zip',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/sb3d-assets@main/rampstairs_texturepbr.zip',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/sb3d-assets@main/pillars_texturepbr.zip',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/sb3d-assets@main/pool_texturepbr.zip',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/sb3d-assets@main/rubber_texturepbr.zip',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/sb3d-assets@main/ice_texturepbr.zip',
    'https://cdn.jsdelivr.net/gh/monsieurshaman/sb3d-assets@main/allobj_texturepbr.zip',
    'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.60.0/phaser.min.js',
    'https://cdn.jsdelivr.net/npm/babylonjs@9.11.0/babylon.js',
    'https://cdnjs.cloudflare.com/ajax/libs/cannon.js/0.6.2/cannon.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
    'https://cdn.babylonjs.com/ammo.js',
    'https://cdn.jsdelivr.net/npm/babylonjs-loaders@9.11.0/babylonjs.loaders.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://assets.babylonjs.com/textures/flare.png',
];

self.addEventListener('install', e => {
    self.skipWaiting();

    const params = new URLSearchParams(self.location.search);
    const isStandalone = params.get('standalone') === 'true';
    const forceInstall = params.get('forceInstall') === 'true';
    const includeGames = params.get('includeGames') === 'true';

    if (!isStandalone && !forceInstall) {
        e.waitUntil(Promise.resolve());
        return;
    }

    const urlsToCache = includeGames ? [...CORE_URLS, ...GAME_URLS] : CORE_URLS;
    const CHECK_TIMEOUT_MS = 8000;
    const DOWNLOAD_TIMEOUT_MS = 45000;

    async function broadcast(msg) {
        const clientsList = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
        for (const client of clientsList) client.postMessage(msg);
    }

    function fetchWithTimeout(url, opts, ms) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), ms);
        return fetch(url, Object.assign({}, opts, { signal: controller.signal }))
            .finally(() => clearTimeout(timer));
    }

    async function runCheckPhase() {
        const total = urlsToCache.length;
        await broadcast({ type: 'PHASE_START', phase: 'check', total });

        let processed = 0;
        const results = await Promise.all(urlsToCache.map(async (url) => {
            const absoluteUrl = new URL(url, self.location.origin).href;
            let ok = false;
            let cached = false;

            try {
                const hit = await caches.match(absoluteUrl);
                if (hit) { cached = true; ok = true; }
            } catch (_) { }

            if (!cached) {
                try {
                    const res = await fetchWithTimeout(absoluteUrl, { method: 'HEAD', cache: 'no-store' }, CHECK_TIMEOUT_MS);
                    if (res.status === 200 || res.status === 304) ok = true;
                    else if (res.status === 405 || res.status === 501) {
                        const res2 = await fetchWithTimeout(absoluteUrl, { cache: 'no-store' }, CHECK_TIMEOUT_MS);
                        ok = res2.status === 200 || res2.status === 304;
                    }
                } catch (_) {
                    try {
                        const res2 = await fetchWithTimeout(absoluteUrl, { cache: 'no-store' }, CHECK_TIMEOUT_MS);
                        ok = res2.status === 200 || res2.status === 304;
                    } catch (_) { ok = false; }
                }
            }

            processed++;
            await broadcast({
                type: 'PHASE_PROGRESS',
                phase: 'check',
                processed,
                total,
                url: absoluteUrl,
                ok
            });
            return { absoluteUrl, ok, cached };
        }));

        const okCount = results.filter(r => r.ok).length;
        const skippedCount = results.length - okCount;

        await broadcast({
            type: 'PHASE_DONE',
            phase: 'check',
            ok: okCount,
            skipped: skippedCount,
            total
        });

        return results;
    }

    async function runDownloadPhase(results) {
        const downloadable = results.filter(r => r.ok);
        const total = downloadable.length;

        await broadcast({ type: 'PHASE_START', phase: 'download', total });

        if (total === 0) {
            await broadcast({ type: 'PHASE_DONE', phase: 'download', processed: 0, total: 0, errors: 0 });
            return [];
        }

        let processed = 0;
        let errors = 0;
        const downloaded = [];

        await Promise.all(downloadable.map(async (entry) => {
            if (entry.cached) {
                downloaded.push({ absoluteUrl: entry.absoluteUrl, cached: true, blob: null, contentType: null });
                processed++;
                await broadcast({
                    type: 'PHASE_PROGRESS',
                    phase: 'download',
                    processed,
                    total,
                    errors
                });
                return;
            }

            try {
                const response = await fetchWithTimeout(entry.absoluteUrl, { cache: 'reload' }, DOWNLOAD_TIMEOUT_MS);
                if (response.status !== 200) {
                    errors++;
                    processed++;
                    await broadcast({ type: 'PHASE_PROGRESS', phase: 'download', processed, total, errors });
                    return;
                }

                const blob = await response.blob();
                const contentType = response.headers.get('content-type') || 'application/octet-stream';
                downloaded.push({ absoluteUrl: entry.absoluteUrl, cached: false, blob, contentType });
                processed++;
                await broadcast({ type: 'PHASE_PROGRESS', phase: 'download', processed, total, errors });
            } catch (err) {
                errors++;
                processed++;
                await broadcast({ type: 'PHASE_PROGRESS', phase: 'download', processed, total, errors });
            }
        }));

        await broadcast({
            type: 'PHASE_DONE',
            phase: 'download',
            processed,
            total,
            errors
        });

        return downloaded;
    }

    async function runStorePhase(downloaded) {
        const total = downloaded.length;
        await broadcast({ type: 'PHASE_START', phase: 'store', total });

        if (total === 0) {
            await broadcast({ type: 'PHASE_DONE', phase: 'store', stored: 0, total: 0, errors: 0 });
            return;
        }

        const cache = await caches.open(CACHE_NAME);
        let stored = 0;
        let errors = 0;

        for (const item of downloaded) {
            try {
                if (item.cached) {
                    stored++;
                    await broadcast({ type: 'PHASE_PROGRESS', phase: 'store', processed: stored, total, errors });
                    continue;
                }

                if (item.absoluteUrl.includes('fonts.googleapis.com')) {
                    try {
                        const cssText = await item.blob.text();
                        const fontUrls = [...cssText.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map(m => m[1]);
                        for (const fontUrl of fontUrls) {
                            try {
                                const fontRes = await fetchWithTimeout(fontUrl, {}, DOWNLOAD_TIMEOUT_MS);
                                if (fontRes.status !== 200) continue;
                                const fontBlob = await fontRes.blob();
                                const fontType = fontRes.headers.get('content-type') || 'application/octet-stream';
                                await cache.put(fontUrl, new Response(fontBlob.slice(0), {
                                    status: 200,
                                    headers: { 'Content-Type': fontType }
                                }));
                                if (isStandalone) {
                                    try {
                                        await setIDBData(fontUrl, { blob: fontBlob.slice(0), type: fontType });
                                    } catch (_) { }
                                }
                            } catch (_) { }
                        }
                    } catch (_) { }
                }

                await cache.put(item.absoluteUrl, new Response(item.blob.slice(0), {
                    status: 200,
                    headers: { 'Content-Type': item.contentType }
                }));

                if (isStandalone) {
                    try {
                        await setIDBData(item.absoluteUrl, { blob: item.blob.slice(0), type: item.contentType });
                    } catch (_) {
                        await deleteIDBData(item.absoluteUrl).catch(() => { });
                    }
                }

                stored++;
                await broadcast({ type: 'PHASE_PROGRESS', phase: 'store', processed: stored, total, errors });
            } catch (err) {
                errors++;
                stored++;
                await deleteIDBData(item.absoluteUrl).catch(() => { });
                await broadcast({ type: 'PHASE_PROGRESS', phase: 'store', processed: stored, total, errors });
            }
        }

        await broadcast({
            type: 'PHASE_DONE',
            phase: 'store',
            stored,
            total,
            errors
        });
    }

    e.waitUntil((async () => {
        try {
            const results = await runCheckPhase();
            const downloaded = await runDownloadPhase(results);
            await runStorePhase(downloaded);
            await broadcast({ type: 'PIPELINE_DONE' });
        } catch (err) {
            console.error('[Prism SW] Pipeline failed:', err);
            await broadcast({ type: 'PIPELINE_ERROR', error: String(err) });
        }
    })());
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

function getDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('PrismDB', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('dynamic-cache')) {
                db.createObjectStore('dynamic-cache');
            }
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            db.onversionchange = () => {
                db.close();
            };
            resolve(db);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function getIDBData(key) {
    return getDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('dynamic-cache', 'readonly');
            const store = transaction.objectStore('dynamic-cache');
            const request = store.get(key);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    });
}

function setIDBData(key, value) {
    return getDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('dynamic-cache', 'readwrite');
            const store = transaction.objectStore('dynamic-cache');
            const request = store.put(value, key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    });
}

function deleteIDBData(key) {
    return getDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('dynamic-cache', 'readwrite');
            const store = transaction.objectStore('dynamic-cache');
            const request = store.delete(key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    });
}

self.addEventListener('fetch', e => {
    const url = e.request.url;

    if (e.request.method !== 'GET' || url.startsWith('chrome-extension://')) return;

    const params = new URLSearchParams(self.location.search);
    const isStandalone = params.get('standalone') === 'true';

    if (isStandalone && url.includes('giphy.com')) {
        e.respondWith(fetch(e.request));
        return;
    }

    e.respondWith((async () => {
        const cacheMatch = await caches.match(e.request);
        if (cacheMatch) return cacheMatch;

        try {
            const idbData = await getIDBData(url);
            if (idbData) {
                if (idbData.blob) {
                    return new Response(idbData.blob, {
                        headers: { 'Content-Type': idbData.type || 'application/octet-stream' }
                    });
                }
                return new Response(JSON.stringify(idbData), {
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        } catch (_) { }

        try {
            return await fetch(e.request);
        } catch (err) {
            if (url.includes('/api/settings') || url.includes('/userdata/')) {
                return new Response(JSON.stringify({ error: 'Offline' }), {
                    status: 503,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            return new Response('', { status: 503 });
        }
    })());
});
