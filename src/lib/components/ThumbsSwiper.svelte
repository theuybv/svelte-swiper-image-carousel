<script lang="ts">

    import {Swiper, SwiperSlide} from 'swiper/svelte';
    import SlideImage from '$lib/components/SlideImage.svelte';
    import {getContext} from "svelte";
    import {CarouselContextKey, CarouselCurrentIndexKey, type CarouselOptions} from "./CarouselContext";
    import {Navigation} from "swiper";
    import {writable, type Writable} from "svelte/store";

    export let containerWidth;

    let swiperInstance: typeof Swiper
    let currentActiveIndex = writable(0)

    $: if (containerWidth && containerWidth > 0 && swiperInstance) {
        swiperInstance.el.style.width = `${containerWidth}px`;
        setTimeout(() => {
            swiperInstance.updateSize();
        }, 800);
    }
    const onSwiper = (e: unknown) => {
        const [swiper]: [typeof Swiper] = e.detail;
        setTimeout(() => {
            swiperInstance = swiper
        }, 0)
    };

    const onSlideChange = (e: unknown) => {
        const [swiper]: [typeof Swiper] = e.detail[0];
        currentActiveIndex.set(swiper.activeIndex)
    };

    const options: CarouselOptions = getContext(CarouselContextKey)

    const currentIndex = getContext<Writable<number>>(CarouselCurrentIndexKey)

    const {images, thumbsPerView} = options


    const onThumbClick = (_event: PointerEvent, index: number) => {
        currentIndex.set(index)
    }

    const navigationOptions = {
        nextEl: '.thumbs-next',
        prevEl: '.thumbs-prev',
    }

    $: if ($currentIndex === 0 && swiperInstance) {
        swiperInstance.slideTo(0)
    }

    $: if ($currentIndex && swiperInstance) {
        swiperInstance.slideTo($currentIndex)
    }

    $: disableNextClass = $currentActiveIndex === 0 ? 'opacity-40' : ''
    $: disablePrevClass = $currentActiveIndex + options.thumbsPerView === options.images.length ? 'opacity-40' : ''

</script>
<Swiper class="relative" modules={[Navigation]} navigation={navigationOptions} slidesPerView={thumbsPerView}
        spaceBetween={8}
        on:swiper={onSwiper}
        on:slideChange={onSlideChange}>
    <div slot="container-start" class="pointer-events-none absolute z-10 w-full h-full">
        <div class="flex items-center w-full h-full justify-between px-2 -mt-0.5">
            <div class={`pointer-events-auto thumbs-prev bg-white rounded-full ${disableNextClass}`}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
            </div>
            <div class={`pointer-events-auto thumbs-next bg-white rounded-full ${disablePrevClass}`}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    </div>
    {#each images as image, index}
        <SwiperSlide>
            <button class="w-full" on:click={e => onThumbClick(e, index)}>
                <SlideImage
                        tailwindClass={`${options.thumbAspectRatio} object-cover box-content ${index === $currentIndex ? 'border-b-4 border-blue-600' : ''}`}
                        src={image}/>
            </button>
        </SwiperSlide>
    {/each}
</Swiper>
