//Hamburger
const hamburger=document.getElementById('hamburger');
const navUL=document.getElementById('nav-ul');
hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
});
//Prikazi vise i prikazi manje
const dugme=document.getElementById('dugme');
const filter=document.getElementById('brend1');
const prva=document.getElementById('prva');
const druga=document.getElementById('druga');
dugme.onclick=function(){
    if(filter.className=="open"){ /*Dugme prikazi vise je vec pritisnuto pa kada se ponovo pritisne sadrzaj je potrebno smanjiti*/
        filter.className="";
        dugme.innerHTML="Prikazi vise";
        prva.style.display="inline";
        druga.style.display="none";
    }
    else
    {
        filter.className="open";
        dugme.innerHTML="Prikazi manje";
        prva.style.display="none";
        druga.style.display="inline";
    }
};
//Za validaciju
function validation(){
    var ime=document.getElementById("ime").value;
    var telefon=document.getElementById("telefon").value;
    var email=document.getElementById("email").value;
    var poruka=document.getElementById("poruka").value;
    var uslov1=document.getElementById("uslov1"); // tekst za ime 
    var uslov2=document.getElementById("uslov2"); //tekst za telefon
    const izraz1=/[0-9]*[a-z]*[.]*[!]*[?]/; //pocetno slovo mora biti veliko,ne sme sadrzati brojeve
    let rezultat1=izraz1.test(ime);
    const izraz2=/^[0-9]*$/; //sadrzi samo brojeve,bez praznina
    let rezultat2=izraz2.test(telefon);
    const izraz3=/[a-z]*@[a-z]*\.com/; //sadrzi samo brojeve,bez praznina
    let rezultat3=izraz3.test(email);
    if(ime.length<5 || rezultat1!=true)
    {
        uslov1.innerHTML="Niste ispravno uneli ime";
        uslov1.style.color="red";
        uslov1.style.marginLeft="-65px";
        uslov1.style.display="block";
    }
    else if(ime.length>=5 && rezultat1==true)
    {
        uslov1.style.display="none";
    }
    if(telefon.length!=10 || rezultat2!=true)
    {
        uslov2.innerHTML="Niste ispravno uneli telefon";
        uslov2.style.color="red";
        uslov2.style.marginLeft="-65px";
        uslov2.style.display="block";
    }
    else if(telefon.length==10 && rezultat2==true)
    {
        uslov2.style.display="none";
    }
    if(email.length<6 || rezultat3!=true)
    {
        uslov3.innerHTML="Niste ispravno uneli email";
        uslov3.style.color="red";
        uslov3.style.marginLeft="-65px";
        uslov3.style.display="block";

    }
    else if(email.length>=6 && rezultat3==true)
    {
        uslov3.style.display="none";
    }
    if(poruka.length<200)
    {
        uslov4.innerHTML="Niste ispravno uneli poruku";
        uslov4.style.color="red";
        uslov4.style.marginLeft="-65px";
        uslov4.style.display="block";

    }
    else if(poruka.length<=200){
        uslov4.style.display="none";

    }
    if(ime.length>=5 && rezultat1==true && telefon.length==10 && rezultat2==true && email.length>=6 && rezultat3==true && poruka.length<=200)
    {
        alert("Uspesno popunjavanje");
        return true;
    }
    else
    {
        return false;
    }
}
//Za stranicu datalji-za slike
function funkcija(mala_slika){
    var velika_slika=document.getElementById("velika");
    velika_slika.src=mala_slika.src;
};
function funkcija2(pomocna){
    var slika=document.getElementById("velika");
    slika.src="pictures/male-slike/prva.jpg";
};
function funkcija3(pomocna){
    var slika=document.getElementById("velika");
    slika.src="pictures/male-slike/cetvrta.jpg";
};
function funkcija4(pomocna){
    var slika=document.getElementById("velika");
    slika.src="pictures/male-slike/peta.jpg";
};
function funkcija5(pomocna){
    var slika=document.getElementById("velika");
    slika.src="pictures/male-slike/treca.jpg";
};
function funkcija6(pomocna){
    var slika=document.getElementById("velika");
    slika.src="pictures/male-slike/druga.jpg";
};
//Za jezik(engleski)
var eng=document.getElementById("eng");
function promena(){
    //prvi header
    var prij=document.getElementsByClassName("prij");
    for(var i=0;i<prij.length;i++)
    {
        prij[i].innerHTML="Sign up";
    }
    var reg=document.getElementsByClassName("reg");
    for(var i=0;i<reg.length;i++)
    {
        reg[i].innerHTML="Register";
    }
    //drugi header
    var dost=document.getElementsByClassName("dost");
    for(var i=0;i<dost.length;i++)
    {
        dost[i].innerHTML="Free delivery for orders over 3000 din";
    }
    var traz=document.getElementsByClassName("traz");
    for(var i=0;i<traz.length;i++)
    {
        traz[i].placeholder="Search...";
    }
     //navigacija
     var muskarci=document.getElementsByClassName("muskarci");
    for(var i=0;i<muskarci.length;i++)
    {
        muskarci[i].innerHTML="MEN";
    }
    var zene=document.getElementsByClassName("zene");
    for(var i=0;i<zene.length;i++)
    {
        zene[i].innerHTML="WOMEN";
    }
    var deca=document.getElementsByClassName("deca");
    for(var i=0;i<deca.length;i++)
    {
        deca[i].innerHTML="KIDS";
    }
    var novo=document.getElementsByClassName("novo");
    for(var i=0;i<novo.length;i++)
    {
        novo[i].innerHTML="NEW";
    }
    var leto=document.getElementsByClassName("leto");
    for(var i=0;i<leto.length;i++)
    {
        leto[i].innerHTML="SUMMER";
    }
    var aut=document.getElementsByClassName("autor-link");
    for(var i=0;i<aut.length;i++)
    {
        aut[i].innerHTML="THE AUTHOR";
    }
    //drugi main
    var kos=document.getElementsByClassName("kos");
    for(var i=0;i<kos.length;i++)
    {
        kos[i].innerHTML="BASKETBALL";
    }
    var fud=document.getElementsByClassName("fud");
    for(var i=0;i<fud.length;i++)
    {
        fud[i].innerHTML="FOOTBALL";
    }
    var trc=document.getElementsByClassName("trc");
    for(var i=0;i<trc.length;i++)
    {
        trc[i].innerHTML="RUNNING";
    }
    //istaknuti proizvodi
    var ist=document.getElementsByClassName("ist");
    for(var i=0;i<ist.length;i++)
    {
        ist[i].innerHTML="Featured Products";
    }
    //poslednji proizvodi
    var pos=document.getElementsByClassName("pos");
    for(var i=0;i<pos.length;i++)
    {
        pos[i].innerHTML="Latest Products";
    }
    //najprodavaniji proizvodi
    var naj=document.getElementsByClassName("naj");
    for(var i=0;i<naj.length;i++)
    {
        naj[i].innerHTML="Best Selling Products";
    }
    //informacije
    var info=document.getElementsByClassName("info");
    for(var i=0;i<info.length;i++)
    {
        info[i].innerHTML="Information";
    }
    var utis=document.getElementsByClassName("utis");
    for(var i=0;i<utis.length;i++)
    {
        utis[i].innerHTML="Customer impressions";
    }
    var kon=document.getElementsByClassName("kon");
    for(var i=0;i<kon.length;i++)
    {
        kon[i].innerHTML="Contact";
    }
    var ser=document.getElementsByClassName("ser");
    for(var i=0;i<ser.length;i++)
    {
        ser[i].innerHTML="Customer service";
    }
    var une=document.getElementsByClassName("une");
    for(var i=0;i<une.length;i++)
    {
        une[i].placeholder="Enter an email";
    }
    //footer
    
    var bre=document.getElementsByClassName("bre");
    for(var i=0;i<bre.length;i++)
    {
        bre[i].innerHTML="BRAND";
    }
    var prik=document.getElementsByClassName("prik");
    for(var i=0;i<prik.length;i++)
    {
        prik[i].innerHTML="Show more";
    }
    var vrst=document.getElementsByClassName("vrst");
    for(var i=0;i<vrst.length;i++)
    {
        vrst[i].innerHTML="CATEGORY";
    }
    var trc=document.getElementsByClassName("trc");
    for(var i=0;i<trc.length;i++)
    {
        trc[i].innerHTML="RUNNING SHOES";
    }
    var dub=document.getElementsByClassName("dub");
    for(var i=0;i<dub.length;i++)
    {
        dub[i].innerHTML="DEEP SHOES";
    }
    var patf=document.getElementsByClassName("patf");
    for(var i=0;i<patf.length;i++)
    {
        patf[i].innerHTML="FOOTBALL SHOES";
    }
    var patk=document.getElementsByClassName("patk");
    for(var i=0;i<patk.length;i++)
    {
        patk[i].innerHTML="BASKETBALL SHOES";
    }
    var cen=document.getElementsByClassName("cen");
    for(var i=0;i<cen.length;i++)
    {
        cen[i].innerHTML="PRICE";
    }
    var svako=document.getElementsByClassName("svako");
    for(var i=0;i<svako.length;i++)
    {
        svako[i].innerHTML="Each of us goes shopping with a specific goal and has in  mind the pieces of clothing,footwear, accessories or equipment that he needs at a given moment. This may not always apply to the purchase of standard footwear and clothing, but it is certainly the case when there are men's sports shoes, women's sports shoes and children's sports shoes. In these cases, the best destination for fans of the original sports style becomes the Best Sneakers Online Shop. The rich offer consists of indispensable sneakers intended for athletes who, professionally or amateurly, are engaged in various sports disciplines. Apart from athletes, the sneakers are also intended for all fans of sports style, so you will find numerous lifestyle models very quickly and easily.";
    }
    //stranica utisci kupaca
    var brz=document.getElementsByClassName("brz");
    for(var i=0;i<brz.length;i++)
    {
        brz[i].innerHTML="Fast delivery, goods completely according to the given description on the site, shared information about every step of the process of preparation and sending the shipment, including a kind offer of assistance for any potential question or doubt. Very professional, world class. Well done!.";
    }
    var jak=document.getElementsByClassName("jak");
    for(var i=0;i<jak.length;i++)
    {
        jak[i].innerHTML="I am very satisfied with the cooperation with the Best Sneakers web shop, I am very satisfied with the communication with web sellers, the speed of delivery, the patience shown by web sellers in answering all my questions. All this influenced my decision to buy. Thank you for eliciting sincere laughter and joy to my four-year-old girl and your children on the street, with your product";
    }
    var vik=document.getElementsByClassName("vik");
    for(var i=0;i<vik.length;i++)
    {
        vik[i].innerHTML="You are an amazing, old customer whose every request you have complied with. It is a pleasure to work with you both as a natural and as a legal entity. Praise";
    }
    var tako=document.getElementsByClassName("tako");
    for(var i=0;i<tako.length;i++)
    {
        tako[i].innerHTML="Very professional and correct cooperation, friendly staff, quick answers to questions. The part that was broken, probably in transport, was sent the second day after advertising. I will probably order here in the future as well.";
    }
    var isp=document.getElementsByClassName("isp");
    for(var i=0;i<isp.length;i++)
    {
        isp[i].innerHTML="Fast delivery";
    }
    var kup=document.getElementsByClassName("kup");
    for(var i=0;i<kup.length;i++)
    {
        kup[i].innerHTML="Free shipping for orders over 6000";
    }
    var kep=document.getElementsByClassName("kep");
    for(var i=0;i<kep.length;i++)
    {
        kep[i].innerHTML="Safe shopping";
    }
    var tip=document.getElementsByClassName("tip");
    for(var i=0;i<tip.length;i++)
    {
        tip[i].innerHTML="Men's lifestyle shoes";
    }
    var vaz=document.getElementsByClassName("vaz");
    for(var i=0;i<vaz.length;i++)
    {
        vaz[i].innerHTML="Valid price";
    }
    var akc=document.getElementsByClassName("akc");
    for(var i=0;i<akc.length;i++)
    {
        akc[i].innerHTML="Action price";
    }
    var ust=document.getElementsByClassName("ust");
    for(var i=0;i<ust.length;i++)
    {
        ust[i].innerHTML="Savings";
    }
    var izbo=document.getElementsByClassName("izbo");
    for(var i=0;i<izbo.length;i++)
    {
        izbo[i].innerHTML="SIZE SELECTION";
    }
    var dod=document.getElementsByClassName("dod");
    for(var i=0;i<dod.length;i++)
    {
        dod[i].innerHTML="ADD TO CART";
    }
    var dostu=document.getElementsByClassName("dostu");
    for(var i=0;i<dostu.length;i++)
    {
        dostu[i].innerHTML="Available in multiple colors";
    }
    var mode=document.getElementsByClassName("mode");
    for(var i=0;i<mode.length;i++)
    {
        mode[i].innerHTML="Modern comfort and authentic Adidas heritage are intertwined in Adidas RUNFALCON men's running shoes that are inspired by running.The sneakers will 'reward' your feet with top-quality pads and ultra-plush steps with Cloudfoam technology (cloud-like foam) with midsoles and soft insoles.";
    }
    var povez=document.getElementsByClassName("povez");
    for(var i=0;i<povez.length;i++)
    {
        povez[i].innerHTML="RELATED PRODUCTS";
    }
    var det=document.getElementsByClassName("det");
    for(var i=0;i<det.length;i++)
    {
        det[i].innerHTML="In more detail";
    }
    var kone=document.getElementsByClassName("kone");
    for(var i=0;i<kone.length;i++)
    {
        kone[i].innerHTML="CONTACT";
    }
    //Stranica kontakt
    var tu=document.getElementById("ime");
    tu.placeholder="Name*";
    var pil=document.getElementById("telefon");
    pil.placeholder="Mobile*";
    var top=document.getElementById("poruka");
    top.placeholder="Message*";
    var posalji=document.getElementById("posalji");
    posalji.value="SEND";
    var usl=document.getElementById("uslov1");
    usl.innerHTML="at least 5 character,initial letter must be uppercase,without numbers";
    var usl1=document.getElementById("uslov2");
    usl1.innerHTML="only numbers,without white space,10 digits";
    var usl2=document.getElementById("uslov3");
    usl2.innerHTML="at least 8 characters,lowercase first then @,again lowercase and finally .com";
    var usl3=document.getElementById("uslov4");
    usl3.innerHTML="at least 200 characters";
};
//za jezik(srpski)
var srp=document.getElementById("srp");
function srpski(){
    location.reload();
};