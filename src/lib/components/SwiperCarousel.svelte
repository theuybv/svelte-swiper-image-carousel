<script lang="ts">
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import 'swiper/css/navigation';

    import MainSwiper from './MainSwiper.svelte';
    import ThumbsSwiper from './ThumbsSwiper.svelte';
    import {
        CarouselContextKey,
        CarouselCurrentIndexKey,
        type CarouselOptions,
        defaultCarouselOptions
    } from "./CarouselContext";
    import {Pulse as Loader} from 'svelte-loading-spinners'
    import {setContext} from "svelte";
    import {writable} from "svelte/store";

    export let options: CarouselOptions = {
        ...defaultCarouselOptions,
    }

    let containerWidth;

    setContext(CarouselContextKey, options)
    setContext(CarouselCurrentIndexKey, writable(0))


    const imagesPromise = Promise.all(options.images.map((imageSrc) => {
        return new Promise((resolve) => {
            const image = new Image()
            image.src = imageSrc
            image.onload = () => {
                resolve(imageSrc)
            }
        })
    }))
</script>

<section>
    {#await imagesPromise}
        <div class="flex justify-center w-full h-full items-center">
            <Loader size="30" color="var(--tw-ring-color)" unit="px" duration="1s"></Loader>
        </div>
    {:then loadedImages}
        <div class="mb-2">
            <MainSwiper bind:containerWidth={containerWidth}/>
        </div>
        <ThumbsSwiper containerWidth={containerWidth}/>
    {/await}

</section>
