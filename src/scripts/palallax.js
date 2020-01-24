(function parallax() {

let parallax = document.querySelector('.parallax');
let layers = parallax.children;

let windowWidth = null;




function moveLayersDependsOnScroll(wScroll)
{
    
  Array.from(layers).forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 20;
      console.log(strafe);
      layer.style.transform = `translateY(-${strafe}%) translateZ(0)`;
  });
}


windowWidth = document.querySelector('body').clientWidth


if (windowWidth > 768) {
window.addEventListener('scroll' , e => {
  const wScroll = window.pageYOffset;

  moveLayersDependsOnScroll(wScroll);

});

}

})();
