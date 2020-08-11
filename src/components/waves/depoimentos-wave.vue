<template>
<svg width="865" height="256" id="depoimentos-wave" viewBox="0 0 865 256" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <desc>Created with Lunacy</desc>
  <defs>
    <linearGradient x1="0.5" y1="0" x2="0.5" y2="1" id="gradient_1">
      <stop offset="0" stop-color="#FFE259" stop-opacity="0.38039216" />
      <stop offset="1" stop-color="#FFA751" />
    </linearGradient>
    <filter filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" id="filter_1">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feOffset dx="0" dy="8" />
      <feGaussianBlur stdDeviation="4" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect0_dropShadow" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect0_dropShadow" result="shape" />
    </filter>
  </defs>
  <g filter="url(#filter_1)">
    <path d="M83 163.109C141.75 147.734 101.75 194.109 235 168.109C368.25 142.109 438.5 -14.6407 590 1.10928C741.5 16.8593 841 231.109 841 231.109L0 229.609C0 229.609 24.25 178.484 83 163.109Z" transform="translate(12 4)" id="New-shape" fill="url(#gradient_1)" stroke="none" />
  </g>
</svg>
</template>

<script>
export default { name: "depoimentos-wave" };
</script>

<style scoped>
#depoimentos-wave {
  position: fixed;
  bottom: -40px;
}
</style>