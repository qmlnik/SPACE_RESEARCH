<template>
    <NuxtLink
        class="container year-container"
        :class="[isStrip ? 'strip-container' : null]"
        :to="`/year/${year}`"
    >
        <div class="d-flex align-items-center h-100">
            <div class="year">
                {{ year }}
            </div>
            <div class="dot-container">
                <template v-if="!isStrip">
                    <div class="dot">
                    </div>
                    <template v-if="!isLast">
                        <div class="dot-connect-circle-clipper clipper-1">
                            <div class="dot-connect-circle"></div>
                        </div>
                        <!--<div class="dot-connect-circle-clipper clipper-2">
                            <div class="dot-connect-circle"></div>
                        </div>-->
                    </template>
                </template>
            </div>
        </div>
        <div class="timeline-text-container">
            Ez egy teszt szöveg. Legyen valami Apollo 11-es. A Saturn 5 egy 3 fokozatú rakéta volt.
        </div>
        <div class="images-container" :style="{ filter: `grayscale(${isStrip ? 0 : 0.8})` }">
            <div class="image-cropper">
                <img
                    src="~/assets/images/patch.png"
                />
            </div>
            <div class="image-cropper">
                <img
                    src="~/assets/images/saturn5.jpg"
                />
            </div>
            <div class="image-cropper">
                <img
                    src="~/assets/images/apollo-11-thumb.jpg"
                />
            </div>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        year: {
            type: Number,
            required: true
        },
        isStrip: {
            type: Boolean,
            required: true
        },
        isLast: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss">
@import "./variables";

@mixin dotConnectCircleMixin($dotConnectSize, $containerHeight) {
    height: $dotConnectSize;
    width: $dotConnectSize;
    left: $dotConnectClipperWidth - (1 - cos(asin(($containerHeight / 2) / ($dotConnectSize / 2)))) * ($dotConnectSize / 2);
    top: -($dotConnectSize / 2 - $containerHeight / 2);
}

.year-container {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    color: $color;
    padding: 0;
    align-items: center;
    background: black;

    .year {
        width: 50px;
    }

    .timeline-text-container {
        background-color: rgba(0, 0, 0, 0.3);
        padding: 20px;
        position: absolute;
        left: 100px;
        z-index: 1;
        max-width: 70%;
    }

    .images-container {
        position: absolute;
        left: 0;
        width: 100%;
        height: $containerHeight;
        display: flex;
        overflow: hidden;
        justify-content: flex-end;
        align-items: center;
        height: calc(100% - 30px);

        .image-cropper {
            height: $containerHeight * 2;
            width: $containerHeight * 2;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;

            &:nth-of-type(1) {
                transform: rotate(-45deg) translate(30%, 30%);
            }

            &:nth-of-type(2) {
                transform: rotate(-45deg) translate(15%, 15%);
            }

            &:nth-of-type(3) {
                transform: rotate(-45deg) translate(0, 0);
            }

            img {
                transform: rotate(45deg);
                height: 200%;
                width: auto;
            }
        }
    }

    .dot-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 20px;
        position: relative;

        .dot {
            width: $dotSize;
            height: $dotSize;
            border-radius: 50%;
            border: $dotBorderWidth solid $color;
            position: absolute;
            background: black;
            z-index: 4;
        }

        .dot-connect-circle-clipper {
            position: absolute;
            top: 0;
            right: 0;
            height: $containerHeight;
            width: $dotConnectClipperWidth;
            overflow: hidden;
            transition: $containerTransition;
            z-index: 3;

            .dot-connect-circle {
                border-radius: 50%;
                border: 1px solid $color;
                position: absolute;
                z-index: 1;
                transition: $containerTransition;            
            }

            &.clipper-1 {
                .dot-connect-circle {
                    @include dotConnectCircleMixin($dotConnect1Size, $containerHeight);
                }
            }

            &.clipper-2 {
                .dot-connect-circle {
                    @include dotConnectCircleMixin($dotConnect2Size, $containerHeight);
                }        
            }
        }
    }

    &.strip-container {
        font-size: 1.1rem;
        color: white;

        .image-cropper {
            height: $containerHeightHover * 2;
            width: $containerHeightHover * 2;
        }
    }
}

.timeline-year-container:hover, .timeline-year-container:has(+ .timeline-year-container:hover) {
    .dot-connect-circle-clipper {
        height: $containerHeightHover / 2 + $containerHeight / 2;

        &.clipper-1 .dot-connect-circle {
            @include dotConnectCircleMixin($dotConnect1Size, $containerHeightHover / 2 + $containerHeight / 2);
        }

        &.clipper-2 .dot-connect-circle {
            @include dotConnectCircleMixin($dotConnect2Size, $containerHeightHover / 2 + $containerHeight / 2);
        }
    }
}

.timeline-year-container:nth-child(odd) {
    .dot-connect-circle-clipper {
        transform: rotate(180deg);
        transform-origin: right;
    }
}
</style>