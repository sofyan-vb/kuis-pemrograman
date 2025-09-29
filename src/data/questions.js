export const questions = [
  // =================================
  // ====== SOAL TINGKAT MUDAH =======
  // =================================
  {
    questionText: 'Apa tag HTML yang digunakan untuk membuat paragraf?',
    difficulty: 'mudah',
    answerOptions: [
      { answerText: '<div>', isCorrect: false },
      { answerText: '<p>', isCorrect: true },
      { answerText: '<span>', isCorrect: false },
    ],
  },
  {
    questionText: 'Properti CSS mana yang digunakan untuk mengubah warna background elemen?',
    difficulty: 'mudah',
    answerOptions: [
      { answerText: 'color', isCorrect: false },
      { answerText: 'font-size', isCorrect: false },
      { answerText: 'background-color', isCorrect: true },
    ],
  },
  {
    questionText: 'Manakah dari berikut ini yang merupakan cara yang benar untuk mendeklarasikan variabel di JavaScript?',
    difficulty: 'mudah',
    answerOptions: [
      { answerText: 'variable carName;', isCorrect: false },
      { answerText: 'let carName;', isCorrect: true },
      { answerText: 'v carName;', isCorrect: false },
    ],
  },
  {
    questionText: 'Di React, data dilewatkan dari komponen parent ke child menggunakan apa?',
    difficulty: 'mudah',
    answerOptions: [
      { answerText: 'state', isCorrect: false },
      { answerText: 'props', isCorrect: true },
      { answerText: 'hooks', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa kepanjangan dari HTML?',
    difficulty: 'mudah',
    answerOptions: [
      { answerText: 'HyperText Markup Language', isCorrect: true },
      { answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
      { answerText: 'Home Tool Markup Language', isCorrect: false },
    ],
  },
  {
    questionText: 'Manakah operator perbandingan yang berarti "sama dengan nilai dan tipe"?',
    difficulty: 'mudah',
    answerOptions: [
      { answerText: '==', isCorrect: false },
      { answerText: '===', isCorrect: true },
      { answerText: '=', isCorrect: false },
    ],
  },
  {
    questionText: 'Hook React mana yang digunakan untuk menambahkan state ke komponen fungsional?',
    difficulty: 'mudah',
    answerOptions: [
      { answerText: 'useEffect', isCorrect: false },
      { answerText: 'useState', isCorrect: true },
      { answerText: 'useContext', isCorrect: false },
    ],
  },
  {
    questionText: 'Bagaimana cara menulis komentar di dalam file CSS?',
    difficulty: 'mudah',
    answerOptions: [
        { answerText: '// ini komentar', isCorrect: false },
        { answerText: '/* ini komentar */', isCorrect: true },
        { answerText: '', isCorrect: false },
    ],
  },
  {
    questionText: 'Manakah dari berikut ini yang merupakan tipe data primitif di JavaScript?',
    difficulty: 'mudah',
    answerOptions: [
        { answerText: 'Object', isCorrect: false },
        { answerText: 'Array', isCorrect: false },
        { answerText: 'String', isCorrect: true },
    ],
  },
  {
    questionText: 'Atribut HTML apa yang digunakan untuk mendefinisikan teks alternatif untuk gambar?',
    difficulty: 'mudah',
    answerOptions: [
        { answerText: 'title', isCorrect: false },
        { answerText: 'alt', isCorrect: true },
        { answerText: 'src', isCorrect: false },
    ],
  },

  // =================================
  // ====== SOAL TINGKAT SEDANG ======
  // =================================
  {
    questionText: 'Apa perbedaan antara `let` dan `const` dalam deklarasi variabel di JavaScript?',
    difficulty: 'sedang',
    answerOptions: [
      { answerText: '`const` untuk angka, `let` untuk string', isCorrect: false },
      { answerText: 'Nilai `const` tidak bisa diubah, `let` bisa', isCorrect: true },
      { answerText: 'Tidak ada perbedaan, hanya preferensi gaya', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa fungsi dari `Array.prototype.map()` di JavaScript?',
    difficulty: 'sedang',
    answerOptions: [
      { answerText: 'Membuat array baru dengan hasil dari fungsi yang diterapkan pada setiap elemen', isCorrect: true },
      { answerText: 'Menyaring elemen array berdasarkan kondisi', isCorrect: false },
      { answerText: 'Menjalankan fungsi untuk setiap elemen tanpa mengembalikan array baru', isCorrect: false },
    ],
  },
  {
    questionText: 'Properti CSS `display: flex;` digunakan untuk apa?',
    difficulty: 'sedang',
    answerOptions: [
      { answerText: 'Membuat elemen menjadi transparan', isCorrect: false },
      { answerText: 'Mengaktifkan model layout Flexbox', isCorrect: true },
      { answerText: 'Menyembunyikan elemen dari tampilan', isCorrect: false },
    ],
  },
  {
    questionText: 'Dalam React, apa tujuan dari "keys" saat me-render sebuah daftar?',
    difficulty: 'sedang',
    answerOptions: [
      { answerText: 'Untuk memberikan gaya unik pada setiap item', isCorrect: false },
      { answerText: 'Membantu React mengidentifikasi item mana yang berubah, ditambahkan, atau dihapus', isCorrect: true },
      { answerText: 'Sebagai ID untuk digunakan dalam CSS', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa itu "API" dalam konteks pengembangan web?',
    difficulty: 'sedang',
    answerOptions: [
      { answerText: 'Sebuah bahasa pemrograman baru', isCorrect: false },
      { answerText: 'Sekumpulan aturan yang memungkinkan aplikasi berkomunikasi satu sama lain', isCorrect: true },
      { answerText: 'Sebuah library untuk styling', isCorrect: false },
    ],
  },
  {
    questionText: 'Manakah dari berikut ini yang merupakan "pseudo-class" dalam CSS?',
    difficulty: 'sedang',
    answerOptions: [
      { answerText: ':hover', isCorrect: true },
      { answerText: '.container', isCorrect: false },
      { answerText: '#main-title', isCorrect: false },
    ],
  },
  {
    questionText: 'Perintah `git clone` digunakan untuk apa?',
    difficulty: 'sedang',
    answerOptions: [
      { answerText: 'Membuat branch baru', isCorrect: false },
      { answerText: 'Membuat salinan dari repositori yang sudah ada', isCorrect: true },
      { answerText: 'Menggabungkan dua branch', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa itu "event bubbling" dalam JavaScript DOM?',
    difficulty: 'sedang',
    answerOptions: [
        { answerText: 'Event ditangani dari elemen terdalam lalu ke elemen terluar', isCorrect: true },
        { answerText: 'Event ditangani dari elemen terluar lalu ke elemen terdalam', isCorrect: false },
        { answerText: 'Event hanya ditangani oleh elemen pertama yang diklik', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa tujuan dari `localStorage` di browser?',
    difficulty: 'sedang',
    answerOptions: [
        { answerText: 'Menyimpan data sementara yang hilang saat tab ditutup', isCorrect: false },
        { answerText: 'Menyimpan data secara permanen di browser tanpa batas waktu', isCorrect: true },
        { answerText: 'Menyimpan data di server', isCorrect: false },
    ],
  },
  {
    questionText: 'Dalam React, apa perbedaan antara state dan props?',
    difficulty: 'sedang',
    answerOptions: [
        { answerText: 'State dikelola di dalam komponen, props dilewatkan ke komponen', isCorrect: true },
        { answerText: 'Props dikelola di dalam komponen, state dilewatkan ke komponen', isCorrect: false },
        { answerText: 'Tidak ada perbedaan fungsional', isCorrect: false },
    ],
  },

  // =================================
  // ====== SOAL TINGKAT SULIT  ======
  // =================================
  {
    questionText: 'Apa perbedaan mendasar antara `Promise.all()` dan `Promise.race()`?',
    difficulty: 'sulit',
    answerOptions: [
      { answerText: '`all` menunggu semua promise selesai, `race` hanya menunggu yang pertama', isCorrect: true },
      { answerText: '`race` lebih cepat dari `all`', isCorrect: false },
      { answerText: 'Tidak ada perbedaan fungsional', isCorrect: false },
    ],
  },
  {
    questionText: 'Dalam konteks JavaScript, apa yang dimaksud dengan "hoisting"?',
    difficulty: 'sulit',
    answerOptions: [
      { answerText: 'Deklarasi variabel dan fungsi dipindahkan ke atas scope mereka sebelum eksekusi', isCorrect: true },
      { answerText: 'Proses mengoptimalkan ukuran file JavaScript', isCorrect: false },
      { answerText: 'Sebuah cara untuk membuat animasi CSS', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa tujuan dari hook `useMemo` di React?',
    difficulty: 'sulit',
    answerOptions: [
      { answerText: 'Untuk menyimpan hasil dari fungsi yang mahal agar tidak perlu dihitung ulang di setiap render', isCorrect: true },
      { answerText: 'Untuk menjalankan side effects', isCorrect: false },
      { answerText: 'Untuk mengelola state yang kompleks', isCorrect: false },
    ],
  },
  {
    questionText: 'Jelaskan apa itu "CORS" (Cross-Origin Resource Sharing).',
    difficulty: 'sulit',
    answerOptions: [
      { answerText: 'Sebuah mekanisme keamanan browser yang membatasi permintaan HTTP lintas-origin', isCorrect: true },
      { answerText: 'Sebuah library JavaScript untuk styling', isCorrect: false },
      { answerText: 'Sebuah framework untuk membangun API', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa output dari kode ini: `console.log(typeof null);`?',
    difficulty: 'sulit',
    answerOptions: [
      { answerText: '"null"', isCorrect: false },
      { answerText: '"object"', isCorrect: true },
      { answerText: '"undefined"', isCorrect: false },
    ],
  },
  {
    questionText: 'Dalam CSS, apa perbedaan antara `position: absolute` dan `position: relative`?',
    difficulty: 'sulit',
    answerOptions: [
      { answerText: '`absolute` diposisikan relatif terhadap container terdekat yang `relative`, `relative` diposisikan relatif terhadap posisi normalnya', isCorrect: true },
      { answerText: '`absolute` selalu di pojok kiri atas halaman', isCorrect: false },
      { answerText: 'Tidak ada perbedaan, hanya nama yang berbeda', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa itu "tree shaking" dalam konteks JavaScript bundler seperti Webpack?',
    difficulty: 'sulit',
    answerOptions: [
      { answerText: 'Proses menghilangkan kode yang tidak terpakai (dead-code elimination)', isCorrect: true },
      { answerText: 'Sebuah cara untuk men-debug kode', isCorrect: false },
      { answerText: 'Animasi saat halaman dimuat', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa perbedaan antara Shadow DOM dan Virtual DOM?',
    difficulty: 'sulit',
    answerOptions: [
        { answerText: 'Shadow DOM adalah untuk enkapsulasi gaya, Virtual DOM untuk efisiensi render', isCorrect: true },
        { answerText: 'Keduanya adalah hal yang sama', isCorrect: false },
        { answerText: 'Shadow DOM dibuat oleh React, Virtual DOM adalah standar web', isCorrect: false },
    ],
  },
  {
    questionText: 'Apa itu "currying" dalam pemrograman fungsional?',
    difficulty: 'sulit',
    answerOptions: [
        { answerText: 'Proses mengubah fungsi dengan banyak argumen menjadi serangkaian fungsi dengan satu argumen', isCorrect: true },
        { answerText: 'Sebuah teknik untuk styling komponen', isCorrect: false },
        { answerText: 'Sebuah cara untuk menangani error di JavaScript', isCorrect: false },
    ],
  },
  {
    questionText: 'Mengapa `useEffect` dengan array dependensi kosong (`[]`) hanya berjalan sekali?',
    difficulty: 'sulit',
    answerOptions: [
        { answerText: 'Karena tidak ada nilai yang berubah setelah render awal untuk memicunya lagi', isCorrect: true },
        { answerText: 'Karena ini adalah bug di React', isCorrect: false },
        { answerText: 'Karena array kosong berarti efeknya harus segera dibersihkan', isCorrect: false },
    ],
  },
];