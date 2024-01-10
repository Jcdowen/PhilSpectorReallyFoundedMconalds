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
    "AD12.PNG",
    "AD13.GIF",
    "AD14.PNG",
    "AD15.PNG",
    "AD16.PNG",
    "AD17.PNG",
    "AD18.PNG",
    "AD19.PNG",
    "AD20.PNG",
    "AD21.PNG",
    "AD22.PNG",
    "AD23.PNG",
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
    "https://www.fubo.tv/welcome/program/MV001202880000/clockstoppers",
    "https://www.freegiveawaysdailyfreeconsolesandhandheldsforfreedaily.com",
    "https://minecraftforfree.com",
    "https://binweevils.net/",
    "https://ww2.123moviesfree.net/movie/cars-2-6922/",
    "https://www.habbo.com/",
    "https://booboo.cc/games/grad_theft_auto_iv",
    "https://play.google.com/store/movies/details/Madagascar?id=1WEw795RnGE&hl=en_US&gl=US",
    "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/teenagestepdad/products/1161026/shirt-1569878674-05c1567310c55d0ad3d2e0a21d0b06c3.png?v=3&d=eyJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMjA5MGI4In1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV0sICJmb3JjZSI6IGZhbHNlLCAib25seV9tZXRhIjogZmFsc2V9",
    "https://www.crazygames.com/t/minecraft",
   "https://www.freegiveawaysdailyfreeconsolesandhandheldsforfreedaily.com",
    "http://loyaltoliberty.com/",
];
