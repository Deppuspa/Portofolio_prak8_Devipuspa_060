Membuat project menggunakan React dan Vite dengan perintah npm create vite@latest, lalu memilih React (JavaScript). Masuk ke folder project dan menginstall Tailwind CSS v4, kemudian mengaktifkannya di vite.config.js serta menambahkan Tailwind ke index.css.

Selanjutnya, menginstall React Router dan menggunakan HashRouter pada main.jsx agar routing berjalan di GitHub Pages. Routing dasar dibuat di App.jsx untuk halaman Home, Projects, dan Contact.

Project kemudian di-build dengan npm run build hingga menghasilkan folder dist. Untuk deployment, menginstall gh-pages, menambahkan script deploy di package.json, lalu menjalankan npm run deploy. Terakhir, project dihubungkan ke repository GitHub dan di-push ke branch utama.