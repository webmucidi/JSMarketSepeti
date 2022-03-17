let sutUrunleri=["peynir","sut","yoğurt"];
let gidaUrunleri={"makarna":5,"bulgur":10,"pirinç":20};
let temizlikUrunleri={"deterjan":50,"sabun":10,"çamaşır suyu":5};

document.querySelectorAll("kategori")[0].addEventListener("change",urunleriGetir);

function urunleriGetir(){
    for(let i=0;i<sutUrunleri.length;i++)
    {
        let urunAciklama=document.createElement("label");
        let urunSecenek=document.createElement("input");
        document.getElementById("urunPanel").appendChild(urunAciklama);
        document.getElementById("urunPanel").appendChild(urunSecenek);
        urunSecenek.type="checkbox";
        urunAciklama.innerHTML=sutUrunleri[i];
        urunSecenek.value=sutUrunleri[i];
    }
}