document.addEventListener('DOMContentLoaded', () => {
    // Logika untuk index.html (Splash Screen)
    if (document.getElementById('splash-screen')) {
        const splashScreen = document.getElementById('splash-screen');
        const durasiAnimasiGIF = 5000; // 5000 milidetik = 5 detik (4s GIF + 1s fadeOut)

        setTimeout(() => {
            // Setelah animasi selesai, redirect ke halaman password
            window.location.href = 'password.html';
        }, durasiAnimasiGIF);
    }

    // Logika untuk password.html
    if (document.getElementById('passwordInput')) {
        const passwordInput = document.getElementById('passwordInput');
        const submitPasswordBtn = document.getElementById('submitPassword');
        const pesanError = document.getElementById('pesanError');

        // GANTI DENGAN KATA SANDI PILIHAN ANDA!!!
        const KATA_SANDI_RAHASIA = "intancantik"; 

        const checkPassword = () => {
            if (passwordInput.value.toLowerCase() === KATA_SANDI_RAHASIA) {
                // Jika benar, redirect ke halaman konten utama
                window.location.href = 'main-content.html';
            } else {
                pesanError.textContent = "Oops, kata sandinya salah! Coba ingat lagi...";
                pesanError.style.opacity = 1; // Tampilkan pesan error
                setTimeout(() => {
                    pesanError.style.opacity = 0; // Sembunyikan setelah beberapa detik
                }, 3000);
            }
        };

        submitPasswordBtn.addEventListener('click', checkPassword);

        // Memungkinkan menekan 'Enter' untuk submit password
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }

    // Tidak ada JS khusus untuk main-content.html jika tidak ada interaksi tambahan
    // Misalnya, jika Anda ingin menambahkan lightbox gallery, JS-nya akan di sini
});

// Popup Luluh Mantan
if (document.getElementById("popup-luluh")) {
    const pop = document.getElementById("popup-luluh");
    const btn = document.getElementById("btnLuluh");

    btn.addEventListener("click", () => {
        pop.style.opacity = "0";
        setTimeout(() => pop.style.display = "none", 500);
        alert("Terima kasih... Aku serius sama kamu. ❤️");
    });
}

// LOVE FLOATING
setInterval(() => {
    const love = document.createElement("div");
    love.className = "love";
    love.textContent = "💖";
    love.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(love);
    setTimeout(() => love.remove(), 4000);
}, 800);

// PESAN BUBBLE
const bubble = document.getElementById("pesan-bubble");
let bubbleShown = false;

window.addEventListener("scroll", () => {
    if (!bubbleShown && window.scrollY > 60) {
        bubbleShown = true;
        bubble.style.display = "block";
        bubble.innerHTML = "Aku masih sayang kamu...";
        setTimeout(() => {
            bubble.innerHTML = "Ingat ga momen kita?";
        }, 3000);
        setTimeout(() => {
            bubble.innerHTML = "Aku kangen deket sama kamu...";
        }, 6000);
        setTimeout(() => {
            bubble.style.display = "none";
        }, 10000);
    }
});

// SURAT AKHIR
const surat = document.getElementById("surat-akhir");
const btnSurat = document.getElementById("tutupSurat");

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        surat.style.display = "flex";
    }
});

btnSurat.addEventListener("click", () => {
    surat.style.display = "none";
});