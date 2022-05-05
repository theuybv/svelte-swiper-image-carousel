<script lang="ts">

    import SwiperCarousel from "../lib/components/SwiperCarousel.svelte";
    import {type CarouselOptions, defaultCarouselOptions} from "../lib/components/CarouselContext";
    import {getDemoImages} from "$lib";


    const demoOptions: CarouselOptions[] = [
        {
            ...defaultCarouselOptions,
            imageAspectRatio:"aspect-[1/1]",
            images: getDemoImages(10, "aspect-[4/3]"),
            thumbAspectRatio: "aspect-[1/1]"
        },
        {
            ...defaultCarouselOptions,
            images: getDemoImages(10, "aspect-[3/2]"),
            imageAspectRatio: "aspect-[3/2]",
            thumbsPerView: 6
        },
        {
            ...defaultCarouselOptions,
            images: getDemoImages(4, "aspect-[4/3]"),
            thumbsPerView: 5
        },
        {
            ...defaultCarouselOptions,
            images: getDemoImages(8, "aspect-[3/2]"),
            thumbsPerView: 4,
            thumbAspectRatio: "aspect-[3/2]"
        }
    ]
</script>

<div class="container mx-auto p-4">
    <div class="flex flex-col gap-16">
        <h1 class="text-4xl text-center">Svelte Image Carousel with Swiper JS</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {#each demoOptions as options}
                <SwiperCarousel options={options}/>
                <div class="flex flex-col justify-center">
                    <ul>
                        {#each Object.keys(options) as optionKey}
                            <li>
                                {#if optionKey !== 'images'}
                                    <strong>{optionKey}</strong>:{options[optionKey]}
                                {/if}
                            </li>
                        {/each}
                        <li><strong>totalImages: </strong>{options.images.length}</li>
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</div>
