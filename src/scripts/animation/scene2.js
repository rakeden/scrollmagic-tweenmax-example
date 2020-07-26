const timeline2 = new TimelineMax({
    defaultEase: Power2.easeInOut
});

timeline2.staggerFrom('.boxes', 1.5, {
    scale: 0,
    cycle: {
        x: [-50, 50]
    },
    stagger: {
        from: 'center',
        amount: 0.75
    }
});

export default timeline2;
