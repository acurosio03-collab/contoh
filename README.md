# Kampung Kecil — Website Resto

Website satu halaman untuk resto "Kampung Kecil", dibangun dari foto asli
tempatnya sendiri (bukan template/stok generik):
- Hero pakai video asli gerbang masuk (autoplay, muted, loop), bukan ilustrasi atau gradient buatan.
- Section "Menu" menampilkan video asli hidangan sebagai pelengkap kartu menu.
- Section "Cerita" berupa kolase foto ditempel miring seperti scrapbook.
- Section "Menu" berupa papan kayu gantung dengan tinggi tali acak.
- Section "Suasana" berupa galeri bento organik dari 5 foto asli restoran.
- Palet warna & tipografi diambil dari suasana asli tempatnya: bambu,
  lampu rattan (amber), dan kolam (teal) — serif hangat "Fraunces" + sans
  "DM Sans" + aksen tulisan tangan "Caveat" secukupnya.

## Ganti sebelum dipakai
1. Nomor WhatsApp (masih contoh: `628000000000`) — ada di 3 tempat: nav,
   hero, dan section "Kunjungi".
2. Alamat & jam buka asli di section "Kunjungi" dan footer (masih placeholder
   `[Kota]` / `Jl. Contoh Kampung No. 1`).
3. Menu di section "Menu" masih kategori contoh tanpa harga — ganti dengan
   daftar menu & harga asli.
4. Link "Lihat lokasi di Maps" masih pakai pencarian nama resto — ganti
   dengan link Google Maps lokasi persis kalau sudah ada.

## Struktur file
- `index.html`, `style.css`, `script.js`
- `assets/` — 5 foto asli resto (entrance, dining, pool-day, pool-night, balcony)
  + 2 video asli (hero: gerbang masuk, menu: cuplikan hidangan) + poster frame masing-masing

## Catatan video
Video autoplay disetel `muted` supaya bisa jalan otomatis di semua browser —
ini standar, jangan dihapus atributnya. Ukuran video cukup besar (±2–3MB),
kalau nanti dipasang ke hosting, pertimbangkan kompres ulang biar loading
lebih cepat di koneksi lambat.
