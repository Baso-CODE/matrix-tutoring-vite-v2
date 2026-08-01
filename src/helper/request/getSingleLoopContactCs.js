export async function getSingleLoopContactCS() {
  const consultationContacts = [
    {
      name: "Ms. Dita",
      phone: "085817279118",
      link_cta:
        "https://api.whatsapp.com/send?phone=6285817279118&text=Halo%20Ms.%20Dita,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.",
    },
    {
      name: "Ms. Eka",
      phone: "087783999349",
      link_cta:
        "https://api.whatsapp.com/send?phone=6287783999349&text=Halo%20Ms.%20Eka,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.",
    },
    {
      name: "Ms. Linda",
      phone: "085747281466",
      link_cta:
        "https://api.whatsapp.com/send?phone=6285747281466&text=Halo%20Ms.%20Linda,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.",
    },
    {
      name: "Ms. Syifa",
      phone: "08131971916",
      link_cta:
        "https://api.whatsapp.com/send?phone=628131971916&text=Halo%20Ms.%20Syifa,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      // 1. Ambil index terakhir dari localStorage (default 0 jika belum ada)
      const currentIndex =
        parseInt(localStorage.getItem("cs_contact_index")) || 0;

      // 2. Pilih 1 CS berdasarkan index saat ini
      const selectedCS = consultationContacts[currentIndex];

      // 3. Hitung index berikutnya (jika sudah di akhir array, kembali ke 0)
      const nextIndex = (currentIndex + 1) % consultationContacts.length;

      // 4. Simpan index berikutnya ke localStorage
      localStorage.setItem("cs_contact_index", nextIndex);

      // 5. Kembalikan 1 data CS saja ke Redux
      resolve({ data: selectedCS });
    }, 500);
  });
}
