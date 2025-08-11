// Fungsi untuk mengubah warna teks "Pemerintah Desa..." setiap 1 detik
function changeRainbowColor() {
    const textElement = document.getElementById('namaDesa');
    let colorIndex = 0;
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    setInterval(() => {
        textElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
}

// Fungsi untuk menangani unggah foto
function setupImageUploads() {
    const imageUploadFrames = document.querySelectorAll('.image-upload-frame');
    imageUploadFrames.forEach(frame => {
        const input = frame.querySelector('input[type="file"]');
        const img = frame.querySelector('img');

        if (input && img) {
            input.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    });

    const beritaInput = document.getElementById('uploadBerita');
    const beritaImg = document.querySelector('.berita-image-frame img');
    if (beritaInput && beritaImg) {
        beritaInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    beritaImg.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Fungsi untuk mengisi tabel dengan baris yang dapat diedit
function fillTables() {
    const tables = document.querySelectorAll('#rencanaKerja table tbody');

    tables.forEach(tbody => {
        tbody.innerHTML = ''; // Kosongkan tabel sebelum mengisi
        for (let i = 1; i <= 10; i++) {
            const row = document.createElement('tr');
            
            // Kolom Nomor
            const nomorCell = document.createElement('td');
            nomorCell.textContent = i;
            row.appendChild(nomorCell);
            
            // Kolom Uraian (dapat diedit)
            const uraianCell = document.createElement('td');
            uraianCell.contentEditable = "true";
            uraianCell.textContent = "Isi uraian di sini...";
            row.appendChild(uraianCell);
            
            // Kolom Jumlah Anggaran (dapat diedit)
            const anggaranCell = document.createElement('td');
            anggaranCell.contentEditable = "true";
            anggaranCell.textContent = "Rp. 0";
            row.appendChild(anggaranCell);
            
            // Kolom Sumber Dana (dapat diedit)
            const sumberCell = document.createElement('td');
            sumberCell.contentEditable = "true";
            sumberCell.textContent = "Sumber Dana...";
            row.appendChild(sumberCell);

            tbody.appendChild(row);
        }
    });
}

// Fungsi untuk mengatur tahun secara dinamis pada judul
function setDynamicYear() {
    const year = new Date().getFullYear();
    const title = document.getElementById('rencanaKerjaTitle');
    title.textContent = `Rencana Kerja Tahun ${year}`;
}

// Jalankan semua fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    changeRainbowColor();
    setupImageUploads();
    fillTables();
    setDynamicYear();
});