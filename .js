function doPost(e) {
  try {
    var nama = e.parameter.nama;
    var kelas = e.parameter.kelas;
    var status = e.parameter.status;
    var rasa = e.parameter.rasa;
    
    var jenisJajanan = e.parameter.jenis_jajanan;
    if (jenisJajanan === "Lainnya") {
      jenisJajanan = "Lainnya: " + e.parameter.jenis_jajanan_lainnya;
    }
    
    var makanan = e.parameter.makanan_favorit;
    if (makanan === "Lainnya") {
      makanan = "Lainnya: " + e.parameter.makanan_lainnya;
    }
    
    var frekuensi = e.parameter.frekuensi;
    
    var sumberInfo = e.parameter.sumber_info;
    if (sumberInfo === "Lainnya") {
      sumberInfo = "Lainnya: " + e.parameter.sumber_info_lainnya;
    }
    
    var tempatBeli = e.parameter.tempat_beli;
    if (tempatBeli === "Lainnya") {
      tempatBeli = "Lainnya: " + e.parameter.tempat_beli_lainnya;
    }
    
    var harga = e.parameter.harga;
    var kemasan = e.parameter.kemasan;
    var faktor = e.parameter.faktor;
    
    // Ganti dengan alamat Gmail Anda
    var emailTujuan = "treey8k@gmail.com"; 
    var subjek = "Survei Kuliner Baru dari: " + nama + " (" + kelas + ")";
    
    var isiPesan = "Halo, Anda menerima data jawaban survei baru:\n\n" +
                   "=== BAGIAN 1: IDENTITAS ===\n" +
                   "Nama: " + nama + "\n" +
                   "Kelas: " + kelas + "\n" +
                   "Status: " + status + "\n\n" +
                   "=== BAGIAN 2: PREFERENSI KULINER ===\n" +
                   "Rasa Favorit: " + rasa + "\n" +
                   "Jenis Jajanan Kesukaan: " + jenisJajanan + "\n" +
                   "Makanan Tradisional Pilihan: " + makanan + "\n" +
                   "Frekuensi Konsumsi: " + frekuensi + "\n" +
                   "Sumber Informasi Makanan: " + sumberInfo + "\n" +
                   "Tempat Pembelian Favorit: " + tempatBeli + "\n" +
                   "Perkiraan Harga Ideal: " + harga + "\n" +
                   "Kepentingan Kemasan: " + kemasan + "\n" +
                   "Faktor Pertimbangan Membeli: " + faktor + "\n\n" +
                   "--- Dikirim otomatis melalui Website Survei Nusantara Bite ---";
    
    GmailApp.sendEmail(emailTujuan, subjek, isiPesan);
    
    return ContentService
          .createTextOutput(JSON.stringify({"result": "success"}))
          .setMimeType(ContentService.MimeType.JSON);
          
  } catch (error) {
    return ContentService
          .createTextOutput(JSON.stringify({"result": "error", "message": error.toString()}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}