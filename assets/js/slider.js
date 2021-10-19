    let settings = {
        id: "carousel",
        rotation: {
            amount: 1, // How many elements it moves per rotation
            timingFunction: "linear", // Timing function of the movement
            duration: 1000, // How long the movement takes
        },
        buttons: {
            hide: false, // Whether to hide the buttons
            disableForSingle: false, // Disables the buttons when there is only one element in the carousel
        },
        display: {
            number: 3, // Number of elements to display at a time,
            duration: 4500, // If specified then the carousel will rotate every time that number of milliseconds has elapsed
            startOffset: 4500, // Waits this long before auto rotating,
            direction: "left", // The direction to move the carousel either left or right
        },
        class: {
            itemClassName: "carousel-item", // Used if you have altered the class for an item
        },
        fit: {
            fitToParent: false,
            fitToChildren: true,
            responsive: true,
        }
    };

    let example = new Carousel(settings);