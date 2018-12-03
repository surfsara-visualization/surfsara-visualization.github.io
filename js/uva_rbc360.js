window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  var vrView = new VRView.Player('#vrview-uva-rbc', {
    width: '100%',
    height: 600,
    image: '/images/uva_rbc_360.png',    
  });
}
