<template>
    <div class="d-flex justify-content-center">
        <div class="timeline-container">
            <h1 class="text-center pb-3">Idővonal</h1>
            <div
                v-for="(_, currentYear) in (CONFIG.TIMELINE_END_YEAR - CONFIG.TIMELINE_START_YEAR + 1)"
                class="timeline-wrapper timeline-wrapper-size"
            >
                <div class="d-none d-md-block">
                    <TimelineYear
                        :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                        :is-active="false"
                        :is-show-dot-line="true"
                        :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                    />
                    <div class="timeline-strip">
                        <div class="timeline-wrapper-size timeline-strip-position-correction">
                            <TimelineYear
                                :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                                :is-active="true"
                                :is-show-dot-line="false"
                                :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                            />
                        </div>
                    </div>
                    <div class="timeline-strip">
                        <div class="timeline-wrapper-size timeline-strip-position-correction">
                            <TimelineYear
                                :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                                :is-active="true"
                                :is-show-dot-line="false"
                                :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                            />
                        </div>
                    </div>
                    <div class="timeline-strip">
                        <div class="timeline-wrapper-size timeline-strip-position-correction">
                            <TimelineYear
                                :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                                :is-active="true"
                                :is-show-dot-line="false"
                                :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                            />
                        </div>
                    </div>
                </div>
                <div class="d-block d-md-none">
                    <TimelineYear
                        :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                        :is-active="true"
                        :is-show-dot-line="true"
                        :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import img_1957_sputnik_asm from "~/assets/images/timeline/1957/sputnik_asm.webp";
import img_1957_Laika from "~/assets/images/timeline/1957/Laika.webp";
import img_1958_nasa_logo from "~/assets/images/timeline/1958/nasa_logo.webp";
import img_1958_explorer_1 from "~/assets/images/timeline/1958/explorer_1.webp";
import img_1959_Luna_3_moon from "~/assets/images/timeline/1959/Luna_3_moon.webp";
import img_1959_luna_1 from "~/assets/images/timeline/1959/luna_1.jpg";
import img_1960_belka_strelka from "~/assets/images/timeline/1960/belka_strelka.webp";
import img_1960_tiros_1 from "~/assets/images/timeline/1960/tiros_1.webp";
import img_1961_jurij_gagarin from "~/assets/images/timeline/1961/jurij_gagarin.jpg";
import img_1961_alan_shepard from "~/assets/images/timeline/1961/alan_shepard.webp";
import img_1962_john_glenn from "~/assets/images/timeline/1962/john_glenn.jpg";
import img_1962_we_choose_to_go_to_the_moon from "~/assets/images/timeline/1962/we_choose_to_go_to_the_moon.jpg";
import img_1963_tyereskova from "~/assets/images/timeline/1963/tyereskova.jpg";
import img_1963_Mars_1 from "~/assets/images/timeline/1963/Mars_1.jpg";
import img_1964_ranger_7_first_image from "~/assets/images/timeline/1964/ranger_7_first_image.webp";
import img_1964_voszhod_1 from "~/assets/images/timeline/1964/voszhod_1.jpeg";
import img_1965_first_spacewalk from "~/assets/images/timeline/1965/first_spacewalk.webp";
import img_1965_gemini_6_gemini_7 from "~/assets/images/timeline/1965/gemini_6_gemini_7.jpg";
import img_1966_gemini_8_docking from "~/assets/images/timeline/1966/gemini_8_docking.webp";
import img_1966_luna_9 from "~/assets/images/timeline/1966/luna_9.webp";
import img_1967_Vladimir_Komarov from "~/assets/images/timeline/1967/Vladimir_Komarov.jpg";
import img_1967_apollo_1 from "~/assets/images/timeline/1967/apollo_1.webp";
import img_1968_apollo_7 from "~/assets/images/timeline/1968/apollo_7.jpg";
import img_1968_apollo_8_foldfelkelte from "~/assets/images/timeline/1968/apollo_8_foldfelkelte.jpg";
import img_1969_apollo_11 from "~/assets/images/timeline/1969/apollo_11.jpg";
import img_1969_apollo_11_crew from "~/assets/images/timeline/1969/apollo_11_crew.webp";
import img_1970_apollo_13 from "~/assets/images/timeline/1970/apollo_13.webp";
import img_1970_lunohod_1 from "~/assets/images/timeline/1970/lunohod_1.jpg";
import img_1971_rover from "~/assets/images/timeline/1971/rover.jpg";
import img_1971_szaljut_1 from "~/assets/images/timeline/1971/szaljut_1.jpg";
import img_1972_apollo_17_orange_soil from "~/assets/images/timeline/1972/apollo_17_orange_soil.jpg";
import img_1972_apollo_17_sample from "~/assets/images/timeline/1972/apollo_17_sample.webp";

export default {
    data() {
        return {
            timelineContent: {
                1957: {
                    text: "Október 4-én megkezdődik az űrkorszak, a szovjet Szputnyik-1 műhold sikeres földkörüli pályára állításával. Később szintén a szovjetek földkörüli pályára állították az első élőlényt a Szputnyik-2-vel, Lajka kutyát.",
                    images: [
                        {
                            src: img_1957_sputnik_asm,
                            caption:  "Szputnyik-1"
                        },
                        {
                            src: img_1957_Laika,
                            caption:  "Lajka"
                        }
                    ],
                    isHighlighted: true
                },
                1958: {
                    text: "Létrejön a NASA, az USA is fellövi az első műholdját, az Explorer-1-et, ami először bizonyította méréseivel a Van Allen sugárzási öv létezését. Második műholdjuk, a Vanguard-1 használt elsőként napelemeket (amik 1964-ig üzemeltek), és várhatóan 240 évig fog a Föld körül keringeni.",
                    images: [
                        {
                            src: img_1958_nasa_logo,
                            caption:  "NASA"
                        },
                        {
                            src: img_1958_explorer_1,
                            caption:  "Explorer-1"
                        }
                    ],
                    isHighlighted: false
                },
                1959: {
                    text: "A szovjetek útnak indítják a Luna-1, 2 és 3 űrszondákat a Hold felé. A Luna-1 volt az első ember készítette tárgy, ami második kozmikus sebességgel elhagyta a Föld gravitációs mezőjét, a Luna-3 pedig elkészítette az első képet a Hold Földről sosem látható oldaláról.",
                    images: [
                        {
                            src: img_1959_luna_1,
                            caption:  "Luna-1"
                        },
                        {
                            src: img_1959_Luna_3_moon,
                            caption:  "Luna-3 Hold képe"
                        }
                    ],
                    isHighlighted: false
                },
                1960: {
                    text: "A szovjetek a Szputnyik-5-el sikeresen visszahozzák az első élőlényeket földkörüli pályáról, Belka és Strelka kutyákat. Az USA működésbe helyezte az első sikeres metereológiai műholdat, a TIROS-1-et.",
                    images: [
                        {
                            src: img_1960_belka_strelka,
                            caption:  "Belka és Strelka"
                        },
                        {
                            src: img_1960_tiros_1,
                            caption:  "TIROS-1"
                        }
                    ],
                    isHighlighted: false
                },
                1961: {
                    text: "Április 12-én kijut az első ember az űrbe, a szovjet Jurij Alekszejevics Gagarin. A bajkonuri űrközpontból indulva a Vosztok-1 űrhajóval 108 perc alatt megtett egy teljes kört a Föld körül, majd ejtőernyővel visszatért a Földre. Rá egy hónapra az első amerikai, Alan Shepard is kijutott az űrbe egy negyedórás űrugrás keretein belül.",
                    images: [
                        {
                            src: img_1961_jurij_gagarin,
                            caption:  "Jurij Alekszejevics Gagarin"
                        },
                        {
                            src: img_1961_alan_shepard,
                            caption:  "Alan Shepard"
                        }
                    ],
                    isHighlighted: true
                },
                1962: {
                    text: "Az USA is földkörüli pályára állítja az első űrhajóját, John Glenn-el a fedélzetén. John F. Kennedy elmondja a \"We choose to go to the Moon\" beszédét, amivel meghirdette, hogy Amerika még az évtized előtt embert juttat a Holdra és onnan épségben visszahozza. A szovjetek végrehajtják az akkori leghosszabb emberes űrrepülést a Vosztok-3-al, majd 4 napig tart és 64-szer kerüli meg a Földet.",
                    images: [
                        {
                            src: img_1962_john_glenn,
                            caption:  "John Glenn"
                        },
                        {
                            src: img_1962_we_choose_to_go_to_the_moon,
                            caption:  "John F. Kennedy"
                        },
                    ],
                    isHighlighted: false
                },
                1963: {
                    text: "Feljut az első nő az űrbe, a szovjet Valentyina Tyereskova. Három napos küldetésén 48-szor kerülte meg a Földet, majd ejtőernyővel landolt a Földön. Szintén a szovjetek a Marsz-1 űrszondával elsőként megközelítik a Marsot, a célegyenesben viszont megszakad a kapcsolat.",
                    images: [
                        
                        {
                            src: img_1963_tyereskova,
                            caption:  "Valentyina Vlagyimirovna Tyereskova"
                        },
                        {
                            src: img_1963_Mars_1,
                            caption:  "Marsz-1"
                        }
                    ],
                    isHighlighted: false
                },
                1964: {
                    text: "A szovjetek végrehajtják az első többemberes űrrepülést a Voszhod-1 küldetéssel. Egy napot töltött fenn a három űrhajós, köztük ketten a világon elsőként civilek voltak (egy orvos és egy mérnök). Az USA a Ranger-7-es űrszondával elkészíti az első jóminűségű közeli Hold képeket.",
                    images: [
                        {
                            src: img_1964_voszhod_1,
                            caption:  "Voszhod-1"
                        },
                        {
                            src: img_1964_ranger_7_first_image,
                            caption:  "Ranger-7 első képe"
                        }
                    ],
                    isHighlighted: false
                },
                1965: {
                    text: "A szovjet Alexei Leonov elvégzi az első űrsétát, aminél több mint 12 percig volt a világűrben a Voszhod-2 légzsilipéhez volt csatlakoztatva köldökzsinóron keresztül. Nem sokra rá az első amerikai űrséta is megtörténik a Gemini-4-el, ami 36 percig tartott. Amerikai oldalon sikerül az első űrrandevú a Gemini-6 és a Gemini-7 űrhajók között, legkisebb távolság 30cm közöttük.",
                    images: [
                        {
                            src: img_1965_first_spacewalk,
                            caption:  "első űrséta"
                        },
                        {
                            src: img_1965_gemini_6_gemini_7,
                            caption:  "Gemini-7 a Gemini-6-ról"
                        },
                    ],
                    isHighlighted: false
                },
                1966: {
                    text: "Holdraszállásra készülve a Gemini-8 küldetésen Neil Armstrong és David Scott elsőként dokkol a világűrben egy másik űrjárműhöz, az Agenához. A szovjet Luna-9 elsőként sikeresen végez puha landolást a Holdon és készít képeket közvetlen a felszínéről, a Luna-10 pedig pályára áll a Hold körül, ezáltal az első műholddá válik egy másik égitest körül.",
                    images: [
                        {
                            src: img_1966_gemini_8_docking,
                            caption:  "Agena"
                        },
                        {
                            src: img_1966_luna_9,
                            caption:  "Luna-9"
                        },
                    ],
                    isHighlighted: false
                },
                1967: {
                    text: "Szojuz-1 és Apollo-1 tragédiák. Előbbinél visszatéréskor nem nyílik ki a fő fékezőernyő, így Vlagyimir Mihajlovics Komarov a becsapódás során elhunyt. Utóbbinál egy földi teszt során tűz üt ki az űrhajó kabinjában, aminek következtében Edward White, Gus Grissom és Roger Chaffee életüket vesztik. Az Apollo-4-el sikeresen tesztelik ember nélkül a Saturn V rakétát és az Apollo űrhajót földkörüli pályán.",
                    images: [
                        {
                            src: img_1967_Vladimir_Komarov,
                            caption:  "Vlagyimir Mihajlovics Komarov"
                        },
                        {
                            src: img_1967_apollo_1,
                            caption:  "Edward White, Gus Grissom és Roger Chaffee"
                        }
                    ],
                    isHighlighted: false
                },
                1968: {
                    text: "Az amerikaiak elvégzik az első emberes Apollo küldetésüket, az Apollo-7-et a Saturn IB hordozórakétával, ami során földkörüli pályán gyakorolják a későbbi holdkomppal való űrrandevút, valamint az Apollo-8-at (már Saturn V-el), aminél pedig holdkomp nélkül megkerülik a Holdat, elsőként embert juttatva az égitesthez. Eközben a szovjet Zond-5 űrszonda Holdhoz juttatja az első élőlényeket (4 teknőst), és a Szojuz-2 és 3 holdraszállást előkészítve űrrandevút kísérelnek meg sikertelenül.",
                    images: [
                        {
                            src: img_1968_apollo_7,
                            caption:  "Apollo-7"
                        },
                        {
                            src: img_1968_apollo_8_foldfelkelte,
                            caption:  "Apollo-8 Földkelte"
                        }
                    ],
                    isHighlighted: false
                },
                1969: {
                    text: "Július 20-án az Apollo-11 küldetésen Neil Armstrong a Hold felszínére lép, első emberként a történelemben. Az Apollo-9 során földkörüli pályán tesztelik elsősorban a holdkompot és a hozzávaló dokkolást, másodsorban az új, köldökzsinór nélküli űrruhát. Az Apollo-10 a Holdra szállás főpróbája, minden úgy zajlik, mint a későbbi holdraszállásnál, viszont a holdkomppal leszállás helyett csak 14.5 kilóméterre közelítik meg a Holdat. Az Apollo-11-el Neil Armstrong, Buzz Aldrin és Michael Collins július 16-án indulnak útnak és 20-án érnek célba. Amstrong után Aldrin lép a Hold felszínére, eközben Collins holdkörüli pályán várakozik. Összesen 2 és fél órát töltenek az égitesten. Az Apollo-12 célja a leszállás helyének pontosítása, aminek céljául a korábban felküldött Surveyor-3 űrszondát jelölik ki. Eközben a szovjetek kétszer tesztelik az N1 holdrakétájukat, mindkét alkalommal sikertelenül.",                    images: [
                        {
                            src: img_1969_apollo_11,
                            caption:  "Apollo-11 holdraszállás"
                        },
                        {
                            src: img_1969_apollo_11_crew,
                            caption:  "Neil Armstrong, Michael Collins és Buzz Aldrin"
                        }
                    ],
                    isHighlighted: true
                },
                1970: {
                    text: "Az Apollo-13 odaútja során felrobban az űrhajó szervíz moduljában egy oxigéntartály, ami következtében megsérülnek az üzemanyagcellák és biztonsági okokból inkább nem kísérlik meg bekapcsolni a hajtóművet. A holdraszállásról lemondanak és végül csak hajszál híján menekülnek meg. A baleset nyomán törlik az Apollo-18, 19 és 20 küldetéseket. A szovjetek eljuttatják az első rovert a Holdra, a Lunokhod-1-et, ahol majd egy évig üzemelt, több mint 10 kilómétert megtéve.",
                    images: [
                        {
                            src: img_1970_apollo_13,
                            caption:  "Apollo-13 visszatérés után"
                        },
                        {
                            src: img_1970_lunohod_1,
                            caption:  "Lunokhod-1"
                        }
                    ],
                    isHighlighted: false
                },
                1971: {
                    text: "Az amerikaiak holdralépésével a szovjetek feladják a versenyt és az űrállomások fejlesztését tűzik ki célul, így készítik el a világon az elsőt, a Szaljut-1-et. Első sikeres dokkolás a Szojuz-11-é, a legénység 3 hetet tölt az űrállomáson. A visszatérésükkor azonban túl korán nyílik ki a nyomáskiegyenlítő szelep, megszökik a levegő és a három űrhajós életét veszti. A szovjet Marsz-3 sikeresen hajt végre puha landolást a Marson, elsőként más bolygón. Az Apollo-14 során Alan Shepard betegségéből felépülve ismét kijut az űrbe, az Apollo-15 alatt pedig először vetik be a holdjárót, aminek segítségével majdnem 28 kilómétert tettek meg (a jármű megépítéséért felelős műszaki csoport igazgatója Pavlics Ferenc magyar származású gépészmérnök volt).",
                    images: [
                        {
                            src: img_1971_szaljut_1,
                            caption:  "Szaljut-1"
                        },
                        {
                            src: img_1971_rover,
                            caption:  "holdjáró"
                        }
                    ],
                    isHighlighted: false
                },
                1972: {
                    text: "Az Apollo-16 és 17 küldetések során vulkáni kőzetek begyűjtése volt a cél, viszont egyik során sem találtak (a 17-nél egyszer narancssárgás talajra bukkantak, de később kiderült, hogy nem vulkanikus eredetű). Az utóbbi több rekordot is elért: több mint három felszínen töltött nap, 110 kiló begysűjtött minta, 30.5 megtett kilóméter a holdjáróval, első civil (geológus) a Hold felszínén: Harrison Schmitt.",
                    images: [
                        {
                            src: img_1972_apollo_17_orange_soil,
                            caption:  "narancssárgás talaj"
                        },
                        {
                            src: img_1972_apollo_17_sample,
                            caption:  "Apollo-17 mintagyűjtés"
                        }
                    ],
                    isHighlighted: false
                }
            }
        };
    }

    //szaljut 7 film
}
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

@import "./variables";

.timeline-container {
    display: inline-block;
    padding: 1rem;
    background: black;

    @include media-breakpoint-down(md) {
        background: transparent;
    }
}

.timeline-wrapper-size {
    width: map-get($container-max-widths, xxl);

    @include media-breakpoint-down(xxl) {
        width: map-get($container-max-widths, xl);
    }

    @include media-breakpoint-down(xl) {
        width: map-get($container-max-widths, lg);
    }

    @include media-breakpoint-down(lg) {
        width: map-get($container-max-widths, md);
    }

    @include media-breakpoint-down(md) {
        width: 100vw;
    }
}

.timeline-wrapper {
    position: relative;

    .timeline-strip {
        height: $stripHeight;
        width: 0;
        overflow: hidden;
        position: absolute;
        left: 0;
        transition: $stripTransition;
        z-index: 1;

        &:nth-of-type(1) {
            transition-delay: $containerTransition + $stripTransition * 2;
            top: 0;
        }

        &:nth-of-type(2) {
            top: $stripHeight;
            transition-delay: $containerTransition + $stripTransition;

            .timeline-strip-position-correction {
                top: -100%;
            }
        }

        &:nth-of-type(3) {
            top: $stripHeight * 2;
            transition-delay: $containerTransition;
            
            .timeline-strip-position-correction {
                top: -200%;
            }
        }

        .timeline-strip-position-correction {
            position: absolute;
            left: 0;
        }
    }

    &:hover, &:focus {
        .timeline-strip {
            width: 100%;

            &:nth-of-type(1) {
                transition-delay: $containerTransition;
            }

            &:nth-of-type(3) {
                transition-delay: $containerTransition + $stripTransition * 2;
            }
        }
    }
}
</style>