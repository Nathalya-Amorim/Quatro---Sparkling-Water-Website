(() => {

    // Variable
    let overlayPanel = document.querySelector("#overlay-panel");
    let btnAllFlavours = document.querySelector("#btn-all-flavours");
    let btnCloseOverlayPanel = document.querySelector("#overlay-close-btn");
    let quatroVideo = document.querySelector('video');
    
    function closeOverlayPanel() {
        overlayPanel.style.display = "none";
        quatroVideo.currentTime = 0;
        quatroVideo.pause();
    }

    function openOverlayPanel() {
        overlayPanel.style.display = "block";
    }

    btnAllFlavours.addEventListener('click', openOverlayPanel);
    btnCloseOverlayPanel.addEventListener('click', closeOverlayPanel);

})();