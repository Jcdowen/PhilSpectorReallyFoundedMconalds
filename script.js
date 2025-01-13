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
    "/ad/AD2.PNG",
    "/ad/AD.GIF",
    "/ad/AD3.PNG",
    "/ad/AD4.PNG",
    "/ad/AD5.PNG",
    "/ad/AD6.PNG",
    "/ad/AD7.PNG",
    "/ad/AD8.GIF",
    "/ad/AD9.PNG",
    "/ad/AD10.GIF",
    "/ad/AD11.PNG",
    "/ad/AD12.PNG",
    "/ad/AD13.GIF",
    "/ad/AD14.PNG",
    "/ad/AD15.PNG",
    "/ad/AD16.PNG",
    "/ad/AD17.PNG",
    "/ad/AD18.PNG",
    "/ad/AD19.PNG",
    "/ad/AD20.PNG",
    "/ad/AD21.PNG",
    "/ad/AD22.PNG",
    "/ad/AD23.PNG",
    "/ad/AD24.PNG",
    "/ad/AD25.PNG",
    "/ad/AD26.PNG",
    "/ad/AD27.PNG",
    "/ad/AD28.PNG",
    "/ad/AD29.PNG",
    "/ad/AD30.PNG",
    "/ad/AD31.JPG",
    "/ad/AD32.JPG",
    "/ad/AD33.JPG",
    "/ad/AD34.PNG",
];

var imageSrcs = [
    "https://gom.us","https://www.amazon.com/Inspector-Gadget-VHS-French-Stewart/dp/B00007AJLF/ref=sr_1_4?crid=3V6OXZFWAHNAQ&keywords=inspector+gadget+2&qid=1704784728&sprefix=inspector+gadget+2+%2Caps%2C200&sr=8-4",
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
    "http://spiderman4.com",
];
