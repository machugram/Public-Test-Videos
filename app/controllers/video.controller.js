    exports.getVideos = (req,res) => {
        let videos = [{
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],
            "_id": "615ba14d96717f651e926890",
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "subtitle": "By Blender Foundation",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
            "title": "Big Buck Bunny",
            "createdAt": "2021-10-05T00:50:21.144Z",
            "updatedAt": "2021-10-05T00:50:21.144Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"],
            "_id": "615bb2fcc1aaae0016ecb989",
            "description": "The first Blender Open Movie from 2006",
            "subtitle": "By Blender Foundation",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
            "title": "Elephant Dream",
            "createdAt": "2021-10-05T02:05:48.069Z",
            "updatedAt": "2021-10-05T02:05:48.069Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"],
            "_id": "615bb31ac1aaae0016ecb98b",
            "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
            "title": "For Bigger Blazes",
            "createdAt": "2021-10-05T02:06:18.105Z",
            "updatedAt": "2021-10-05T02:06:18.105Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"],
            "_id": "615bb323c1aaae0016ecb98d",
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
            "title": "For Bigger Escape",
            "createdAt": "2021-10-05T02:06:27.189Z",
            "updatedAt": "2021-10-05T02:06:27.189Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"],
            "_id": "615bb32cc1aaae0016ecb98f",
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
            "title": "For Bigger Fun",
            "createdAt": "2021-10-05T02:06:36.572Z",
            "updatedAt": "2021-10-05T02:06:36.572Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"],
            "_id": "615bb338c1aaae0016ecb991",
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
            "title": "For Bigger Joyrides",
            "createdAt": "2021-10-05T02:06:48.226Z",
            "updatedAt": "2021-10-05T02:06:48.226Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"],
            "_id": "615bb341c1aaae0016ecb993",
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
            "subtitle": "By Google",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
            "title": "For Bigger Meltdowns",
            "createdAt": "2021-10-05T02:06:57.699Z",
            "updatedAt": "2021-10-05T02:06:57.699Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"],
            "_id": "615bb34dc1aaae0016ecb995",
            "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
            "subtitle": "By Blender Foundation",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
            "title": "Sintel",
            "createdAt": "2021-10-05T02:07:09.928Z",
            "updatedAt": "2021-10-05T02:07:09.928Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"],
            "_id": "615bb354c1aaae0016ecb997",
            "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
            "subtitle": "By Garage419",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
            "title": "Subaru Outback On Street And Dirt",
            "createdAt": "2021-10-05T02:07:16.864Z",
            "updatedAt": "2021-10-05T02:07:16.864Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"],
            "_id": "615bb35fc1aaae0016ecb999",
            "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
            "subtitle": "By Blender Foundation",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
            "title": "Tears of Steel",
            "createdAt": "2021-10-05T02:07:27.529Z",
            "updatedAt": "2021-10-05T02:07:27.529Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"],
            "_id": "615bb369c1aaae0016ecb99b",
            "description": "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
            "subtitle": "By Garage419",
            "thumb": "images/VolkswagenGTIReview.jpg",
            "title": "Volkswagen GTI Review",
            "createdAt": "2021-10-05T02:07:37.561Z",
            "updatedAt": "2021-10-05T02:07:37.561Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"],
            "_id": "615bb372c1aaae0016ecb99d",
            "description": "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
            "subtitle": "By Garage419",
            "thumb": "images/WeAreGoingOnBullrun.jpg",
            "title": "We Are Going On Bullrun",
            "createdAt": "2021-10-05T02:07:46.057Z",
            "updatedAt": "2021-10-05T02:07:46.057Z",
            "__v": 0
        }, {
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"],
            "_id": "615bb37bc1aaae0016ecb99f",
            "description": "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
            "subtitle": "By Garage419",
            "thumb": "images/WhatCarCanYouGetForAGrand.jpg",
            "title": "What care can you get for a grand?",
            "createdAt": "2021-10-05T02:07:55.566Z",
            "updatedAt": "2021-10-05T02:07:55.566Z",
            "__v": 0
        }]
        return res.status(200).json(videos)
    }