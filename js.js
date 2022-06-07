document.onclick = () => {


const vreme = new Date()
document.getElementById(`vreme`).innerHTML=vreme;









document.getElementById(`btn`).addEventListener(`click`,function(e){
  e.preventDefault()
  let brojKnjizice = document.getElementById(`unos`).value;
  let pattern = /^[0-9]{11}$/
  let regError = document.querySelector(".error")
  if(pattern.test(brojKnjizice)){  
    regError.innerHTML="Format je ispravan "
  }else{
    regError.innerHTML="Broj knjizice nije u odgovarajucem formatu."
    document.getElementById(`ispis`).innerHTML =" "
}
});

document.getElementById(`btn`).addEventListener(`click`,filterChanged)
dohvatiPodatke("pacijenti", ispisiPacijente);

function dohvatiPodatke(file, callback) {
  let zahtev = new XMLHttpRequest();
  zahtev.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText)); 
    }
    if (this.status >= 400) {
      
      var greska = new Error("Request failed:" + zahtev.statusText);
      console.log(greska);
    }
  };
  zahtev.open("GET", "assets/data/pacijenti.json"); 
  zahtev.send(); 
}




function ispisiPacijente(data){
  data = searchFilter(data);
  let html= ``
    
    
    data.forEach(element => {

      html += `<ul class="podaci">Broj zdravstvene knjizice pacijenta: <li class="pacijent">${element.brk}</li></ul>
      <ul class="podaci">Ime i prezime pacijenta: <li class="pacijent">${element.ime}</li></ul>
      <ul class="podaci">LBO pacijenta: <li class="pacijent">${element.lbo}</li></ul>
      <ul class="podaci">Datum rodjenja pacijenta: <li class="pacijent">${element.datum_rodjenja}</li></ul>
      <ul class="podaci">Propisana terapija: <li class="pacijent">${element.lekovi}</li></ul>
      <ul>Datum Propisane terapije:</ul>`
      
    });
      document.getElementById(`ispis`).innerHTML = html
      
    };

function filterChanged(){
     dohvatiPodatke("pacijenti", ispisiPacijente); 
    
    }

function searchFilter(data) { 
  let search = document.getElementById("unos").value;
  if (search) {
    return data.filter((element) => element.brk.indexOf(search) != -1);
    
  }
  
  
  }
    
    
    
  
    
    
    
    
    


 
 





 


  }








