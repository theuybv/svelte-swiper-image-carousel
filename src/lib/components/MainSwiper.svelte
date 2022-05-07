<script lang="ts">
    import {Swiper, SwiperSlide} from 'swiper/svelte';
    import SlideImage from '$lib/components/SlideImage.svelte';
    import {getContext} from "svelte";
    import {CarouselContextKey, CarouselCurrentIndexKey, type CarouselOptions} from "./CarouselContext";
    import {Autoplay, EffectFade, Pagination} from "swiper";
    import {type Writable} from "svelte/store";

    export let containerWidth = 0

    let swiperInstance: typeof Swiper

    const onSwiper = (e: unknown) => {
        const [swiper]: [typeof Swiper] = e.detail;
        setTimeout(() => {
            swiperInstance = swiper
        }, 0)
    };

    const onSlideChange = (e: unknown) => {
        const [swiper]: [typeof Swiper] = e.detail[0];
        currentIndex.set(swiper.activeIndex)
    };

    let options: CarouselOptions = getContext(CarouselContextKey)
    const {images, maxImageHeight, imageAspectRatio} = options
    const currentIndex: Writable<number> = getContext(CarouselCurrentIndexKey)

    $: if ($currentIndex && swiperInstance) {
        swiperInstance.slideTo($currentIndex)
    }
    let autoPlayOptions = options.autoPlay ?
        {disableOnInteraction: false, delay: options.autoPlay.delay}
        : false
</script>
<Swiper
        autoplay={autoPlayOptions}
        pagination={{
        clickable: true,
      }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        slidesPerView={1}
        on:slideChange={onSlideChange}
        on:swiper={onSwiper}
        class={`${imageAspectRatio} bg-black`}
        style={`max-height: ${maxImageHeight}px`}
>
    {#each images as image}
        <SwiperSlide>
            <div bind:clientWidth={containerWidth}>
                <SlideImage tailwindClass={`${imageAspectRatio} object-contain`} src={image}/>
            </div>
        </SwiperSlide>
    {/each}
</Swiper>
