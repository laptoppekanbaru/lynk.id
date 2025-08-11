  // Daftar gambar dan link
    const dataGambar = [
        { src: "./img/728x90 (1).jpg", link: "https://lynk.id/rasyiddigital/pr5nor312qvv" },
        { src: "./img/728x90 (2).jpg", link: "https://lynk.id/rasyiddigital/w2PevGJ" },
        { src: "./img/728x90 (3).jpg", link: "https://lynk.id/rasyiddigital/d67m5wpno767" },
        { src: "./img/728x90 (4).jpg", link: "https://lynk.id/rasyiddigital/evWl6Eb" },
        { src: "./img/728x90 (5).jpg", link: "https://lynk.id/rasyiddigital/7e90qwrj5mj0" }
    ];

     // Ambil index acak
    const randomIndex = Math.floor(Math.random() * dataGambar.length);

    // Ambil data gambar berdasarkan index acak
    const selected = dataGambar[randomIndex];

    // Pilih elemen pertama dengan class gmr-topbanner
    const targetElement = document.querySelector(".gmr-topbanner-img");

    // Masukkan gambar dan link
    if (targetElement) {
        targetElement.innerHTML = `
            <a href="${selected.link}" target="_blank">
                <img src="${selected.src}" alt="Random Image" style="max-width:100%;">
            </a>
        `;
    }