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
    
    // Logika Popup Luluh Mantan dipindahkan ke dalam DOMContentLoaded agar lebih rapi
    if (document.getElementById("popup-luluh")) {
        const pop = document.getElementById("popup-luluh");
        const btn = document.getElementById("btnLuluh");

        btn.addEventListener("click", () => {
            pop.style.opacity = "0";
            setTimeout(() => pop.style.display = "none", 500);
            // Alert yang lebih emosional
            alert("Terima kasih, Intan. Aku tunggu jawabanmu. Aku janji akan berubah. ❤️");
        });
    }
});

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
        // Teks bubble yang lebih fokus pada 6 tahun dan permintaan maaf
        bubble.innerHTML = "Aku selalu ingat 6 tahun kita...";
        setTimeout(() => {
            bubble.innerHTML = "Aku benar-benar minta maaf atas kesalahanku.";
        }, 3000);
        setTimeout(() => {
            bubble.innerHTML = "Tolong kasih aku satu kesempatan lagi... 🙏";
        }, 6000);
        setTimeout(() => {
            bubble.style.display = "none";
        }, 10000);
    }
});

// SURAT AKHIR – FIX FINAL
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

        suratSudahDitutup = true; // <<< FIX PENTING
    });
});
