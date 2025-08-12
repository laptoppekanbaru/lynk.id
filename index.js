  // Daftar gambar dan link
  const dataGambar = [
    { src: "https://raw.githubusercontent.com/laptoppekanbaru/lynk.id/main/img/728x90 (1).jpg", link: "https://lynk.id/rasyiddigital/pr5nor312qvv" },
    { src: "https://raw.githubusercontent.com/laptoppekanbaru/lynk.id/main/img/728x90 (2).jpg", link: "https://lynk.id/rasyiddigital/w2PevGJ" },
    { src: "https://raw.githubusercontent.com/laptoppekanbaru/lynk.id/main/img/728x90 (3).jpg", link: "https://lynk.id/rasyiddigital/d67m5wpno767" },
    { src: "https://raw.githubusercontent.com/laptoppekanbaru/lynk.id/main/img/728x90 (4).jpg", link: "https://lynk.id/rasyiddigital/evWl6Eb" },
    { src: "https://raw.githubusercontent.com/laptoppekanbaru/lynk.id/main/img/728x90 (5).jpg", link: "https://lynk.id/rasyiddigital/7e90qwrj5mj0" }
  ];

  // Class target banner
  const targetClasses = [
    ".gmr-topbanner-img",
    ".gmr-topbanner-img1",
    ".gmr-topbanner-img2"
  ];

  // Fungsi acak array (Fisher-Yates shuffle)
  function shuffleArray(arr) {
    let array = [...arr]; // copy array agar tidak merusak aslinya
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Acak array dan ambil sesuai jumlah slot
  const gambarAcak = shuffleArray(dataGambar).slice(0, targetClasses.length);

  // Pasang gambar ke setiap slot
  targetClasses.forEach((cls, index) => {
    const el = document.querySelector(cls);
    if (el && gambarAcak[index]) {
      el.innerHTML = `
        <a href="${gambarAcak[index].link}" target="_blank" rel="noopener">
          <img src="${gambarAcak[index].src}" alt="Banner Iklan" style="max-width:100%; height:auto;">
        </a>
      `;
    }
  });