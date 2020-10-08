var baris = 5;
var polabintang = "*";
var polasmdengan = "=";
var poladolar = "$";
var spasi = "";
for (let indexx = baris; indexx > 0; indexx--) {
 var hasil = "";

 var jumlahcell = (indexx*2)-1;
 console.log(jumlahcell);
 for (let indexx2 = jumlahcell; indexx2 > 0; indexx2--){
     if ((indexx2 %2)==0) {
         hasil = hasil.concat(polasmdengan);
     }
else if((indexx2 %9)==1){
    hasil=hasil.concat(poladolar);
}
else if ((indexx2 % 1000)==jumlahcell){
    hasil=hasil.concat(poladolar);
}
else{
    hasil=hasil.concat(polabintang);
    }
 }
spasi += " ";
console.log(spasi+hasil);

}
