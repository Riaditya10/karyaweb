document.addEventListener('DOMContentLoaded', function() {
    const kontakForm = document.getElementById('kontak-form');
    if (kontakForm) {
        kontakForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pesan Anda telah terkirim. Terima kasih!');
            kontakForm.reset();
        });
    }
});