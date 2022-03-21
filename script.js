let sutUrunleri=["peynir","40","sut","10","yoğurt","20"];
let gidaUrunleri=["makarna","5","bulgur","10","pirinç","20"];
let temizlikUrunleri=["deterjan","50","sabun","10","çamaşır suyu","5"];
let i;

for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}

function urunleriGetir(){
    const silinecekler = document.getElementById("urunPanel");

    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }
    
    if(document.getElementById("kategoriSut").checked)
    {
        
    //döngü
        for(i=0;i<sutUrunleri.length;i=i+2)
        {
            let urunAciklama=document.createElement("label");
            let urunSecenek=document.createElement("input");
            document.getElementById("urunPanel").appendChild(urunAciklama);
            document.getElementById("urunPanel").appendChild(urunSecenek);
            urunSecenek.type="checkbox";
            urunSecenek.setAttribute("name","urunler")
            urunSecenek.value=sutUrunleri[i+1];
            urunAciklama.innerHTML=sutUrunleri[i];
            urunAciklama.setAttribute("for","urunler");
            urunAciklama.setAttribute("class","aciklama");
        }
    }
    else if(document.getElementById("kategoriGida").checked)
    {
        for(i=0;i<gidaUrunleri.length;i=i+2)
        {
        let urunAciklama=document.createElement("label");
        let urunSecenek=document.createElement("input");
        document.getElementById("urunPanel").appendChild(urunAciklama);
        document.getElementById("urunPanel").appendChild(urunSecenek);
        urunSecenek.type="checkbox";
        urunSecenek.setAttribute("name","urunler")
        urunSecenek.value=gidaUrunleri[i+1];
        urunAciklama.innerHTML=gidaUrunleri[i];
        urunAciklama.setAttribute("for","urunler");
        }
    }
    else if(document.getElementById("kategoriTemizlik").checked)
    {
        for(i=0;i<temizlikUrunleri.length;i=i+2)
        {
        let urunAciklama=document.createElement("label");
        let urunSecenek=document.createElement("input");
        document.getElementById("urunPanel").appendChild(urunAciklama);
        document.getElementById("urunPanel").appendChild(urunSecenek);
        urunSecenek.type="checkbox";
        urunSecenek.setAttribute("name","urunler")
        urunSecenek.value=temizlikUrunleri[i+1];
        urunAciklama.innerHTML=temizlikUrunleri[i];
        urunAciklama.setAttribute("for","urunler");
        }
    }
    


}