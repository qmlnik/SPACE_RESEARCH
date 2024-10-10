<template>
    <h1 class="text-center pb-4">Évek</h1>
    <div class="fs-3">
        <div
            v-for="(_, currentYear) in (CONFIG.TIMELINE_END_YEAR - CONFIG.TIMELINE_START_YEAR + 1)"
            class="timeline-year-container"
        >
            <TimelineYear
                :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                :is-strip="false"
                :is-last="currentYear + CONFIG.TIMELINE_START_YEAR === CONFIG.TIMELINE_END_YEAR"
            />
            <div class="timeline-strip">
                <div class="container p-0 timeline-strip-position-correction">
                    <TimelineYear
                        :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                        :is-strip="true"
                    />
                </div>
            </div>
            <div class="timeline-strip">
                <div class="container p-0 timeline-strip-position-correction">
                    <TimelineYear
                        :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                        :is-strip="true"
                    />
                </div>
            </div>
            <div class="timeline-strip">
                <div class="container p-0 timeline-strip-position-correction">
                    <TimelineYear
                        :year="currentYear + CONFIG.TIMELINE_START_YEAR"
                        :is-strip="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timelineInfoTexts: {
                1957: "Első Űrrepülés.",
                1969: "Első Holdra szállás."
            }
        };
    }
}
</script>

<style lang="scss">
@import "./variables";

.timeline-year-container {
    position: relative;
    height: $containerHeight;
    transition: $containerTransition;

    .timeline-strip {
        height: $stripHeight;
        width: 0;
        overflow: hidden;
        position: absolute;
        left: 0;
        transition: $stripTransition;
        transition-delay: $containerTransition;
        z-index: 2;

        .timeline-strip-position-correction {
            position: absolute;
            left: 0;
            width: 3000px;
            height: $containerHeight;
            display: flex;
            align-items: center;
            
        }

        &:nth-of-type(1) {
            top: 0;
        }

        &:nth-of-type(2) {
            top: $stripHeight;
            transition-delay: $stripTransition;

            .timeline-strip-position-correction {
                top: -$stripHeight;
            }
        }

        &:nth-of-type(3) {
            top: $stripHeight * 2;
            transition-delay: $stripTransition * 2;
            
            .timeline-strip-position-correction {
                top: -$stripHeight * 2;
            }
        }
    }

    &:hover, &:focus {
        height: $containerHeightHover;

        .dot {
            border: $dotBorderWidth solid white;

            .dot-connect-circle {
                border: 1px solid white;
            }
        }

        .timeline-strip {
            width: 100%;

            .timeline-strip-position-correction {
                height: $containerHeightHover;
                left: 0px;
            }
        }
    }
}
</style>