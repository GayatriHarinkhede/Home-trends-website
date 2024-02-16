gsap.from(".nav-link",{
 y:-10,
 delay:1,
 duration:2,
 opacity:0
})
gsap.from("em",{
    y:-10,
    delay:1,
      y:-10,
      duration:2,
    opacity:0,
    
    })
    gsap.from(".text1",{
        x:-150,
        delay:1,
          duration:2,
        opacity:0,
        
        })
        gsap.from(".para",{
            x:150,
            delay:1,
              duration:2,
            opacity:0,
            
            })
            gsap.from(".home-btn",{
                y:150,
                delay:1,
                  duration:2,
                opacity:0,
                
                })
    
//    })
//    gsap.from(".card2",{
//     y:100,
//     delay:1,
//     duration:1,
//     opacity:0
//    })
//    gsap.from(".card3",{
//     x:100,
//     delay:1,
//     duration:1,
//     opacity:0
//    })
gsap.from(".row7 img",{
    x:-100,
    opacity:1,
         scrollTrigger:{
            trigger:".row7 img",
            scroller:"body"
        }
})
