let tl=gsap.timeline({
    scrollTrigger:{
      trigger:"#hero",
      pin:true,
      markers:true,
      start:"top top",
      scrub:2,
      // end:"top bottom"
    }
  });

  tl.to(".orngeBox",{
      opacity:0,
      display:"none"
      
  })
  .to("#leftBx",{
      y:300
  },"-=.5")
  .to("#rightBx",{
    y:-300
},"-=0.5")
.to("#sv1",{
    opacity:0,
    x:-50
},"-=.5")
.to("#sv2",{
    opacity:0,
    x:50
},"-=.5")
.to("#midVideo",{
    width:"100%",
    height:"100vh"
},"-=.5")
.to("#midImage",{
    width:"100%",
    height:"100vh"
})
.to("#girl",{
    width:"0%",
},"-=1")
.to("#midtxt",{
    opacity:0,
    display:"none"
},'-=1')
.to("#overlay",{
    opacity:1
})