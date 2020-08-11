<template>
  <div>
    <svg
      width="1200px"
      height="409px"
      id="profile-wave"
      viewBox="0 0 1200 409"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>Created with Lunacy</desc>
      <defs>
        <linearGradient x1="0" y1="0" x2="1" y2="1" id="gradient_1">
          <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.298039228" />
          <stop offset="1" stop-color="#D3D3D3" stop-opacity="0.168627456" />
        </linearGradient>
      </defs>
      <path
        d="M188 195.352C300.003 179.477 310.012 280.852 448.012 223.352C586.012 165.852 643.003 43.9769 830 7.35188C1017 -29.2731 1200 82.8519 1200 82.8519L1200 408.852L-0 408.852C-0 408.852 75.9969 211.227 188 195.352Z"
        id="p-wave"
        fill="url(#gradient_1)"
        stroke="none"
      />
    </svg>
  </div>
</template>

<script>
export default { name: "profile-wave" };
</script>

<style scoped>
#profile-wave {
  position: absolute;
  bottom: 0;
}
</style>