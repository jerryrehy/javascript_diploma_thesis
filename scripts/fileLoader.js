// Nahr�v� soubor a z�sk� text souboru
function fileLoader(file){
    try{
      xmlhttp=new XMLHttpRequest();
      xmlhttp.open("GET",file,false);
      xmlhttp.send();
      return xmlhttp.responseText;
    }catch(e){
        alert("Nemohu nal�zt soubor "+file);
    }
}