let sutUrunleri=["peynir","40","sut","10","yoğurt","20"];
let gidaUrunleri=["makarna","5","bulgur","10","pirinç","20"];
let temizlikUrunleri=["deterjan","50","sabun","10","çamaşır suyu","5"];
let i;
let urunAciklama,urunSecenek;
let eklenecekler=[];

for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}



function olustur(){
    urunAciklama=document.createElement("label");
    urunSecenek=document.createElement("input");
    document.getElementById("urunPanel").appendChild(urunAciklama);
    document.getElementById("urunPanel").appendChild(urunSecenek);
    urunSecenek.type="checkbox";
    urunSecenek.setAttribute("name","urunler");
    urunAciklama.setAttribute("for","urunler");
    urunAciklama.setAttribute("class","urunler");
}
function urunleriGetir(){
    const silinecekler = document.getElementById("urunPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }
    if(document.getElementById("kategoriSut").checked)
    {
        for(i=0;i<sutUrunleri.length;i=i+2)
        {
            olustur();
            urunSecenek.value=sutUrunleri[i+1];
            urunAciklama.innerHTML=sutUrunleri[i]; 
        }
    }
    else if(document.getElementById("kategoriGida").checked)
    {
        for(i=0;i<gidaUrunleri.length;i=i+2)
        {
        olustur();
        urunSecenek.value=gidaUrunleri[i+1];
        urunAciklama.innerHTML=gidaUrunleri[i];
        }
    }
    else if(document.getElementById("kategoriTemizlik").checked)
    {
        for(i=0;i<temizlikUrunleri.length;i=i+2)
        {
        olustur();
        urunSecenek.value=temizlikUrunleri[i+1];
        urunAciklama.innerHTML=temizlikUrunleri[i];
        }
    }

    const listeUrunlerFiyat=document.getElementsByName("urunler");
    const listeUrunlerAd=document.getElementsByClassName("urunler");
    

    document.addEventListener("change",()=>{
        let urunFiyat=0;
        eklenecekler=[];
        for(i=0;i<listeUrunlerFiyat.length;i++){
            if(listeUrunlerFiyat[i].checked){
                urunFiyat+=Number(listeUrunlerFiyat[i].value);
                eklenecekler.push(listeUrunlerAd[i].innerHTML);
            }
        }
        console.log(urunFiyat);
        console.log(eklenecekler);
    }
    );
    
    
}

function sepeteEkle(){
    const listeSepet=document.getElementById("sepetMarket");
    document.querySelectorAll('#sepetMarket option').forEach(option => option.remove());

    eklenecekler.forEach(element => {
        const urunSepet=document.createElement("option");
        listeSepet.options.add(urunSepet);
        urunSepet.text=element;
    });

}



