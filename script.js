// 1. Efek Muncul Saat Scroll (Scroll Reveal)
const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add("active");
        }
    }
};

window.addEventListener("scroll", revealOnScroll);

// 2. Perubahan Navbar saat Scroll
const navbar = document.getElementById("navbar");

window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
};

// 3. Inisialisasi awal agar elemen yang sudah di layar langsung muncul
revealOnScroll();

const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor Anda

function handleFormBooking() {
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const pesan = document.getElementById('pesan').value;
    const loader = document.getElementById('loading-overlay');

    // Validasi sederhana
    if (!nama || !tanggal) {
        alert("Mohon lengkapi Nama dan Tanggal Acara Anda.");
        return;
    }

    // Tampilkan Loading
    loader.classList.remove('hidden');

    const text = `Halo Aura Wedding,\n\nSaya ingin memesan layanan rias pengantin:\n\n*Nama:* ${nama}\n*Tanggal Acara:* ${tanggal}\n*Pesan Tambahan:* ${pesan}\n\nMohon informasi ketersediaan jadwalnya. Terima kasih.`;
    
    // Simulasi pengecekan jadwal selama 1.5 detik
    setTimeout(() => {
        loader.classList.add('hidden');
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }, 1500);
}