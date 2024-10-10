<template>
    <div
        class="text-container"
        :class="{ 'header-text-container' : isHeader }"
    >
        <span class="opacity-0">{{ text }}_</span>
        <div class="text-display">
            {{ textDisplay }}<span :class="{ 'cursor-animate': !isTyping }">_</span>
        </div>
    </div>
</template>

<script>
const { 
    TYPING_TEXT: {
        AFTER_CHAR_TYPED_DELAY,
        HEADER_ANIMATION_BEFORE_START_DELAY,
        CURSOR_ANIMATION_AFTER_TYPING_DELAY,
        TEXT_FULLY_VISIBLE_TIME,
        TEXT_HIDDEN_TIME
    },
    HEADER: { FADE_IN_DELAY, FADE_IN_TIME }
 } = CONFIG;

export default {
    props: {
        text: {
            type: String,
            required: true
        },
        isHeader: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isTyping: false,
            typePosition: 0,
            textDisplay: "",
            isTypingForward: true
        };
    },
    mounted() {
        setTimeout(this.startAnimation, this.isHeader ? (HEADER_ANIMATION_BEFORE_START_DELAY + FADE_IN_DELAY + FADE_IN_TIME) : 0);
    },
    methods: {
        startAnimation() {
            this.isTyping = true;
            this.typeNextChar();
        },
        typeNextChar() {
            this.typePosition = this.typePosition + (this.isTypingForward ? 1 : -1);
            this.textDisplay = this.text.substring(0, this.typePosition);

            if (this.typePosition < this.text.length && this.typePosition > 0) {
                setTimeout(this.typeNextChar, AFTER_CHAR_TYPED_DELAY);
            } else {
                setTimeout(() => {
                    this.isTyping = false;
                }, CURSOR_ANIMATION_AFTER_TYPING_DELAY);

                if (this.isHeader) {
                    setTimeout(() => {
                        this.isTyping = true;
                        this.typeNextChar();
                    }, this.isTypingForward ? TEXT_FULLY_VISIBLE_TIME : TEXT_HIDDEN_TIME);

                    this.isTypingForward = !this.isTypingForward;
                }
            }
        }
    }
};
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

$container-padding: 20px;

.text-container {
    font-size: 1.5rem;
    position: relative;
    text-transform: uppercase;
    padding: $container-padding;
    filter: blur(0.75px);
}

.header-text-container {
    background: rgba(0, 0, 0, 0.7);

    @include media-breakpoint-up(md) {
        font-size: 3.5rem;
    }

    @include media-breakpoint-up(lg) {
        font-size: 4.5rem;
    }
}

.text-display {
    position: absolute;
    top: $container-padding;
    left: $container-padding;
    animation: blinking 5s infinite;
}

.cursor-animate {
    opacity: 1;
    animation: cursorAnimation 1s infinite;
}

@keyframes cursorAnimation {
    0%, 40% {
        opacity: 0;
    }
    50%, 90% {
        opacity: 1;
    }
}

@keyframes blinking {
    0%,
    25%, 27%,
    31%, 33%,
    50%, 54%,
    78%, 80%,
    82%, 86%,
    90%, 92% {
        opacity: 1;
    }

    26%, 52%, 79%, 32%, 84%, 91% {
        opacity: 0.9;
    }
}
</style>
