<template>
    <ArticleHeader
        title="1957 és az előzmények"
        :images="[
            {
                mobile: v2_mobile,
                tablet: v2_tablet,
                desktop: v2_desktop
            },
            {
                mobile: sputnik_mobile,
                tablet: sputnik_tablet,
                desktop: sputnik_desktop
            },
            {
                mobile: Laika_mobile,
                tablet: Laika_tablet,
                desktop: Laika_desktop
            }
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
                        <td>V-2 a világűrben</td>
                        <td>1944 június 20.</td>
                    </tr>
                    <tr>
                        <td>Első sikeres ICBM kilövés</td>
                        <td>1957 augusztus 21.</td>
                    </tr>
                    <tr>
                        <td>Szputnyik-1 kilövés</td>
                        <td>1957 október 4.</td>
                    </tr>
                    <tr>
                        <td>Szputnyik-2 kilövés</td>
                        <td>1957 november 3.</td>
                    </tr>
                    <tr>
                        <td>Vanguard rakéta felrobbanása</td>
                        <td>1957 december 7.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 class="mb-4"> A V-2-től az űrkorszak kezdetéig</h2>
        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-right figure">
                <img
                    src="~/assets/images/article/1957/v2.webp"
                    alt="V-2-es rakéta"
                    width="300"
                    height="240"
                />
                <figcaption class="figure-caption text-center">V-2-es rakéta</figcaption>
            </figure>
            <p>
                A német V-2-es ("fau kettes", teljes nevén Vergeltungswaffe, „a megtorlás fegyvere”) rakéta egy
                nagyon fontos lépcső volt az űrkutatás felvirágzásában.
                Egy folyékony hajtóanyagú rakéta (etanol és víz keveréke), 14 méter magas és 12-13 tonnát nyomott.
                Ez volt az első rakéta, ami átlépte a Kármán-vonalat (100 km) és így kilépett a világűrbe (ez csak
                űrugrás volt, nem állt Föld körüli pályára, miután kifogyott az üzemanyagból egyszerűen visszazuhant!).
                A történelmi repülés 1944 június 20-án történt a maga 175km-es csúcsmagasságával.
                Sajnos a második világháború során egy nagy hatótávolságú fegyverként használták, ballisztikus pályán
                több száz kilóméterről lőtték először Párizst, majd Nagy-Britanniát és Belgiumot.
            </p>
        </div>

        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-left figure">
                <img
                    src="~/assets/images/article/1957/r_7_2.webp"
                    alt="R-7-es rakéta"
                    style="max-width: 200px;"
                    width="400"
                    height="593"
                />
                <figcaption class="figure-caption text-center">R-7-es rakéta</figcaption>
            </figure>
            <p>
                A V-2 egy hatalmas technikai vívmánynak számított, éppen ezért a nagyhatalmak a saját rakétáik
                alapjaiként is használták, valamint a háború után megpróbáltak minél több embert megszerezni
                maguknak az akkori legjobb német rakétatudománnyal foglalkozó tudósok közül.
                Közülük a leghíresebb Wernher von Braun, a V-2 kifejlesztéséért felelős csapat vezetője
                Amerikába került, ahol tovább folytatta a munkáját.
                Kezdetben még nem az űrverseny motiválta a nagyhatalmakat a minél nagyobb hatótávú és erősebb
                rakéták kifejlesztésében, hanem hogy a hidegháborús céloknak megfelelően ballisztikus rakétáikkal
                célba tudják juttatni az új atom- és hidrogénbombáikat.
                Fontos mérföldkő volt az ICBM-ek (Intercontinental ballistic missile, interkontinentális ballisztikus rakéta)
                kifejlesztése, ami azt jelenti, hogy a rakéta min. 5500 km-es hatótávval rendelkezik.
                Több rakétacsalád is volt mindkét oldalon, amiket ICBM-nek terveztek, de végül űrkutatásban
                továbbfejlesztve hordozórakétáknak is használták őket,
                amerikai oldalon például Atlas, Redstone és Titan, szovjet oldalon R-7 és Proton.
                A világ első ICBM-je egy R-7-es Semyorka rakéta volt, amit 1957 augusztus 21-én indítottak utjára.
                A rakéta megípétésével Szergej Pavlovics Koroljov-ot bízták meg, aki haláláig a szovjet rakéta
                fejlesztések/űrkutatás meghatározó alakja volt.
                Az első sikeres amerikai ICBM kilövés még azon év decemberben megtörtént egy Atlas rakétával. 
            </p>
        </div>
        
        <h2 class="mb-4"> Szputnyik-1, az első ember alkotta tárgy Föld körüli pályán</h2>
        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-right figure">
                <img
                    src="~/assets/images/article/1957/sputnik_szerelese.webp"
                    alt="Szputnyik-1 utolsó simítások"
                    width="300"
                    height="169"
                />
                <figcaption class="figure-caption text-center">Szputnyik-1 utolsó simítások</figcaption>
            </figure>
            <p>
                <span class="fw-bold">1957 október 4-én pályára áll az első ember alkotta tárgy a
                Föld körül, ezzel elindítva az űrkorszakot.</span>
                Az eseményre a Nemzetközi geofizikai év (1957 júl. 1. - 1958 dec. 31.) során került sor,
                aminek az elsődleges célja a nemzetközi tudományos együttműködés, a korábbi években
                jellemző teljes elszigetelődéssel szemben. A nagyhatalmak többek között arra tettek
                vállalást, hogy az időszak során mindketten saját műholddat állítanak Föld körüli pályára.
                A cél elérésére Amerikának a Vanguard, a Szovjetúniónak pedig a Szputnyik programja.
                A szovjetek teljes titokban végezték a kilövést, csak utólag értesítették a világot,
                ezzel mindenkit meglepve.
            </p>
        </div>

        <div style="float: left">
            <figure class="article-image-container article-image-left figure">
                <img
                    src="~/assets/images/article/1957/szputnyik_1_kiloves.webp"
                    alt="Szputnyik-1 kilövés"
                    width="300"
                    height="227"
                />
                <figcaption class="figure-caption text-center">Szputnyik-1 kilövés</figcaption>
            </figure>
            <p>
                A műhold neve útitársat jelent, de manapság Oroszországban a műholddal szinoníma.
                A kilövéshez egy módosított R-7-es ICBM rakétát használtak, mivel a hidrogénbomba nagy súlyához
                tervezett monstrum elég erős volt ahhoz, hogy elbírja a 83kg-os űreszközt.
                Egy 58cm-es alumínum gömb burkolattal látták el, amiből 4 antenna állt ki,
                ezekkel csak egy jellegzetes csipogó hangot sugároztak két frekvencián a Földre,
                amiket bárki tudott fogni és megbizonyosodni, hogy tényleg fent van és meg
                lehetett határozni a helyzetét (ezen kívül csak alap adatokat közvetített magáról
                pl.: saját hőmérséklete, komolyabb tudományos méréseket nem végzett).
                A Kazaksztánban található bajkonuri űrrepülőtérről lőtték föl.
                Elliptikus pályán keringett, a Földtől legtávolabbi szakaszánál több mint 900 km magasan járt,
                a bolygót 96 percet kerülte meg.
            </p>
        </div>

        <div style="float: left;">
            <p>5 fő feladata volt a Szputnyiknak:</p>
            <ul>
                <li>mesterséges tárgy Föld körüli pályára állítása</li>
                <li>atmoszféra légköri sűrűségének meghatározása a műhold élettartama alapján
                    (mennyi idő alatt lassítja le annyira a légellenállás, hogy visszaereszkedjen a légkörbe)</li>
                <li>vizuális és rádiós helyzetmeghatározás</li>
                <li>atmoszféra hatása a rádióhullámokra</li>
                <li>észlelni, hogy csapódott-e be meteroid (erre volt egy nyomás alatt tartott nitrogén
                    tartály, ha átüti egy kis meteroid, akkor kiszökik a gáz, ami érzékelhetó,
                    ilyen végül nem történt)</li>
            </ul>
            <p>
                Érdekesség, hogy a fényezett burkolat esténként látható volt a Földről szabad szemmel,
                bár nagyon halványan.
                A kilövést követően 92 napot töltött az űrben, 1958 január 4-éig. 
            </p>
        </div>

        <h2 class="mb-4">Szputnyik-2 és Lajka kutya</h2>
        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-right figure">
                <img
                    src="~/assets/images/article/1957/Lajka_1.webp"
                    alt="Lajka kutya"
                    width="300"
                    height="314"
                    style="max-width: 250px;"
                />
                <figcaption class="figure-caption text-center">Lajka kutya</figcaption>
            </figure>
            <p>
                <span class="fw-bold">A szovjetek nem űltek sokáig a babérjaikon, 1957 november 3-án felbocsátották a
                Szputnyik-2-t Lajka kutyával a fedélzetén, amivel ő lett az első élőlény Föld körüli pályán.</span>
                (itt is a Föld körüli pálya a lényeg, az első élőlényeket egy V-2-es rakétával juttaták fel az űrbe,
                de ezek csak gyümölcslegyek voltak, az első emlős két évvel később jut fel, Albert 2, a rézuszmajom).
                Az űrhajó ezúttal több, mint 500kg (!) volt, 104 perc alatt kerülte meg a Földet és a kilövés
                után 162 nappal később tért vissza az atmoszférába.
            </p>
        </div>

        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-left figure">
                <img
                    src="~/assets/images/article/1957/Laika_2_article.webp"
                    alt="Lajka kutya"
                    width="300"
                    height="225"
                    style="max-width: 250px;"
                />
                <figcaption class="figure-caption text-center">Lajka kutya</figcaption>
            </figure>
            <p>
                A jószág túlélte a kilövést és két napig életben is maradt a világűrben. A különböző fedélzeti
                mérőműszerek között volt egy kamera is, amivel megfigyelték Lajkát.
                Nem viselte jól a történteket, de ennek ellenére evett.
                Kialakítottak számára egy kis párnázott fülkét, amiben feküdni és állni is tudott.
                A küldetést alapból úgy tervezték, hogy nem hozzák vissza az állatot élve, mivel nem állt rendelkezésre
                ehhez még a technológia akkor, de egy meghibásodás miatt már korábban elpusztult a nagy hő
                következtében.
            </p>
        </div>

        <h2 class="mb-4" id="amerika-reakcioja">Amerika reakciója</h2>
        <div class="mb-3" style="float: left">
            <figure class="article-image-container article-image-right figure">
                <img
                    src="~/assets/images/article/1957/vanguard_explosion.webp"
                    alt="Vanguard rakéta robbanása"
                    width="300"
                    height="225"
                />
                <figcaption class="figure-caption text-center">Vanguard rakéta robbanása</figcaption>
            </figure>
            <p>
                Az amerikai társadalmat szó szerint sokkolták a történtek, "Pearl harbor" utáni hangulat uralkodott.
                A kilövés teljes titokban történt, csak a szovjet tudósok tudományos rendezvényeken elejtett 
                célozgatásaikból lehetett sejteni, hogy már közel vannak a kilövéshez.
                Ami méginkább tetézte a bajt, hogy kétszer átrepült az USA felett anélkül, hogy bárki is észrevette volna.
                Az eseményekért Eisenhower elnököt okolták, aki "csak a golfozással foglalkozik", nem tartja kézben
                a dolgokat.
                Eisenhower válaszképp felpörgette a fejlesztéseket és 1957 december 7-én teszt indítást végeznek
                a Vanguard rakétával.
                Az egész médiát meghívták az eseményre, ám az katasztrofálisan végződött:
                a rakéta csak egy méterre emelkedett el a kilővőállásról, utána visszazuhant és felrobbant.
                Wernher von Braun-t hívják segítségül, akinek a rakétája a következő év elején már sikeresen
                feljut a világűrbe, elsőként Amerikában.
            </p>
        </div>
        
        <ArticleSources
            :sources="[
                'https://www.youtube.com/watch?v=0cbcX66IZgc',
                'https://www.nasa.gov/history/sputnik/sputorig.html',
                'https://en.wikipedia.org/wiki/Sputnik_1',
                'https://www.nasa.gov/image-article/sputnik-1/',
                'https://en.wikipedia.org/wiki/R-7_(rocket_family)',
                'https://en.wikipedia.org/wiki/Intercontinental_ballistic_missile',
                'https://www.britannica.com/technology/V-2-rocket',
                'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1957-001B',
                'https://www.space.com/animals-in-space'
            ]"
        />

        <!-- https://www.nasa.gov/history/sputnik/sputorig.html
        A szputnyik fellövése megváltoztatta a hidegháború menetét.
        A hidegháború egy hosszú időszakában nem volt tudományos értelemben kommunikáció a kelet és a nyugat közöt,
        ennek vetett véget a Nemzetközi geofizikai év (1957 júl 1 - 1958 dec 31), megnövekedett naptevékenységről is szólt.
        John P. Hagen Vanguard program vezetője, az IGY-re ő vezette a rakéta kilövést, tehát a Vanguard vezetője,
        aminek a célja az IGY-re egy rakétakilövés az űrbe.
        Késésben volt és csúszott a projekt.
        Ruszkik belengették egy másik szervezet rendezvényén szeptemberben, hogy hetekre vannak a kilövéstől.
        Egy bulin tudták meg az amcsik, hogy fellőtték a ruszkik a rakétát, titokban történt a fellövés. (900km magasan van)
        Egész amerikában kitört a pánik (hisztéria?)
        Kazaksztánból lőtték fel a sivatagban Tyuratam közelében.
        22 inches alumínium gömb 4 antennával, 83kg-t nyomott, elliptikus pályán (a bolygók is ilyenen keringnek)
        96 percenként kerülte meg a földet
        Volt egy rádió adója (radio beacon?), folytonos időközönként sugárzott jeleket és meg lehetett határozni a Földről
        a pontos helyét.
        3 hónap után hullott vissza 1958 jan 4-én
        2x átment az usa fölött és nem vették észre
        a sputnik 1 fellövése "pearl harbor" szintű sokkot jelentett a társadalomra
        új löketet adott az amerikai űrkutatásnak, új tudományos programok és a nasa létrejötte
        nagyságrendekkel nagyobb volt a sputnik 1 a tervezett vanguard műholdnál (< mint 2 kg) 
        3 November 1957-ban újra lecsapnak a komcsik, kevesebb mint 1 hónappal később a sputnik 2-vel földkörüli
        pályára állítják az első élőlényt Lajka kutyát. Az ő űrhajója már több mint 500kg-ot nyomott és majdnem 200 napig
        volt földkörüli pályán
        50-es
        sputnik és vanguard is IGY-s program volt, versengtek egymással már akkor is, 55-ben indult a vanguard
        Eisenhower adminisztrációt okolták sokan a kudarcért
        6 December 1957-ára bejelentették a teszt kilövést
        meghívták a médiát, hogy helyreállítsák az elnök iránti bizalmat, de katasztrófa lett a kilövés
        csak 1 méterre emelkedett el a rakéta, rászkódni kezdett és felrobbant
        1958 februárjában is egy sikertelen kilövés történik
        segítségül hívják Wernher von Braunot és csapatát, hogy egy másik projekt keretén belül építsenek másik rakétát,
        ez lett a project explorer
        31 January 1958-ben sikeres kilövés Juno 1 boosterel és Explorer 1 műholddal
        az explorer 1-en volt egy Geiger-Müller-számláló, hogy mérje a sugárzást a Föld körül, amit James A. Van Allen épített
        bebizonyította a Föld mágneses terének és a Van Allen sugárzási öv létezését (van allen öv anyag)
        végül a vanguard 1 is Föld körüli pályára állt 17 March 1958-ben, az is megerősítette az öveket
        az események hatására megszületett az igény egy állandó civil ügynökség létrehozására, ami az űrkutatással foglalkozik
        létrejön a National Aeronautics and Space Administration, a NASA 1958. július 29-én

        https://www.nasa.gov/image-article/sputnik-1/
        a sputnik 1-el megkezdődik az űrkorszak
        a név eredetile fellow traveler-t jelentett, de manapság a műholddal szinoníma Oroszországban
        5 fő célja a küldetésnek:
        -ember készítette tárgy földkörüli pályára állítása
        -atmoszféra légköri sűrűsége a műhold élettartama alapján
        -rádiós és optikai eljárások a nyomon követésre (orbital tracking?)
        -atmoszféra hatása a rádióhullámok terjedésére
        -légnyomásszabályozás a műholdakon

        3 hétig sugárzott jeleket, utána lemerültek az aksijai

        https://en.wikipedia.org/wiki/R-7_(rocket_family)
        Sergei Korolyov 1953-ban kezdett ICBM-en dolgozni am cálba tudja juttatni az új hidrogén bombákat, ez lett az R-7
        21 August 1957 világ első sikeres ICBM kilövése, amcsik és ruszkik is a német V-2-ből indultak ki
        r-7 eredetileg icbm-nek tervezték, annak nem vált be, nagy teherbírása miatt viszont jó volt a nehéz sputnikhoz
        egy módosítatlan r-7 vitte fel a sputnikot
        rengeteg variánsa készült pl.: vostok (Jurij Gagarin), modernizált verzióját ma is használják (Soyuz)
        a korai ICBM rakétákból fejlődtek ki az űrrakéták, amerikában az egyik ICBM fejlesztés az atlas rakétacsalád
        volt, amit később felhasználtak a mercury programban

        https://www.youtube.com/watch?v=0cbcX66IZgc&list=PLP33AR3c0Ljs_-r0WgNA_ZH0cQlodZ-DO&index=5 7 percig
        szputnyik 3 dolog
        -belső légnyomás
        -belső hőmérséklet
        -csipogó hang sugárzása a Földre
        mindenki tudta a Földön, hogy a ruszkik sikerrel jártak
        kezdetét veszi űrkorszak
        v-2 15m magas, ez is ballisztiukus rakéta (nem ICBM)
        1950-ben kezdett dolgozni redstone rakétán
        eleinte nem bíztak braunékban, csak saját kutatókat alkalmaztak, sikertelenül
        kóbor kutya
        nem volt hőpajzs, nem élhette túl, életben maradnak-e az élőlények a súlytalanságban
        pulzus mérő kutyára
        az volt betervezve, hogy méreggel fájdalommentesen elpusztul, de a hőség végzett vele
        3. földkörüli eszköz explorer 1, 100 napig működött, hány kilós volt az explorer 1?
        1. kozmikus sebesség

        https://www.britannica.com/technology/V-2-rocket
        a v-2 volt az alapja az űrrakétáknak és a nagy hatótávú rakétáknak
        October 3, 1942-ban volt első sikeres kilövés
        először Párizst, majd Nagy-Britanniát és Belgiumot támadták vele
        14 méter magas, 12-13 tonnát nyomott
        June 20, 1944 175km magasra lőtték, ez volt az első ember alkotta tárgy az űrben (nem állt földkörüli pályára
        csak űrugrás!)
        folyékony hajtóanyag -->
    </div>
</template>

<script setup>
definePageMeta({
    layout: "article"
});
</script>

<script>
import v2_mobile from "~/assets/images/article/1957/header/mobile/v2_mobile.webp";
import v2_tablet from "~/assets/images/article/1957/header/tablet/v2_tablet.webp";
import v2_desktop from "~/assets/images/article/1957/header/desktop/v2_desktop.webp";

import Laika_mobile from "~/assets/images/article/1957/header/mobile/Laika_mobile.webp";
import Laika_tablet from "~/assets/images/article/1957/header/tablet/Laika_tablet.webp";
import Laika_desktop from "~/assets/images/article/1957/header/desktop/Laika_desktop.webp";

import sputnik_mobile from "~/assets/images/article/1957/header/mobile/sputnik_asm_mobile.webp";
import sputnik_tablet from "~/assets/images/article/1957/header/tablet/sputnik_asm_tablet.webp";
import sputnik_desktop from "~/assets/images/article/1957/header/desktop/sputnik_asm_desktop.webp";

</script>

<style lang="scss">
</style>