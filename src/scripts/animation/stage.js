import timeline1 from './scene';
import timeline2 from "./scene2";

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.stage-1',
    duration: '50%',
    triggerHook: 0.25
})
    .addIndicators({
        name: "Box Timeline",
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white"
    })
    .setTween(timeline1)
    .addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: '.stage-2',
    duration: '50%',
    triggerHook: 0.25
})
    .addIndicators({
        name: "Box Timeline",
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white"
    })
    .setTween(timeline2)
    .addTo(controller);

