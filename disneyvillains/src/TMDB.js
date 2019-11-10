import dotenv from 'dotenv';

dotenv.config();

const TMDB = {
  api_key: '85cd5e63356ff0dc25f30b35f77d2140',
  
  films: [
    {
      "id": 812,
        "title": "Jafar",
        "imagesvillain" : "https://vignette.wikia.nocookie.net/villains/images/e/e5/Aladdin-disneyscreencaps_com-1535.jpeg/revision/latest/scale-to-width-down/1000?cb=20150415170322",
        "song": "https://youtu.be/eGD2m-nnyL4"
    },
    {
      "id": 8587,
      "imagesvillain" : "https://wallpapercave.com/wp/wp4109990.jpg",
      "title": "Scar",
      "song": "https://youtu.be/zPUe7O3ODHQ",

        
    },
    {
      "id": 10882,
      "imagesvillain" : "https://vignette.wikia.nocookie.net/disney/images/0/05/Profile_-_Maleficent.jpeg",
        "title": "Maleficent",
        "song": "https://youtu.be/OCjn4qoYmD0"
    },
    {
      "id": 38757,
      "imagesvillain" : "https://i.pinimg.com/236x/bb/7e/20/bb7e20b52554bb99cc9fa2a454308335.jpg",
        "title": "Mother Gothel",
        "song": "https://youtu.be/vRWzDWkgbTo"
    },
    {
    "id": 10144,
      "imagesvillain" : "http://images2.fanpop.com/image/photos/9500000/Ursula-disney-villains-9586464-800-600.jpg",
        "title": "Ursula",
     "song": "https://youtu.be/xfkkMHieqcI"
    },
    {
      "id": 10693,
        "imagesvillain" : "http://getwallpapers.com/wallpaper/full/2/f/e/1370201-vertical-captain-hook-wallpaper-2800x1800-computer.jpg",
          "title": "Captain Hook",
       "song": "https://youtu.be/pBFy2fQpHzg"
      },
    
  ]
}

export default TMDB