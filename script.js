document.addEventListener('DOMContentLoaded', () => {
    // --- Logika index.html (Splash Screen) ---
    if (document.getElementById('splash-screen')) {
        const durasiAnimasiGIF = 5000;
        setTimeout(() => {
            window.location.href = 'password.html';
        }, durasiAnimasiGIF);
    }

    // --- Logika password.html ---
    if (document.getElementById('passwordInput')) {
        const passwordInput = document.getElementById('passwordInput');
        const submitPasswordBtn = document.getElementById('submitPassword');
        const pesanError = document.getElementById('pesanError');

        // ⚠️ GANTI DENGAN KATA SANDI PILIHAN ANDA!!!
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

    // --- Logika KHUSUS main-content.html (Dipastikan berjalan setelah DOM dimuat) ---
    if (document.getElementById('konten-utama')) {
        
        // --- Photo Modal ---
        const modal = document.getElementById('photo-modal');
        const modalImage = document.getElementById('modal-image');
        const modalText = document.getElementById('modal-text');
        const closeButton = document.querySelector('.modal-foto .close-button');
        const clickableImages = document.querySelectorAll('.clickable-img');

        clickableImages.forEach(img => {
            img.addEventListener('click', () => {
                if (modal && modalImage && modalText) {
                    modal.style.display = 'flex';
                    modalImage.src = img.src;
                    modalText.textContent = img.getAttribute('data-message');
                }
            });
        });

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                if (modal) modal.style.display = 'none';
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
        
        // --- LOVE FLOATING ---
        setInterval(() => {
            const love = document.createElement("div");
            love.className = "love";
            love.textContent = "💔"; // Ikon tema penyesalan
            document.body.appendChild(love);
            love.style.left = Math.random() * window.innerWidth + "px";
            setTimeout(() => love.remove(), 5000); 
        }, 1000); 

        // --- PESAN BUBBLE ---
        const bubble = document.getElementById("pesan-bubble");
        let bubbleShown = false;

        if (bubble) {
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
        }
        
        // --- SURAT AKHIR ---
        const surat = document.getElementById("surat-akhir");
        const btnSurat = document.getElementById("tutupSurat"); 

        if (surat) {
            let suratSudahMuncul = false;  
            let suratSudahDitutup = false; 

            window.addEventListener("scroll", () => {
                if (
                    !suratSudahMuncul &&
                    !suratSudahDitutup &&
                    window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
                ) {
                    surat.style.display = "flex";
                    surat.style.opacity = "1";
                    suratSudahMuncul = true;
                }
            });

            if (btnSurat) {
                btnSurat.addEventListener("click", () => {
                    surat.style.opacity = "0";

                    setTimeout(() => {
                        surat.style.display = "none";
                    }, 300);

                    suratSudahDitutup = true;
                });
            }
        }
    }
});
