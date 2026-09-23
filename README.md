# Portfolio Muhammad Faisal Rahman

Website portofolio statis untuk menampilkan kompetensi Junior Fullstack / Web Developer. Dibangun dengan React, Vite, Tailwind CSS, dan Wouter.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite (umumnya `http://localhost:5173`).

## Perintah penting

```bash
npm run lint   # memeriksa masalah kode
npm run build  # membuat versi production di folder dist/
npm run preview # melihat hasil build production secara lokal
```

## Struktur konten

Semua konten yang mudah berubah berada di `src/data/portfolioData.js`.

- Ubah profil, kontak, skill, proyek, atau organisasi dari file tersebut.
- Tambah proyek baru dengan bentuk data yang sama seperti object proyek lain.
- Gunakan `featured: true` jika proyek perlu muncul di Home.
- Isi `imageUrl` dan `demoUrl` hanya jika aset atau demo sudah tersedia.

## Checklist sebelum deploy

- [ ] Ganti `profile.contact.email` yang masih placeholder dengan email publik.
- [ ] Buka dan verifikasi URL GitHub, LinkedIn, serta repository setiap proyek.
- [ ] Tambahkan screenshot proyek dan isi `imageUrl` bila tersedia.
- [ ] Jalankan `npm run lint` dan `npm run build` tanpa error.
- [ ] Uji tampilan pada lebar 375px, 768px, dan 1280px.
- [ ] Uji navigasi Home, Projects, About, dan Contact.

## Catatan deployment

Hasil build berada di folder `dist/`. Folder itulah yang akan di-deploy ke hosting statis seperti Vercel atau Netlify setelah checklist selesai.
