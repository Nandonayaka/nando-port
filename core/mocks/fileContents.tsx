export const mockFileContents: Record<string, string> = {
    'Nandonayaka.jsx': `/**
 * =========================================================================
 *   HALO! SELAMAT DATANG DI FILE PROFIL SAYA
 * =========================================================================
 * 
 *  Jangan bingung melihat tulisan di sini ya! 
 *  Ini adalah cara saya (seorang programmer) memperkenalkan diri.
 *  Kamu cukup membaca tulisan yang berwarna hijau atau teks biasa.
 * 
 * =========================================================================
 */

import React from 'react';

// Ini adalah "komponen" utama dari diri saya
export default function Nandonayaka() {
  
  // Data pribadi saya
  const namaPanggilan = "Nando";
  const keahlian = "Frontend Web Developer";
  const hobi = ["Ngoding", "Desain Antarmuka", "Problem Solving"];

  /*
   * VISI SAYA:
   * Mengubah ide-ide rumit menjadi tampilan website yang sangat cantik,
   * mudah digunakan, dan cepat diakses oleh siapa saja.
   */
  const visiUtama = "Menciptakan pengalaman digital yang luar biasa";

  // Kode di bawah ini adalah ibarat apa yang akan kamu lihat di kenyataan
  return (
    <div id="profil-nando">
      <h1>Halo Semuanya! Panggil saja saya {namaPanggilan}</h1>
      <p>Saya bekerja dan berkarya sebagai {keahlian}</p>
      
      <h3>Apa yang saya lakukan?</h3>
      <p>{visiUtama}</p>
    </div>
  );
}`,

    'About.md': `<!-- 
  ==============================================
  TENTANG SAYA (DITULIS DALAM FORMAT MARKDOWN)
  ==============================================
  Ini adalah format yang sering dipakai programmer untuk 
  membuat dokumentasi atau catatan yang rapi.
-->

# Hai! Salam Kenal 

Nama saya Nando Nayaka. Saya sangat menyukai dunia teknologi, terutama dalam hal membuat website yang interaktif. Bagi saya, layar komputer adalah sebuah kanvas kosong, dan kode pemograman adalah kuas yang saya gunakan untuk melukis karya saya.

## Kenapa Memilih Saya?
1. **Perhatian pada Detail**: Saya sangat peduli pada kerapian desain.
2. **Fokus pada Pengguna**: Percuma website cantik kalau membingungkan saat dipakai.
3. **Terus Belajar**: Teknologi berkembang pesat, jadi saya tidak pernah berhenti belajar.

## Mari Terhubung! 
Jika Anda tertarik untuk ngobrol, kolaborasi, atau melihat proyek saya yang lain, silakan mampir ke saluran-saluran di bawah ini:
- 📷 **Instagram**: [@nandonayaka_](https://instagram.com/nandonayaka_)
- 💻 **GitHub**: [github.com/nandonayaka](https://github.com/nandonayaka)
- 💬 **WhatsApp**: [+62 812-XXXX-XXXX] (Silakan DM untuk nomor lengkap)

> "Kode yang baik bukanlah kode yang paling pintar, melainkan kode yang paling mudah dipahami oleh programmer lain."`,

    'FrontendDev.tsx': `// ==========================================
// KEAHLIAN SAYA DI BIDANG FRONTEND (TAMPILAN WEB)
// ==========================================
// Di bawah ini adalah daftar "alat perang" (teknologi)
// yang biasa saya gunakan untuk membuat website.

export const SenjataUtama = [
  "React JS (Untuk membuat tampilan serba interaktif)",
  "Next.js (Bikin website jadi super cepat dan SEO friendly)",
  "Tailwind CSS (Untuk menghias website biar cantik dengan cepat)",
  "TypeScript (Biar kodenya aman dan jarang error)"
];

// Dan ini adalah cara saya bekerja setiap hari
export const caraKerja = () => {
  console.log("1. Menerima desain dari klien atau UI/UX");
  console.log("2. Merancang struktur kode yang rapi");
  console.log("3. Mengetik kode (seperti yang kamu lihat ini)");
  console.log("4. Memastikan tampilannya bagus di HP, Tablet, dan Tampilan Komputer");
};`,

    'React_&_Tailwind.css': `/* 
 * ==========================================
 * BERMAIN DENGAN CSS (GAYA DAN WARNA)
 * ==========================================
 * File inilah yang bertugas memberi warna, 
 * tata letak, dan animasi pada website.
 */

/* Mengambil pengaturan dasar dari Tailwind (Alat styling kekinian) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Contoh bagaimana saya membuat animasi website bisa mengambang 
   seperti benda sihir! */
@keyframes mengambang {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

/* Jika class 'kartu-sihir' dipasang di sebuah gambar, 
   ia akan terus bergerak naik turun dengan lembut */
.kartu-sihir {
  animation: mengambang 3s ease-in-out infinite;
}`,

    'Sales_&_Logos.json': `{
  "_KOMENTAR_UNTUK_ORANG_AWAM_": "Ini adalah format JSON. Datanya terstruktur berpasangan supaya mudah dibaca oleh komputer.",

  "pencapaian_karir": {
    "total_proyek_selesai": 42,
    "klien_yang_puas": 38,
    "rating_kepuasan": "99%"
  },
  
  "penghargaan": [
    "Desain Antarmuka Paling User-Friendly 2023",
    "Gelar Coder Terinovatif"
  ],

  "prinsip_utama": "Membangun kepercayaan klien dengan hasil yang sesuai janji dan tepat waktu."
}`,

    'FreelanceHistory.js': `// ==========================================
// SEJARAH KARIR LEPAS (FREELANCE) SAYA
// ==========================================
// File ini mencatat perjalanan karir saya dari waktu ke waktu.

const riwayatPekerjaan = [
  {
    klien: "Startup Toko Online",
    peran: "Konsultan Tampilan Web",
    durasi: "6 bulan",
    deskripsi: "Saya membantu toko online tersebut merombak total tampilan aplikasinya. Hasilnya, pembeli semakin mudah mencari barang dan angka penjualannya naik 40%!"
  },
  {
    klien: "Kedai Kopi Lokal",
    peran: "Pembuat Website Mandiri",
    durasi: "2 bulan",
    deskripsi: "Membuatkan sistem kasir digital dan menu pemesanan online supaya toko kopinya makin canggih."
  }
];

export default riwayatPekerjaan;`,

    'TEFA_SMKN3Pamekasan.org': `<!-- 
  ==========================================
  HALAMAN PRODUK KREATIF KAMPUS
  ==========================================
  Ini adalah contoh kerangka dasar dari sebuah halaman website.
-->

<!DOCTYPE html>
<html lang="id">
<head>
  <title>Produk Kreatif & Kewirausahaan</title>
</head>
<body>
  
  <header>
    <h1>TEFA SMKN 3 Pamekasan</h1>
    <p>Pusat inovasi vokasi untuk generasi penerus bangsa.</p>
  </header>

  <main>
    <p>Di sini kami mencetak siswa yang tidak hanya pintar secara teori, tapi siap terjun langsung ke dunia industri!</p>
  </main>

</body>
</html>`,

    'package.json': `{
  "_PENJELASAN_": "File package.json ibarat 'Resep Masakan'. Di sini tertulis bahan-bahan apa saja yang dibutuhkan agar website ini bisa berjalan.",

  "nama_aplikasi": "portofolio-keren-nando",
  "versi": "1.0.0",
  "deskripsi": "Website ini dibuat sedemikian rupa agar mirip dengan alat kerja pembuat aplikasi (VS Code) untuk menunjukkan keahlian saya.",

  "bahan_bahan_utama": {
    "react": "Bahan untuk membuat kodenya saling berinteraksi",
    "next.js": "Bahan untuk membuat aplikasinya super cepat",
    "tailwindcss": "Bahan untuk mempercantik warna dan tata letaknya"
  }
}`,

    'README.md': `<!-- 
  ==========================================
  BACA SAYA DULU (README)
  ==========================================
  Di dunia pemograman, file README digunakan untuk 
  menyambut tamu dan menjelaskan cara pakai proyeknya.
-->

# Selamat Datang di Portofolio Nando! 🚀

Portofolio ini sengaja saya buat mirip dengan **Visual Studio Code** (VS Code). 
Bagi yang belum tahu, VS Code adalah "rumah" atau alat di mana semua programmer 
mengetik kode-kodenya setiap hari.

## Kenapa saya buat desainnya merepotkan begini?
Karena saya ingin menunjukkan dua hal:
1. Saya punya selera visual yang detail.
2. Saya menantang diri sendiri untuk membuat ulang antarmuka yang rumit namun tetap mulus digunakan.

Silakan klik nama-nama file di sebelah kiri untuk melihat "Isi Kepala Saya". 
Semoga Anda menikmati berselancar di portofolio ini! ✨`
};