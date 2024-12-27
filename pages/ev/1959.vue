<template>
    <ArticleHeader
        title="1959"
        :images="[
            {
                mobile: luna_1_mobile,
                tablet: luna_1_tablet,
                desktop: luna_1_desktop
            },
            {
                mobile: luna_3_mobile,
                tablet: luna_3_tablet,
                desktop: luna_3_desktop
            },
        ]"
    />
    <div class="px-3 pb-3">
        <h2 class="mb-4">Fontosabb események</h2>
        <div class="article-table-container">
            <table class="table table-bordered mb-5 text-light">
                <thead>
                    <tr>
                        <th>Esemény</th>
                        <th>Dátum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luna-1 kilövés</td>
                        <td>1959 január 2.</td>
                    </tr>
                    <tr>
                        <td>Luna-2 kilövés</td>
                        <td>1959 szeptember 12.</td>
                    </tr>
                    <tr>
                        <td>Luna-2 becsapódása a Holdba</td>
                        <td>1959 szeptember 13. (14. moszkvai idő szerint)</td>
                    </tr>
                    <tr>
                        <td>Luna-3 kilövése</td>
                        <td>1959 október 4.</td>
                    </tr>
                    <tr>
                        <td>Első képek a Hold túloldaláról</td>
                        <td>1959 október 7.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 class="mb-4">Űrszonda a Holdnál: Luna-1 és 2</h2>
        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-left figure">
                <img
                    src="~/assets/images/article/1959/luna_1_article.webp"
                    alt="Luna-1"
                />
                <figcaption class="figure-caption text-center">Luna-1</figcaption>
            </figure>
            <p>
                <span class="fw-bold">
                    A Luna-1 volt az első űreszköz, ami megközelített egy másik égitestet, a Holdat.
                </span>
                A startjára 1959 január 2-án került sor a bajkonuri űrközpontból és 34 óra múlva január 4-én
                érte el az égitestet.
                Minden bizonnyal az volt a cél, hogy becsapódjon a Holdba, erre utal, hogy
                több fémből készült embléma is volt rajta, amik a Szovjetúnió címerét ábrázolták.
                Ez végül nem sikerült, "csak" 6 000 km-re tudta megközelíteni az égi kísérőnket
                (a Föld-Hold távolság átlagosan 384 400 km/h),
                utána elsuhant mellette és szintén a világon első mesterséges tárgyként pályára is állt
                a Nap körül.
                Használata szerint nem nevezhetjük műholdnak, mivel nem kering egy bolygó körül sem,
                a Hold felé tartó útján űrszondaként funkcionált (mivel az űrben végzett méréseket),
                utána pedig mesterséges bolygóként, mivel Nap körüli pályára állt a Föld és a Mars között.
                A küldetés célja az űreszköz külső és belső hőmérsékletének mérése, az interplanetáris ködben
                (égitestek közötti térben fellelhető anyag) található gáz halmazállapotú részecskék,
                a Napból érkező nagy energiájú részecskék, a Föld és a Hold mágneses
                tereinek, mikrometeorok és a kozmikus sugárzás vizsgálata.
            </p>
        </div>

        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-right figure">
                <img
                    src="~/assets/images/article/1959/luna_1_launch_article.webp"
                    alt="Luna-1 kilövés"
                />
                <figcaption class="figure-caption text-center">Luna-1 kilövés</figcaption>
            </figure>
            <p>
                Az űrszonda különlegessége még, hogy ő volt az első űreszköz, ami átlépte
                a második kozmikus sebességet és elhagyta a Föld gravitációs mezőjét.
                A különböző kozmikus sebességek általános fogalmak, különböző égitesteknél
                más-más kozmikus sebességek vannak.
                A Földön az első kozmikus sebesség ~28 000 km/h (ezt sikerült elsőként elérnie
                a Szputnyik-1-nek), azt jelenti, hogy az adott test pályára tud állni a bolygó körül,
                a második kozmikus sebesség vagy szökési sebesség pedig ~40 000 km/h,
                amivel már ki lehet szabadulni a bolygó vonzásából és el lehet indulni pl.: a Holdra
                vagy a Marsra.
                A Földtől 113 000 km-re 1 kg nátrium gázt engedtek ki a szondából, ami egy narancssárgán
                izzó csíkot hagyott maga után, így a Földről is látni lehetett a nyomát
                (az Indiai-Óceánról, nagyon halványan).
            </p>

            <p>
                A Luna-1 361 kg-ot nyomott, 5 antennája volt és az áramellátását akkumulátorok biztosították.
                A tudományos műszerek közül volt rajta magnetométer (ezzel mérik a mágneses teret),
                Geiger-Müller-számláló, szcintillációs számláló (orvosi-biológiai célú sugárzásmérő eszköz)
                és mikrometeorit detektor. Új adatokat szolgált a napszélről, valamint
                megtudtuk, hogy a Holdnak nincs mágneses tere.
            </p>            
        </div>

        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-left figure">
                <img
                    src="~/assets/images/article/1959/luna_2_sphere_article.webp"
                    alt="Luna-2 embléma-gömb"
                />
                <figcaption class="figure-caption text-center">Luna-2 embléma-gömb</figcaption>
            </figure>
            <p>
                A Luna-2 1959 szeptember 12-én indult a Hold felé.
                A küldetés nagyon hasonló volt a Luna-1-hez: szovjet emblémák, narancssárga nátrium
                csík maga után, Geiger-Müller-számláló, mikrometeorit detektor, stb...
                Ami fontos eredmény, hogy ezúttal sikerült eltalálni a Holdat, így
                <span class="fw-bold">
                    a Luna-2 lett az első űreszköz, ami fizikai kontaktusba lépett egy másik égitesttel.
                </span>
                Ezt a rádióadások hirtelen megszakadásából tudjuk.
                Az adatok megerősítették a Luna-1 észlelését, miszerint a Holdnak nincs mágneses tere.
                A becsapódás 250 km-re történt a későbbi Apollo-15 landolási helyétől.
                Az emblémák gömb alakot alkottak, ebből kettő is volt az űrszondán.
                Pár nappal a becsapódás után Hruscsov főtitkár meglátogatta Eisenhower
                amerikai elnököt (ez volt az egyetlen látogatása az USA-ban) és egy ilyen
                gömb másolatát ajándékozta neki.
            </p>           
        </div>

        <h2 class="mb-4">Luna-3 és az első képek a Hold túloldaláról</h2>
        <p>
            Hiába a Pink Floyd album, a valóságban a Holdnak nincs "sötét oldala", csak egy Földről sosem látható fele.
            Ezt a jelenséget a kötött tengelyforgás okozza, vagyis hogy a Hold tengelyforgásának időtartama pontosan
            megegyezik a keringési idejével, ezért mindig ugyanazt az oldalát mutatja felénk.
            Ez azt jelenti, hogy az égi kísérőnk pontosan 27,3 nap alatt tesz meg egy kört a Föld körül
            és a tengelye körül is pontosan 27,3 nap fordul meg.
            Olyan a jelenség, mint a táncos, aki keringőzése közben is mindig a partnere felé néz.
            A jelenség gyakorinak mondható Naprendszerünkben, ilyen még pl.: a Jupiter Europa holdja.
            Valójában a Holdnak kb. 59%-a látható a Földről, mivel időnként egyes oldalaira jobban rálátunk.
            Az égitest felszínét a világosabb felföldek és a sötétebb tengerek borítják.
            A tengerek a legnagyobb becsapódások nyomán jöttek létre, amik átszakították a kérget
            és a kiömlő láva kitöltötte őket, ettől sötétebb a színük.
            A Föld felőli oldalon a felszín 30%-át borítják tengerek, míg a túloldalt csak 3%,
            jelentősen eltér a két oldal látványa.
        </p>

        <p>
            A Luna-3 1959 október 4-én startolt el a bajkonuri űrrepülőtérről.
            A képek készítése mellett még tudományos feladata volt például a kozmikus sugárzás mérése
            és a mikrometeorit becsapódások észlelése.
            Október 7-én kb. 65 000 km-es távolságból
            <span class="fw-bold">
                az űrszonda elkészítette a történelemben az első képeket a Hold túloldaláról
            </span>(összesen 29-et, de csak 17 érkezett meg), amik a túloldal 70%-át fedték le.
            A művelet összesen 40 percet vett igénybe.
            A mai fejlett eszközök híján a képek Földre juttatását egy igen körülményes megoldással oldották meg:
            egy analóg kamera elkészítette a képet, amit egy automatikus rendszer előhívott, fixált és szárított,
            majd egy szkenner beolvasta a fizikai képet és az adatokat továbbították a Földre.
            A kamerának fix helyzete volt, így a pozícionálást az űrszonda forgatásával oldották meg,
            a megfelelő irány megtalálása pedig egy fotocella feladata volt.
            A hidegháború után a nyilvánosságra hozott dokumentumokból kiderült, hogy a felhasznált filmeket
            egy szovjet terület fölé repült CIA kémballonból szerezték.
            Ezek 35 mm-es filmek voltak, amik ellenáltak a hőmérsékletnek és a sugárzásnak, így a szovjet
            tudósok alkalmasnak találták őket a küldetésre.
            A képek rossz minősége ellenére nagy jelentőséggel bírtak, mivel így már tudtuk nagy vonalakban
            milyen a Hold felszíne a sosem látható oldalán.
            Az ábrán a Hold Földhöz közeli oldala, a Luna-3 egyik képe és a 2009-ben róla készült rekonstrukció
            látható, utóbbi a NASA által fellőtt Lunar Reconnaissance Orbiter (LRO) adatai alapján készült.
        </p>

        <figure class="d-none d-md-block figure w-100" style="float: left;">
            <div class="row d-flex align-items-center" style="background: black;">
                <div class="col-sm-4">
                    <img
                        src="~/assets/images/article/1959/moon_near_side_article.webp"
                        alt="a Hold Földhöz közeli oldala"
                        class="w-100"
                    />
                </div>
                <div class="col-sm-4">
                    <img
                        src="~/assets/images/article/1959/Luna_3_moon_article.webp"
                        alt="a Luna-3 egyik képe a túloldaláról"
                        class="w-100"
                    />
                </div>
                <div class="col-sm-4">
                    <img
                        src="~/assets/images/article/1959/moon_far_side_article.webp"
                        alt="a Luna képének 2009-es rekonstrukciója az LRO adatai által"
                        class="w-100"
                    />
                </div>
            </div>
            <figcaption class="figure-caption text-center">
                Balról jobbra: a Hold Földhöz közeli oldala, a Luna-3 egyik képe a túloldaláról
                és a kép 2009-ben róla készült rekonstrukció az LRO adatai által
            </figcaption>
        </figure>
        <figure class="d-md-none d-block figure w-100 mb-3" style="float: left;">
            <img
                src="~/assets/images/article/1959/moon_near_side_article.webp"
                alt="a Hold Földhöz közeli oldala"
                class="w-100"
            />
            <figcaption class="figure-caption text-center">
                a Hold Földhöz közeli oldala
            </figcaption>
        </figure>
        <figure class="d-md-none d-block figure w-100 mb-3" style="float: left;">
            <img
                src="~/assets/images/article/1959/Luna_3_moon_article.webp"
                alt="a Luna-3 egyik képe a túloldaláról"
                class="w-100"
            />
            <figcaption class="figure-caption text-center">
                a Luna-3 egyik képe a túloldaláról
            </figcaption>
        </figure>
        <figure class="d-md-none d-block figure w-100 mb-3" style="float: left;">
            <img
                src="~/assets/images/article/1959/moon_far_side_article.webp"
                alt="a Luna képének 2009-es rekonstrukciója az LRO adatai által"
                class="w-100"
            />
            <figcaption class="figure-caption text-center">
                a Luna képének 2009-es rekonstrukciója az LRO adatai által
            </figcaption>
        </figure>

        <div class="mb-3" style="float: left">
            <p>
                Az űrszonda henger alakú volt, egyik oldalán egy félgömbbel és egy széles karimával.
                A súlya 278.5 kg, hossza 130 cm és a karimánál átmérője 120 cm.
                A szonda akkumulátorait a sok oldalára erősített napelemmel töltötték.
            </p>  
            <p>Események időrendben:</p> 
            <ol>
                <li> kilövés után áthaladt a Föld északi sarka felett</li>
                <li> október 6-án átrepült a Hold déli sarka felett, 6 200 km-re megközelítve azt</li>
                <li> október 7-én elkészítette a képeket és elindult visszafele a Hold északi sarka felett áthaladva</li>
                <li> október 18-ig továbbította a 17 képet a Földre</li>
                <li> október 22-én megszakadt vele a kapcsolat.</li>
            </ol>        
            <p>A Föld légkörébe valamikor 1960 és 62 között zuhant vissza.</p>
            <figure class="w-100 d-flex align-items-center flex-column figure">
                <img
                    src="~/assets/images/article/1959/luna_3_article.webp"
                    alt="Luna-3"
                    class="w-100"
                    style="max-width: 600px;"
                />
                <figcaption class="figure-caption text-center">Luna-3</figcaption>
            </figure>
        </div>
        <!--https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-008A
        hiába a Pink Floyd album, nincs a valóságban a Holdnak "sötét oldala", csak egy Földről sosem látható fele.
        Ezt a jelenséget kötött tengelyforgás okozza, vagyis hogy a Hold tengelyforgásának időtartama pontosan megegyezik
        a keringési idejével, ezért mindig ugyanazt az oldalát mutatja felénk.
        Ez azt jelenti, hogy az égi kísérőnk pontosan 27,3 nap alatt tesz meg egy kört a Föld körül
        és a tengelye körül is pontosan 27,3 nap fordul meg.
        Olyan a jelenség, mint a táncos, aki hiába köröz, mindig a partnere felé néz.
        A jelenség gyakorinak mondható Naprendszerünkben, ilyen még pl.: a Jupiter Europa holdja.
        Valójában a Holdnak kb. 59%-a látható a Földről, mivel időnként egyes oldalaira jobban rálátunk.
        Az égitest felszínét a világosabb felföldek és a sötétebb tengerek borítják.
        A tengerek a legnagyobb becsapódások nyomán jöttek létre, amik átszakították a kérget
        és a kiömlő láva kitöltötte őket, ettől sötétebb a színük.
        A Föld felőli oldalon a felszín 30%-át borítják tengerek, míg a túloldalt csak 3%,
        jelentősen eltér a két oldal látványa.
        
        https://www.nasa.gov/history/60-years-ago-luna-2-makes-impact-in-moon-race/
        1959 október 4-én startolt el a Luna-3 a bajkonuri űrrepülőtérről.
        A képek készítése mellett még tudományos feladata volt például a kozmikus sugárzás mérése
        és a mikrometeorit becsapódások észlelése.
        Október 6-án a Hold déli sarkánál került a Luna-3 az égitest mögé a felszíntől majdnem 8 000 km-es magasságban.
        Másnap több mint 65 000 km-es távolságból az űrszonda 29 képet készített a Hold túloldaláról, a művelet összesen
        40 percet vett igénybe.
        A mai fejlett eszközök híján a képek Földre juttatását egy igen körülményes megoldással oldották meg:
        egy analóg kamera elkészítette a képet, amit egy automatikus rendszer előhívott, fixált és szárított,
        majd egy szkenner beolvasta a fizikai képet és az adatokat továbbították a Földre.
        A kamerának fix helyzete volt, így a pozícionálást az űrszonda forgatásával oldották meg,
        a megfelelő irány megtalálása pedig egy fotocella feladata volt.
        A hidegháború után a nyilvánosságra hozott dokumentumokból kiderült, hogy ezeket a filmeket
        egy szovjet terület fölé repült CIA kémballonból szerezték.
        A filmek 35 mm-es filmre készültek, amik ellenáltak a hőmérsékletnek és a sugárzásnak, így a szovjet
        tudósok alkalmasnak találták őket a küldetésre.
        A képek rossz minősége ellenére nagy jelentőséggel bírtak, mivel így már nagy vonalakban
        milyen a Hold felszíne a sosem látható oldalán.
        -->
        
        <ArticleSources
            :sources="[
                'https://www.youtube.com/watch?v=iC_CMZjCxuY',
                'https://hu.wikipedia.org/wiki/Kozmikus_sebess%C3%A9g',
                'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-012A',
                'https://www.nasa.gov/history/60-years-ago-luna-2-makes-impact-in-moon-race/',
                'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-008A',
                'https://svs.gsfc.nasa.gov/4109',
                'https://hu.wikipedia.org/wiki/K%C3%B6t%C3%B6tt_tengelyforg%C3%A1s',
                'https://mek.oszk.hu/00500/00556/00556.htm#12'
            ]"
        />
    </div>
</template>

<script setup>
definePageMeta({
    layout: "article"
});
</script>

<script>
import luna_1_mobile from "~/assets/images/article/1959/header/luna_1_mobile.webp";
import luna_1_tablet from "~/assets/images/article/1959/header/luna_1_tablet.webp";
import luna_1_desktop from "~/assets/images/article/1959/header/luna_1_desktop.webp";

import luna_3_mobile from "~/assets/images/article/1959/header/luna_3_mobile.webp";
import luna_3_tablet from "~/assets/images/article/1959/header/luna_3_tablet.webp";
import luna_3_desktop from "~/assets/images/article/1959/header/luna_3_desktop.webp";

</script>

<style lang="scss">
</style>