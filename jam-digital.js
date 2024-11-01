// pemanggilan id 
const jamDiv = document.getElementById("jam");

function jam(){

   // waktu
   const waktu = new Date();

   // jam menit detik
   let jam = waktu.getHours();
   let menit = waktu.getMinutes();
   let detik = waktu.getSeconds();

   // jika waktu dibawah angka 10
   if(jam < 10){
      jam = "0" + jam;
   } else if (menit < 10){
      menit = "0" + menit
   } else if (detik < 10) {
      detik = "0" + detik
   } 

   // susunan jam
   const susunanWaktu = jam + ":" + menit + ":" + detik;

   // menampilkan di html nya
   jamDiv.textContent = susunanWaktu;
}
setInterval(jam, 1000);

jamDiv.style.fontSize = '2rem'
jamDiv.style.fontWeight = '800'




