function validateLogin() {
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Ambil data dari localStorage (contoh: daftar pengguna)
    const storedUsername = localStorage.getItem("username"); // Username yang disimpan saat registrasi
    const storedPassword = localStorage.getItem("password"); // Password yang disimpan saat registrasi

    // Validasi Input Kosong
    if (!usernameInput || !passwordInput) {
        alert("Harap isi semua kolom!");
        return false;
    }

    // Periksa kecocokan username dan password
    if (usernameInput === storedUsername && passwordInput === storedPassword) {
        alert("Login Berhasil!");
        window.location.href = "menu.html"; // Redirect ke halaman menu
        return false;
    } else if (usernameInput !== storedUsername) {
        alert("Username tidak ditemukan!");
        return false;
    } else {
        alert("Password salah!");
        return false;
    }
}
