var baris = 5;
var polaBintang = "*";
var polaSamaDgn = "=";
var hasil = "";

for (let indexx = 1; indexx < 10; indexx++) {
	if ((indexx %2)==0) {
	hasil = hasil.concat(polaSamaDgn);
	} else { 
	hasil = hasil.concat(polaBintang);
	}
}
console.log(""+hasil);
