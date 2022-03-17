let sutUrunleri=["peynir","40","sut","10","yoğurt","20"];
let gidaUrunleri={"makarna":5,"bulgur":10,"pirinç":20};
let temizlikUrunleri={"deterjan":50,"sabun":10,"çamaşır suyu":5};

//document.querySelectorAll("kategori")[0].addEventListener("change",urunleriGetir);

console.log(sutUrunleri.length)

function urunleriGetir(){
    //döngü
    for(let i=0;i<sutUrunleri.length;i=i+2)
    {
        let urunAciklama=document.createElement("label");
        let urunSecenek=document.createElement("input");
        document.getElementById("urunPanel").appendChild(urunAciklama);
        document.getElementById("urunPanel").appendChild(urunSecenek);
        urunSecenek.type="checkbox";
        urunSecenek.setAttribute("name","urunler")
        urunSecenek.value=sutUrunleri[i+1];
        urunAciklama.innerHTML=sutUrunleri[i];
        urunAciklama.setAttribute("for","urunler")

    }
}