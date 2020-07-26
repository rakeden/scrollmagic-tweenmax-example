const timeline = new TimelineMax({
    defaultEase: Power2.easeInOut
});

timeline.staggerFrom('.box', 1.5, {
    scale: 0,
    cycle: {
        y: [-50, 50]
    },
    stagger: {
        from: 'center',
        amount: 0.75
    }
});

export default timeline;
