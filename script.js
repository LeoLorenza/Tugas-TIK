// 1. Memilih tombol sapa berdasarkan ID yang ada di kode HTML ("sapaButton")
const tombolSapa = document.getElementById('sapaButton');

// 2. Menambahkan instruksi (Event Listener) saat tombol di-klik
tombolSapa.addEventListener('click', function() {
    // 3. Menampilkan pesan pop-up (alert) saat tombol diklik oleh pengguna
    alert('Halo! Terima kasih sudah berkunjung!');
});
