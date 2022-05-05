<script lang="ts">
    export let src;
    export let tailwindClass;
</script>

<img class={`${tailwindClass}`} {src} loading="lazy" alt={src}/>
