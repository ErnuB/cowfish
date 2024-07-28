<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    
    let currentIndex = 0;
    let isModalOpen = false;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let threshold = 100;
    
    let galeria = [
      { imagen: "/img/galeria/galeria01.jpg" },
      { imagen: "/img/galeria/galeria02.jpg" },
      { imagen: "/img/galeria/galeria03.jpg" },
      { imagen: "/img/galeria/galeria04.jpg" },
      { imagen: "/img/galeria/galeria05.jpg" },
      { imagen: "/img/galeria/galeria06.jpg" },
      { imagen: "/img/galeria/galeria07.jpg" },
      { imagen: "/img/galeria/galeria08.jpg" },
      { imagen: "/img/galeria/galeria09.jpg" },
      { imagen: "/img/galeria/galeria10.jpg" },
      { imagen: "/img/galeria/galeria11.jpg" },
      { imagen: "/img/galeria/galeria12.jpg" },
      { imagen: "/img/galeria/galeria13.jpg" },
      { imagen: "/img/galeria/galeria14.jpg" },
      { imagen: "/img/galeria/galeria15.jpg" },
      { imagen: "/img/galeria/galeria16.jpg" },
      { imagen: "/img/galeria/galeria17.jpg" },
      { imagen: "/img/galeria/galeria18.jpg" },
      { imagen: "/img/galeria/galeria19.jpg" },
      { imagen: "/img/galeria/galeria20.jpg" },
      { imagen: "/img/galeria/galeria21.jpg" },
      { imagen: "/img/galeria/galeria22.jpg" },
      { imagen: "/img/galeria/galeria23.jpg" },
      { imagen: "/img/galeria/galeria24.jpg" },
      { imagen: "/img/galeria/galeria25.jpg" },
      { imagen: "/img/galeria/galeria26.jpg" },
      { imagen: "/img/galeria/galeria27.jpg" },
      { imagen: "/img/galeria/galeria28.jpg" },
      { imagen: "/img/galeria/galeria29.jpg" },
      { imagen: "/img/galeria/galeria30.jpg" },
      { imagen: "/img/galeria/galeria31.jpg" },
      { imagen: "/img/galeria/galeria32.jpg" },
      { imagen: "/img/galeria/galeria33.jpg" },
    ];
  
    const openModal = (index) => {
      currentIndex = index;
      isModalOpen = true;
    };
  
    const closeModal = () => {
      isModalOpen = false;
    };
  
    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    };
  
    const handleTouchMove = (event) => {
      if (!isModalOpen) return;
      let touchobj = event.changedTouches[0];
      distX = touchobj.clientX - startX;
      distY = touchobj.clientY - startY;
    };
  
    const handleTouchEnd = () => {
      if (!isModalOpen) return;
      if (Math.abs(distX) >= threshold) {
        if (distX > 0 && currentIndex > 0) {
          currentIndex--;
        } else if (distX < 0 && currentIndex < galeria.length - 1) {
          currentIndex++;
        }
      }
      distX = 0;
      distY = 0;
    };
  
    onMount(() => {
      window.addEventListener('touchstart', handleTouchStart, false);
      window.addEventListener('touchmove', handleTouchMove, false);
      window.addEventListener('touchend', handleTouchEnd, false);
  
      return () => {
        window.removeEventListener('touchstart', handleTouchStart, false);
        window.removeEventListener('touchmove', handleTouchMove, false);
        window.removeEventListener('touchend', handleTouchEnd, false);
      };
    });
  </script>
  
  <div class="mx-1 my-4" transition:slide>
    <div class="flex flex-wrap gap-0.5 justify-center items-center">
      {#each galeria as { imagen }, index}
        <button class="w-1/5" on:click={() => openModal(index)}>
          <img src={imagen} alt="Experiencias CowFish" class="object-contain cursor-pointer">
        </button>
      {/each}
    </div>
  </div>
  
  {#if isModalOpen}
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div class="relative">
        <button class="absolute top-0 right-5 m-2" on:click={closeModal}><i class="fa-solid fa-x text-xl text-red-700"></i></button>
        <img src={galeria[currentIndex].imagen} alt="Experiencias CowFish" class="w-11/12 m-auto max-h-full" draggable="false">
      </div>
    </div>
  {/if}