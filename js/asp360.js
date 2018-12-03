window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  var vrView = new VRView.Player('#vrview-asp', {
    width: '100%',
    height: 600,
    image: '/images/surf_science_park_360.jpg',    
  });
}
