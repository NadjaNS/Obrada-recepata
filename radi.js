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
    
          html += `<span>Broj zdravstvene knjizice pacijenta:</span> <span class="brk">${element.brk}</span><br>
          <span class="podaci">Ime i prezime pacijente:</span> <span class="ime">${element.ime}</span><br>
          <span class="podaci">LBO pacijenta:</span> <span class="lbo">${element.lbo}</span><br>
          <span class="podaci">Datum rodjenja pacijenta:</span> <span class="godina">${element.datum_rodjenja}</span><br>
          <span class="podaci">Prepisana terapija:</span> <span class="lekovi">${element.lekovi}</span><br>
          <span>Datum Prepisane terapije:`
          
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
    
    
    
    
    
    
    
    
    