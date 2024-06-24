document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById("child-21");
    const mediaQuery = window.matchMedia('(max-width: 1080px)');

    function handleMediaQueryChange(e) {
        if (e.matches) {
            // If the viewport is 1080px or less, change the background color 
            box.classList.add('bg-color');
        }
        else{
            box.classList.remove('bg-color');
        }

    }

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Listen for changes in the viewport size
    mediaQuery.addEventListener('change', handleMediaQueryChange);
});

window.addEventListener("orientationchange", function() {
    if (screen.orientation.type.includes("landscape")) {
      alert("For best experience, please switch to portrait mode.");
    }
  });
