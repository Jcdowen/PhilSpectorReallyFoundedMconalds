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
    "/ads/AD2.PNG",
    "/ads/AD.GIF",
    "/ads/AD3.PNG",
    "/ads/AD4.PNG",
    "/ads/AD5.PNG",
    "/ads/AD6.PNG",
    "/ads/AD7.PNG",
    "/ads/AD8.GIF",
    "/ads/AD9.PNG",
    "/ads/AD10.GIF",
    "/ads/AD11.PNG",
    "/ads/AD12.PNG",
    "/ads/AD13.GIF",
    "/ads/AD14.PNG",
    "/ads/AD15.PNG",
    "/ads/AD16.PNG",
    "/ads/AD17.PNG",
    "/ads/AD18.PNG",
    "/ads/AD19.PNG",
    "/ads/AD20.PNG",
    "/ads/AD21.PNG",
    "/ads/AD22.PNG",
    "/ads/AD23.PNG",
    "/ads/AD24.PNG",
    "/ads/AD25.PNG",
    "/ads/AD26.PNG",
    "/ads/AD27.PNG",
    "/ads/AD28.PNG",
    "/ads/AD29.PNG",
    "/ads/AD30.PNG",
    "/ads/AD31.JPG",
    "/ads/AD32.JPG",
    "/ads/AD33.JPG",
    "/ads/AD34.PNG",
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
