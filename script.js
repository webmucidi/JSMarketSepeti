//Ürün bilgileri dizi tipindeki değişkenlere alındı.
let sutUrunleri=["peynir","40","sut","10","yoğurt","20"];
let gidaUrunleri=["makarna","5","bulgur","10","pirinç","20"];
let temizlikUrunleri=["deterjan","50","sabun","10","çamaşır suyu","5"];

//Döngü için sayaç değişkeni
let i;

//Kategori seçimine göre doldurulacak ürünlerin input ve label tanımı için
let urunAciklama,urunSecenek;

//Sepete eklenecek ürünlerin ve ürünlere ait fiyatların ayrı ayrı taşınması için
let eklenecekler=[];
let fiyatlar=[];

//Sepete ekleme,çıkarma ve boşaltma için sepet nesnesinin seçimi
let listeSepet=document.getElementById("sepetMarket");

//Ödenecek toplam tutarı başta sıfırlayarak tanımladık.
let toplamTutar=0;

//İndirim kodu için bir dizi veya değişken tanımlanabilir.
const kod="PROMO10";
let indirimTutari;
let girilenKod;

let sonucBaslik=document.getElementById("sonuc");

//Kategori seçiminde ürünlerin güncellenmesi için olay yakalayıcı tanımlandı.
for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}   

//Her kategori seçiminde gelecek ürünleri listeleyecek nesneler ve özellikleri tanımlandı
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

//Kategori seçimi yapıldıktan sonra ürün listesini(checkbox) doldurur.
function urunleriGetir(){
    //Ürün panelini her seferinde temizleyip yeniden doldurmak için 
    const silinecekler = document.getElementById("urunPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }

    //Her kategoriye ait ürün içeriklerini dizi üzerinden aldık.
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
}

function sepeteEkle(){
    
    //Sepete eklenecek ürünleri alacağımız checkbox inputlar alındı.
    const listeUrunlerFiyat=document.getElementsByName("urunler");
    const listeUrunlerAd=document.getElementsByClassName("urunler");

    //Eklenecek ürün adedi seçimi
    let adet=document.getElementById("urunAdet").value;

    //Eklenecekler ve fiyatlar dizileri her ekleme sırasında sıfırlandı.
        eklenecekler=[];
        fiyatlar=[];

        //Checkbox inputlarının hepsi gezilerek seçili olanlar dizilere eklendi.
        let secilenUrunCesidi=0;
        for(i=0;i<listeUrunlerFiyat.length;i++){
            if(listeUrunlerFiyat[i].checked){
                //Eklenen adet kadar ürünün fiyatı hesaplandı.
                toplamTutar+=(Number(listeUrunlerFiyat[i].value)*adet);
                eklenecekler.push(listeUrunlerAd[i].innerHTML);
                fiyatlar.push(listeUrunlerFiyat[i].value);
                secilenUrunCesidi++;
            }

            //Sepete ekledikten sonra mevcut seçimleri temizler.
            listeUrunlerFiyat[i].checked=false;
        }
        document.getElementById("sonuc").innerHTML=(secilenUrunCesidi*adet)+" adet ürün sepete eklendi.";

        if(secilenUrunCesidi==0){
            document.getElementById("sonuc").innerHTML="Hiçbir ürün seçimi yapmadınız!";
        }


        //Ekleme sırasında sepete ekli indirim kodu olup olmadığını denetler.
            if(girilenKod!="PROMO10"){
                if(toplamTutar>=50){
                document.getElementById("txtIndirim").disabled=false;
            }
        }


        //Eklenecekleri ve fiyatlarını alabildik mi diye bir bakalım?
        console.log(eklenecekler);
        console.log(fiyatlar);


    //Eklenecek ürün adedi kadar aynı işlemi tekrar et
    for(i=0;i<adet;i++){
        let sepeteEklenecekUrun;
        //Eklenecekler listesindeki herbir ürün için liste elemanlarını oluştur.
        for(let j=0;j<eklenecekler.length;j++){
            sepeteEklenecekUrun=document.createElement("option");
            listeSepet.options.add(sepeteEklenecekUrun);
            //Her eklenen ürün için ad ve fiyat bilgilerini ilgili dizilerden çeker.
            sepeteEklenecekUrun.text=eklenecekler[j];
            sepeteEklenecekUrun.value=fiyatlar[j];
        }
        /*
        eklenecekler.forEach(element => {
            sepeteEklenecekUrun=document.createElement("option");
            listeSepet.options.add(sepeteEklenecekUrun);
            sepeteEklenecekUrun.text=element;
            sepeteEklenecekUrun.value="Fiyat?";

        });
        */
    }

    //Ekleme işlemi yapılınca ara toplam tutarını yazdır.
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}

//Sepetten seçili ürünü indeks değerine bakarak siler.
function sepettenCikar(){
    //Seçili elemanın indeks sırasını ve valuesini alarak toplam tutardan düştük ve sildik.
    let seciliIndeks=listeSepet.selectedIndex;
    let silinecekUrununFiyati=listeSepet.options[seciliIndeks].value;
    listeSepet.options.remove(seciliIndeks);
    //Silinen ürünün fiyatını toplam fiyattan düşürür.
    toplamTutar=toplamTutar-silinecekUrununFiyati;

    //Sepet tutarı 50 liranın altına düşerse indirim tutarını geri al ve indirim tutarını sıfırla
    if(toplamTutar<50){
        document.getElementById("txtIndirim").disabled=true;

        if(girilenKod=="PROMO10"){
            toplamTutar+=indirimTutari;
            document.getElementById("sonuc").innerHTML=girilenKod+" kodu için uygulanan indirim geri alındı.";
        }

        indirimTutari=0;
        girilenKod="";

    }
    else if(toplamTutar<0){
        toplamTutar=0;
    }
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
    sonucBaslik.innerHTML="Seçilen ürün sepetten çıkarıldı.";
    listeSepet.selectedIndex=1;
}

//Tüm ürünleri sözel döngü fonksiyonuyla gezerek
function sepetiBosalt(){
    document.querySelectorAll('#sepetMarket option').forEach(eleman => {
        if(eleman.value!=0){
            eleman.remove();
        } 
        });
        
    toplamTutar=0;
    girilenKod="";
    indirimTutari=0;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
    document.getElementById("txtIndirim").disabled=true;
    document.getElementById("sonuc").innerHTML=" Sepet içeriği tamamen temizlendi.";

}

//İndirim kodunu kontrol ederek indirim uygulama
function koduEkle(){
    
    girilenKod=document.getElementById("txtIndirim").value;
    if(girilenKod == kod)
    {
        indirimTutari=10;
        if(toplamTutar>=50)
        {
            toplamTutar=toplamTutar-indirimTutari;
            
            document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
            document.getElementById("sonuc").innerHTML=girilenKod+" kodu için indirim uygulandı.";
            document.getElementById("txtIndirim").disabled=true;
            document.getElementById("txtIndirim").value="";
        }
        else{
            document.getElementById("sonuc").innerHTML="Girdiğiniz kod için minimum sepet tutarı 50 TL olmalıdır!";
        }
    }
    else{
        document.getElementById("sonuc").innerHTML="Geçerli bir kod girmediniz!";
    }
}

//Eğer sepete ekli bir indirim kodu varsa çıkarır.
function koduCikar(){
    if(girilenKod=="PROMO10"){
        toplamTutar+=indirimTutari;
        document.getElementById("sonuc").innerHTML=girilenKod+" kodu sepetten çıkarıldı.";
        document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
        document.getElementById("txtIndirim").disabled=false;
    }

    girilenKod="";
}


