<template>
    <div class="d-flex justify-content-center">
        <div class="d-inline-block fs-3 p-3" style="background: black;">
            <h1 class="text-center pb-3">Évek</h1>
            <div
                v-for="(_, currentYear) in (CONFIG.TIMELINE_END_YEAR - CONFIG.TIMELINE_START_YEAR + 1)"
                class="timeline-wrapper timeline-wrapper-size"
            >
                <TimelineYear
                    :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                    :is-strip="false"
                    :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                />
                <div class="timeline-strip">
                    <div class="timeline-wrapper-size timeline-strip-position-correction">
                        <TimelineYear
                            :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                            :is-strip="true"
                            :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                        />
                    </div>
                </div>
                <div class="timeline-strip">
                    <div class="timeline-wrapper-size timeline-strip-position-correction">
                        <TimelineYear
                            :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                            :is-strip="true"
                            :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                        />
                    </div>
                </div>
                <div class="timeline-strip">
                    <div class="timeline-wrapper-size timeline-strip-position-correction">
                        <TimelineYear
                            :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                            :is-strip="true"
                            :year-content="timelineContent[currentYear + CONFIG.TIMELINE_START_YEAR]"
                        />
                    </div>
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
                    text: "Mariner Mars szonda.",
                    images: [
                    ],
                    isHighlighted: false
                },
                1966: {
                    text: "USA első dokkolás..",
                    images: [
                    ],
                    isHighlighted: false
                },
                1967: {
                    text: "Szojuz-1 szerencsétlenség. Apollo-1 tragédiája. A földi teszt során tűz ütött ki a pilótafülkében, aminek három halálos áldozata lett, köztük Gus Grissom a második amerikai űrhajós.",
                    images: [
                    ],
                    isHighlighted: false
                },
                1971: {
                    text: "Szovjet Marsz-3 űrszonda első landolás más bolygón.",
                    images: [
                    ],
                    isHighlighted: false
                }
            }
        };
    }
}
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

@import "./variables";

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