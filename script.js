function createAdElement() {
    // Generate a random number based on the number of images
    var randomNumber = Math.floor(Math.random() * imageSources.length);

    // Choose the image source based on the random number
    var selectedImage = imageSources[randomNumber];

    // Create an anchor element
    var anchorElement = document.createElement("a");
    anchorElement.href = imageSrcs[randomNumber];

    // Create an image element
    var imageElement = document.createElement("img");
    imageElement.src = selectedImage;

    // Append the image element to the anchor element
    anchorElement.appendChild(imageElement);

    return anchorElement;
}

// Array of image sources (add as many as you want)
var imageSources = [
    "AD2.PNG",
    "AD.GIF",
    "AD3.PNG",
    "AD4.PNG",
    "AD5.PNG",
    "AD6.PNG",
    "AD7.PNG",
    "AD8.GIF",
    "AD9.PNG",
    "AD10.GIF",
    "AD11.PNG",
];

var imageSrcs = [
    "https://gom.us",
    "https://www.amazon.com/Inspector-Gadget-VHS-French-Stewart/dp/B00007AJLF/ref=sr_1_4?crid=3V6OXZFWAHNAQ&keywords=inspector+gadget+2&qid=1704784728&sprefix=inspector+gadget+2+%2Caps%2C200&sr=8-4",
    "https://therockeyes.bandcamp.com/",
    "http://hotmcsingles.com.net/",
    "http://freexbox720giveaway.com/",
    "https://www.play-games.com/harry-potter-games.html",
    "https://www.blockbuster.com/rent/inspector+gadget+dvd+collection",
    "https://www.deepdiscount.com/search?q=garfield&mod=AP",
    "https://www.coolmathgames.com/0-papas-pizzeria",
    "https://miniclip.com/",
    "https://www.smbgames.be/",
];
