document.addEventListener('DOMContentLoaded', () => {
    // Logika untuk index.html (Splash Screen) - TETAP
    if (document.getElementById('splash-screen')) {
        const durasiAnimasiGIF = 5000;
        setTimeout(() => {
            window.location.href = 'password.html';
        }, durasiAnimasiGIF);
    }

    // Logika untuk password.html - TETAP
    if (document.getElementById('passwordInput')) {
        const passwordInput = document.getElementById('passwordInput');
        const submitPasswordBtn = document.getElementById('submitPassword');
        const pesanError = document.getElementById('pesanError');

        // GANTI DENGAN KATA SANDI PILIHAN ANDA!!!
        const KATA_SANDI_RAHASIA = "intancantik"; 

        const checkPassword = () => {
            if (passwordInput.value.toLowerCase() === KATA_SANDI_RAHASIA) {
                window.location.href = 'main-content.html';
            } else {
                pesanError.textContent = "Bukan kode itu, Sayang. Coba ingat yang paling romantis di antara kita...";
                pesanError.style.opacity = 1;
                setTimeout(() => {
                    pesanError.style.opacity = 0;
                }, 3500);
            }
        };

        submitPasswordBtn.addEventListener('click', checkPassword);
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }

    // Logika Popup Luluh Mantan - TETAP
    if (document.getElementById("popup-luluh")) {
        const pop = document.getElementById("popup-luluh");
        const btn = document.getElementById("btnLuluh");

        btn.addEventListener("click", () => {
            pop.style.opacity = "0";
            setTimeout(() => pop.style.display = "none", 500);
            alert("Terima kasih sudah memberiku waktu untuk bicara. Aku menunggu jawabanmu yang terpenting: Maukah kamu memaafkanku dan kembali membangun cerita kita? ❤️");
        });
    }
    
    // ** EFEK TYPING DRAMATIS ** - TETAP
    const typingText = document.getElementById('typing-output');
    if (typingText) {
        const textToType = "Aku tidak bisa hidup tanpa kamu. Aku mohon, maafkan aku. Aku mencintaimu lebih dari segalanya.";
        let i = 0;
        const speed = 75; // Kecepatan ketikan

        function typeWriter() {
            if (i < textToType.length) {
                typingText.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 1500); // Mulai efek setelah header muncul
    }

    // ** LOGIKA KLIK FOTO (BARU) **
    const clickableImages = document.querySelectorAll('.clickable-img');
    const photoModal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-button');

    clickableImages.forEach(img => {
        img.addEventListener('click', () => {
            const message = img.getAttribute('data-message');
            const src = img.getAttribute('src');

            modalImage.setAttribute('src', src);
            modalText.textContent = message;
            photoModal.style.display = 'flex'; // Gunakan 'flex' agar modal di tengah
        });
    });

    // Tutup modal saat tombol 'x' diklik
    closeButton.addEventListener('click', () => {
        photoModal.style.display = 'none';
    });

    // Tutup modal saat user klik di luar modal (di area gelap)
    window.addEventListener('click', (event) => {
        if (event.target === photoModal) {
            photoModal.style.display = 'none';
        }
    });

});

// LOVE FLOATING - TETAP
setInterval(() => {
    const love = document.createElement("div");
    love.className = "love";
    love.textContent = "💔"; 
    love.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(love);
    setTimeout(() => love.remove(), 5000); 
}, 1200);

// PESAN BUBBLE - TETAP
const bubble = document.getElementById("pesan-bubble");
let bubbleShown = false;

window.addEventListener("scroll", () => {
    if (!bubbleShown && window.scrollY > 60) {
        bubbleShown = true;
        bubble.style.display = "block";
        bubble.innerHTML = "Aku ingat, dulu kamu selalu ada untukku...";
        setTimeout(() => {
            bubble.innerHTML = "Aku merindukan cara kamu melihatku. Rindu rumah kita.";
        }, 4000);
        setTimeout(() => {
            bubble.innerHTML = "Aku benar-benar siap berubah. Tolong percaya. 🙏";
        }, 8000);
        setTimeout(() => {
            bubble.style.display = "none";
        }, 12000);
    }
});

// SURAT AKHIR - TETAP
document.addEventListener("DOMContentLoaded", () => {
    const surat = document.getElementById("surat-akhir");
    const btnSurat = document.getElementById("tutupSurat");

    let suratSudahMuncul = false;  
    let suratSudahDitutup = false; 

    window.addEventListener("scroll", () => {
        if (
            !suratSudahMuncul &&
            !suratSudahDitutup &&
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
        ) {
            surat.style.display = "flex";
            suratSudahMuncul = true;
        }
    });

    btnSurat.addEventListener("click", () => {
        surat.style.opacity = "0";

        setTimeout(() => {
            surat.style.display = "none";
            surat.style.opacity = "1";
        }, 300);

        suratSudahDitutup = true;
    });
});
