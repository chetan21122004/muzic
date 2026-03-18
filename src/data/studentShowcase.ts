// ── Student Showcase Data ──────────────────────────────────────────────────
// Scraped from https://muziclub.com/student-showcase/ (via Wayback Machine)
// Includes all individual student profile pages.

export interface ShowcaseStudent {
  /** Unique id for routing / keys */
  id: string;
  /** Display name */
  name: string;
  /** Instrument / category */
  instrument: string;
  /** Age at time of recording (if known) */
  age?: number;
  /** Teacher at Muziclub */
  teacher?: string;
  /** Learning at Muziclub since (year) */
  since?: string;
  /** Guitar / Piano / etc. level or grade (if mentioned) */
  level?: string;
  /** Short tagline shown on the card */
  tagline: string;
  /** Full biography from the profile page */
  bio: string;
  /** Teacher's quote about the student */
  teacherQuote?: string;
  /** Teacher name for the quote */
  teacherQuoteName?: string;
  /** Song / piece performed */
  song?: string;
  /** Original artist of the song */
  originalArtist?: string;
  /** YouTube video embed ID (from the profile page video) */
  youtubeId?: string;
  /** Instagram handle (no @) */
  instagram?: string;
  /** YouTube channel URL */
  youtubeChannel?: string;
  /** Original Muziclub source URL */
  sourceUrl: string;
  /** Filter category */
  category: "Guitar" | "Drums" | "Keyboard" | "Piano" | "Vocals" | "Band Performance" | "Faculty Band";
}

export const showcaseStudents: ShowcaseStudent[] = [
  // ── Individual Students ────────────────────────────────────────────────────

  {
    id: "malay-kale-drums-2",
    name: "Malay Kale",
    instrument: "Drums",
    age: 11,
    teacher: "Akarsh Singh",
    since: "2019",
    tagline: "No One Knows – Drums Cover (Queens Of The Stone Age)",
    bio: `Malay Kale has been learning drums at Muziclub since 2019 from Akarsh Singh sir. This 11 year old also has his own YouTube channel and Instagram page, helped on by his very enthusiastic and supportive parents! Here, he performs the Drum Cover for the song "No One Knows" by the band Queens Of The Stone Age. Audio mixed by Hardik Vaghela. Video shot by Hardik Vaghela. Edited by Nihaal Makani.`,
    teacherQuote: `"He is probably one of the best student I have ever trained. May that be being disciplined or being honest about what he did through the week. The best part about training him is we always have 2 way discussion about the instrument which is very rare experience to me honestly and it feels amazing."`,
    teacherQuoteName: "Akarsh Singh",
    song: "No One Knows",
    originalArtist: "Queens Of The Stone Age",
    youtubeId: "fd94YZG0Mgw",
    instagram: "malaydrummer",
    youtubeChannel: "https://www.youtube.com/channel/UCuEyXTnHOeqz16FLHXgXBxQ",
    sourceUrl: "https://muziclub.com/malay-drums-ss/",
    category: "Drums",
  },
  {
    id: "malay-kale-drums-1",
    name: "Malay Kale",
    instrument: "Drums",
    age: 11,
    teacher: "Akarsh Singh",
    since: "2019",
    tagline: "Chop Suey! – Drums Cover (System Of A Down)",
    bio: `Malay Kale has been learning drums at Muziclub since 2019 from Akarsh Singh sir. This 11 year old covers the iconic "Chop Suey!" by System Of A Down on drums. He has his own YouTube channel and Instagram page supported by his enthusiastic parents.`,
    teacherQuote: `"He is probably one of the best student I have ever trained. May that be being disciplined or being honest about what he did through the week."`,
    teacherQuoteName: "Akarsh Singh",
    song: "Chop Suey!",
    originalArtist: "System Of A Down",
    youtubeId: "vuNea1muKTA",
    instagram: "malaydrummer",
    youtubeChannel: "https://www.youtube.com/channel/UCuEyXTnHOeqz16FLHXgXBxQ",
    sourceUrl: "https://muziclub.com/malay-drum-student/",
    category: "Drums",
  },
  {
    id: "arushi-deshpande-guitar",
    name: "Arushi Deshpande",
    instrument: "Guitar",
    age: 16,
    teacher: "Conrad Bhengra",
    since: "2020",
    tagline: "Say You Won't Let Go – Guitar Cover (James Arthur)",
    bio: `Arushi Deshpande has been learning guitars at Muziclub since 2020 from Conrad Bhengra sir. This 16 year old covers James Arthur's 'Say You Won't Let Go' in this video. She performed this live in one take! Audio mixed by Hardik Vaghela. Video shot by Nihaal Makani and Hardik Vaghela. Edited by Hardik Vaghela.`,
    teacherQuote: `"Arushi has always been a fast learner and also comes prepared to class. I hope some day she writes her own songs and presents them to the world."`,
    teacherQuoteName: "Conrad Bhengra",
    song: "Say You Won't Let Go",
    originalArtist: "James Arthur",
    youtubeId: "LJy__eIbVLI",
    instagram: "arushi.deshpande",
    sourceUrl: "https://muziclub.com/arushi-guitar-student/",
    category: "Guitar",
  },
  {
    id: "nirav-chakrabarti-guitar",
    name: "Nirav Chakrabarti",
    instrument: "Guitar",
    age: 16,
    teacher: "Conrad Bhengra",
    since: "2016",
    tagline: "Master Of Puppets – Guitar Cover (Metallica)",
    bio: `Nirav Chakrabarti has been learning guitars at Muziclub since 2016 and has been learning from Conrad Bhengra sir for the past 3+ years. This 16 year old covers Master of Puppets by Metallica in this video! He played this live in one take — Kirk Hammett & James Hetfield will be proud 🤘 We think it was absolutely flawless. Do not miss the solo! This song was in the spotlight again thanks to Stranger Things Season 4, but Muziclub loved this classic track long before that. Audio mixed by Hardik Vaghela. Video shot by Nihaal Makani and Hardik Vaghela. Edited by Hardik Vaghela.`,
    teacherQuote: `"It's a pleasure teaching Nirav. He's very enthusiastic about learning about music, recording and performing. We often talk about music and guitar related things over text messages. He has made steady progress over the years and if he goes at the same pace, he will definitely make a mark in the music scene."`,
    teacherQuoteName: "Conrad Bhengra",
    song: "Master Of Puppets",
    originalArtist: "Metallica",
    youtubeId: "_lYD8qi2nk0",
    sourceUrl: "https://muziclub.com/nirav-guitar-student/",
    category: "Guitar",
  },
  {
    id: "charan-raavi-keyboard",
    name: "Charan Raavi",
    instrument: "Keyboard",
    age: 14,
    teacher: "Tanmay Matthew & Gaurav Kharat",
    tagline: "Keyboard Prodigy – Grade 3 Level",
    bio: `Charan Raavi has been learning keyboard at Muziclub for almost a year now. He has learnt for 2 modules with Tanmay Matthew Sir and one module with Gaurav Kharat sir. This 14 year old also has his own YouTube channel along with his brother Varun Raavi. Video shot by Nihaal Makani & Hardik Vaghela. Edited by Nihaal Makani.`,
    teacherQuote: `"Charan is a prodigy just like his brother. Very dedicated and focused musician. One thing that I like the most about him is he is very observant and open to learn new skills and always looks forward to explore new styles and genres. Watching him play is a real treat to one's eyes and ears. I wish him all the very best for his bright future."`,
    teacherQuoteName: "Gaurav Kharat",
    youtubeId: "P0DSe-wqqRc",
    youtubeChannel: "https://www.youtube.com/channel/UClkgjOjhB_xGsiBNGRj0KFw",
    sourceUrl: "https://muziclub.com/charan-keyboard-student/",
    category: "Keyboard",
  },
  {
    id: "varun-raavi-keyboard",
    name: "Varun Raavi",
    instrument: "Keyboard",
    age: 12,
    teacher: "Tanmay Matthew & Gaurav Kharat",
    tagline: "Keyboard Student – Born Talent",
    bio: `Varun Raavi has been learning keyboard at Muziclub for almost a year now. He has learnt for 2 modules with Tanmay Matthew Sir and one module with Gaurav Kharat sir. This 12 year old also has his own YouTube channel along with his brother Charan Raavi. Video shot by Nihaal Makani & Hardik Vaghela. Edited by Nihaal Makani.`,
    teacherQuote: `"Varun is one the best student I have who is adaptable and patient. He has an advanced sense of music at a young age which take years to develop! He is a born talent. His grasping abilities in music are very admiring. Very passionate about his pieces and songs and playing instrument. I can see that Varun will be a great musician and performer in future."`,
    teacherQuoteName: "Gaurav Kharat",
    youtubeId: "sgqaTemUMSE",
    youtubeChannel: "https://www.youtube.com/channel/UClkgjOjhB_xGsiBNGRj0KFw",
    sourceUrl: "https://muziclub.com/varun_keyboard_student/",
    category: "Keyboard",
  },
  {
    id: "saurabh-patwardhan-guitar",
    name: "Saurabh Patwardhan",
    instrument: "Guitar",
    teacher: "Conrad Bhengra",
    level: "Advanced",
    tagline: "Advanced Guitar – Bossanova & Classical",
    bio: `Though Saurabh has taken advanced level guitar lessons at Muziclub for a very short while, he is as much part of the Muziclub family. He came to Conrad sir for help with specific advanced techniques and to learn transcribing. His interests lie in Bossanova, Classical, and a little bit of Classic Rock.`,
    teacherQuote: `"Saurabh is more of a friend than a student. He has his interests in Bossanova and Classical and a little bit of classic rock. With him it was just a matter of giving him the right direction to take his playing to the next level. One thing that we shared in common was the love for improvisation and I had fun coming up with new compositions with him."`,
    teacherQuoteName: "Conrad Bhengra",
    youtubeId: "TOA8pESsh8E",
    sourceUrl: "https://muziclub.com/studentshowcase-saurabh/",
    category: "Guitar",
  },
  {
    id: "preetish-pratihari-guitar",
    name: "Preetish Pratihari",
    instrument: "Guitar",
    teacher: "Conrad Bhengra",
    level: "Level 6 (Trinity Rock & Pop Grade 7)",
    tagline: "Phantom Of the Opera – Iron Maiden (Trinity Grade 7)",
    bio: `Preetish has been learning Guitar with Muziclub on and off for more than 7 years and since 3 years under the guidance of Conrad Bhengra sir. Currently he is at Level 6 (as of this video recording). Here he plays the song "Phantom Of the Opera" by Iron Maiden from Trinity Rock & Pop Grade 7.`,
    teacherQuote: `"Preetish has a lot of potential and when he works hard it shows in his performance. I wish him to keep practicing even harder. I see a great guitarist in him. 🙂"`,
    teacherQuoteName: "Conrad Bhengra",
    song: "Phantom Of the Opera",
    originalArtist: "Iron Maiden",
    youtubeId: "7CnKhSLG_7E",
    sourceUrl: "https://muziclub.com/preetish-pratihari-guitar-student-studentshowcase/",
    category: "Guitar",
  },
  {
    id: "veera-mahajan-guitar",
    name: "Veera Mahajan",
    instrument: "Guitar",
    teacher: "Conrad Bhengra",
    since: "2015",
    tagline: "Kho Gaye Hum Kahaan – Guitar Cover",
    bio: `Veera has been taking Guitar classes with Muziclub since 2015 under the guidance of Conrad Bhengra sir. Here, she performs the cover of the song "Kho Gaye Hum Kahaan" from the movie Baar Baar Dekho. Original song music by Jasleen Royal, lyrics by Prateek Kuhad, singers Jasleen Royal & Prateek Kuhad.`,
    teacherQuote: `"Veera has always been musically gifted and has worked hard to hone her skills. There's an enthusiasm for learning new things about music. She has been really excited about playing some songs which are pretty challenging, and she doesn't give up easily. I hope to see her writing and performing her own songs some day."`,
    teacherQuoteName: "Conrad Bhengra",
    song: "Kho Gaye Hum Kahaan",
    originalArtist: "Jasleen Royal & Prateek Kuhad",
    youtubeId: "KyqfPL5mSII",
    sourceUrl: "https://muziclub.com/studentshowacase-veera/",
    category: "Guitar",
  },
  {
    id: "utkarsh-singh-guitar",
    name: "Utkarsh Singh",
    instrument: "Guitar",
    teacher: "Conrad Bhengra",
    since: "2015",
    tagline: "Classical Gas – Guitar Solo (Mason Williams)",
    bio: `Utkarsh Singh has been learning Guitars at Muziclub since 2015 years. He is a student of Faculty Artist Conrad Bhengra. Here Utkarsh performs "Classical Gas" by Mason Williams. Muziclub Student Showcase is a platform which regularly encourages promising students.`,
    song: "Classical Gas",
    originalArtist: "Mason Williams",
    youtubeId: "3KFewQtKTEM",
    sourceUrl: "https://muziclub.com/student-showcase-utkarsh-singh/",
    category: "Guitar",
  },
  {
    id: "swarada-gade-guitar",
    name: "Swarada Gade",
    instrument: "Guitar",
    age: 14,
    teacher: "Conrad Bhengra",
    tagline: "Maana Ke Hum Yaar Nahin – First Ever Cover!",
    bio: `14 year old Swarada Gade has been learning from Muziclub Guitar Faculty – Conrad Bhengra. In this video, she covers the song 'Maana Ke Hum Yaar Nahin' from the movie Meri Pyari Bindu. This is her first ever cover song attempt! We are proud to be teaching such enthusiastic students. 🙂`,
    song: "Maana Ke Hum Yaar Nahin",
    originalArtist: "Meri Pyari Bindu (Film)",
    youtubeId: "gDUvPLOqC9w",
    sourceUrl: "https://muziclub.com/14-year-old-guitar-student-swarada-gade-covers-song-maana-ke-hum-yaar-nahin/",
    category: "Guitar",
  },
  {
    id: "reeshabh-purohit-guitar",
    name: "Reeshabh Purohit",
    instrument: "Guitar & Vocals",
    teacher: "Luke Macedo & Milind (Guitar), Vocals Faculty",
    tagline: "Mora Saiyyan – Guitar & Vocal Cover (Fuzon)",
    bio: `Four years ago, Reeshabh had been learning guitars from Luke sir. Reeshabh had to discontinue classes for some time and has recently enrolled again to learn Guitars from Milind sir. He is taking vocal classes as well and recorded a cover of the song 'Mora Saiyaan' by the band Fuzon. We wish him all the best in his future endeavours.`,
    song: "Mora Saiyaan",
    originalArtist: "Fuzon",
    youtubeId: "hP3gV73fSis",
    sourceUrl: "https://muziclub.com/mora-saiyyan-cover-by-muziclub-guitar-student-reeshabh-purohit/",
    category: "Guitar",
  },
  {
    id: "anusha-bhatia-vocals",
    name: "Anusha Bhatia",
    instrument: "Western Vocals",
    age: 15,
    teacher: "Christopher Chhakchhuak",
    tagline: "Sweet Creature – Vocal Cover (Harry Styles)",
    bio: `Anusha Bhatia is a Western Vocal student at Muziclub. 15-year-old Anusha has been learning at Muziclub from Western Vocal faculty Christopher Chhakchhuak since a year. Here she sings the song "Sweet Creature" by Harry Styles accompanied on guitars by Muziclub Guitar Faculty Conrad Bhengra. She believes in "Sing because you love it, not because you can". Anusha is also very passionate about photography and has significantly contributed to the making of this video.`,
    song: "Sweet Creature",
    originalArtist: "Harry Styles",
    youtubeId: "RghXPi_oSfQ",
    sourceUrl: "https://muziclub.com/student-showcase-anusha-bhatia/",
    category: "Vocals",
  },
  {
    id: "sonya-meher-vocals",
    name: "Sonya Meher",
    instrument: "Hindustani Vocals",
    teacher: "Debverna",
    since: "2015",
    tagline: "Haareya – Hindustani Vocal Cover (Meri Pyaari Bindu)",
    bio: `Sonya Meher has been learning at Muziclub since October 2015. She learns Hindustani Vocals from Debverna mam. A proud mother to 2 children (6 and 8 year olds), singing is Sonya's passion. Here she sings the song Haareya from the movie Meri Pyaar Bindu, originally sung by Arijit Singh and composed by Sachin-Jigar. She is accompanied on guitars by Muziclub guitar faculty Conrad Bhengra.`,
    song: "Haareya",
    originalArtist: "Arijit Singh (Sachin-Jigar composition)",
    youtubeId: "QOy61MeG0xc",
    sourceUrl: "https://muziclub.com/student-showcase-sonya-meher-haareya-song-cover-meri-pyaari-bindu/",
    category: "Vocals",
  },
  {
    id: "nivedita-ingle-vocals",
    name: "Nivedita Ingle",
    instrument: "Western Vocals",
    tagline: "Stand By Me – Vocal Cover (Ben E. King)",
    bio: `Nivedita Ingle is a Western Vocal student at Muziclub and is a regular at the #SundayJam. Muziclub #StudentShowcase is an initiative to promote talented students and provide them a platform to showcase their art.`,
    song: "Stand by Me",
    originalArtist: "Ben E. King",
    youtubeId: "K5ICFma7_8g",
    sourceUrl: "https://muziclub.com/student-showcase-nivedita-ingle-stand-by-me-cover/",
    category: "Vocals",
  },
  {
    id: "akshit-dhall-vocals",
    name: "Akshit Dhall",
    instrument: "Western Vocals",
    teacher: "Tanmay Mathew",
    tagline: "Singer-Songwriter Jukebox – Original EP \"30th of February\"",
    bio: `Akshit Dhall is a student of Western Vocal at Muziclub with Tanmay Mathew sir. He is an independent singer-songwriter from Pune who lives with the zest to travel the world and sing his songs for the people wherever possible. He believes in writing and performing his own material and engaging the audience as he sings. A part of Pune's live scene for over 2 years now, he usually performs 90–120 minutes playing mostly his originals and a few covers. He just released his debut EP called "30th of February" and has been touring across India to promote it.`,
    youtubeId: "qdRIdz-h-DI",
    sourceUrl: "https://muziclub.com/akshit-dhall-jukebox/",
    category: "Vocals",
  },
  {
    id: "nikhil-pallavalli-piano",
    name: "Nikhil Pallavalli",
    instrument: "Piano",
    tagline: "Piano Student Showcase",
    bio: `Nikhil Pallavalli is a Piano student at Muziclub. His performance is part of the Muziclub Student Showcase — an initiative to promote talented students and give them a platform to perform.`,
    sourceUrl: "https://muziclub.com/online-piano-classes/",
    category: "Piano",
  },
  {
    id: "arya-pathak-piano",
    name: "Arya Pathak",
    instrument: "Piano & Guitar",
    tagline: "Piano Recital – 5 Years Of Learning",
    bio: `Arya Pathak is a Piano student at Muziclub and has been learning with us for past 5 years. He is learning Piano and Guitar at Muziclub. Muziclub #StudentShowcase is an initiative to promote talented students and provide them a platform to showcase their art.`,
    youtubeId: "7trypeDRI48",
    sourceUrl: "https://muziclub.com/student-showcase-arya-pathak/",
    category: "Piano",
  },

  // ── Band Performances ──────────────────────────────────────────────────────

  {
    id: "iris-this-is-me",
    name: "Iris (Band)",
    instrument: "Band",
    tagline: "This Is Me – The Greatest Showman Cover (Live at CRCC)",
    bio: `Iris performing 'This Is Me' from The Greatest Showman live at CRCC Pune.`,
    sourceUrl: "https://muziclub.com/this-is-me-iristhe-greatest-showman-cover-live-at-crcc/",
    category: "Band Performance",
  },
  {
    id: "iris-creep",
    name: "Iris (Band)",
    instrument: "Band",
    tagline: "Creep – Radiohead Cover (Live at CRCC Pune)",
    bio: `Iris performing 'Creep' by Radiohead on occasion of Muziclub's 9th Annual Day at CRCC Pune.`,
    song: "Creep",
    originalArtist: "Radiohead",
    sourceUrl: "https://muziclub.com/creep-iris-radiohead-cover-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "folktribe-chaudhary",
    name: "Folktribe (Band)",
    instrument: "Band",
    tagline: "Chaudhary – Coke Studio Cover (Live at CRCC Pune)",
    bio: `Folktribe performing 'Chaudhary' Coke Studio cover on occasion of Muziclub's 9th Annual Day at CRCC Pune. Vocals – Govind Saraaf.`,
    song: "Chaudhary",
    originalArtist: "Coke Studio",
    sourceUrl: "https://muziclub.com/chaudhary-folktribe-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "eureka-the-pretender",
    name: "Eureka (Band)",
    instrument: "Band",
    tagline: "The Pretender – Foo Fighters Cover (Live at CRCC Pune)",
    bio: `Eureka Performs The Pretender by Foo Fighters on Muziclub's 9th Annual Day held at CRCC Pune on 23rd June 2019.`,
    song: "The Pretender",
    originalArtist: "Foo Fighters",
    sourceUrl: "https://muziclub.com/the-pretender-eurekafoo-fighters-cover-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "minor6-carnival-of-rust",
    name: "Minor6 (Band)",
    instrument: "Band",
    tagline: "Carnival Of Rust – Live at CRCC Pune",
    bio: `Minor6 performing Carnival of Rust live at CRCC Pune.`,
    song: "Carnival Of Rust",
    originalArtist: "Poets of the Fall",
    sourceUrl: "https://muziclub.com/carnival-of-rust-minor6live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "gnr-november-rain",
    name: "Estudiantes (Band)",
    instrument: "Band",
    tagline: "November Rain – Guns N Roses Cover (Live at CRCC Pune)",
    bio: `November Rain, Guns N Roses Cover by Muziclub students live at CRCC Pune on occasion of the 9th Annual Day.`,
    song: "November Rain",
    originalArtist: "Guns N' Roses",
    sourceUrl: "https://muziclub.com/november-rain-guns-n-roses-cover-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "minor6-runaway-baby",
    name: "Minor6 (Band)",
    instrument: "Band",
    tagline: "Runaway Baby – Bruno Mars Cover (Live at CRCC)",
    bio: `Minor6 performing Runaway Baby by Bruno Mars on occasion of Muziclub's 9th Annual Day at CRCC.`,
    song: "Runaway Baby",
    originalArtist: "Bruno Mars",
    sourceUrl: "https://muziclub.com/runaway-baby-minor6-bruno-mars-cover-live-at-crcc/",
    category: "Band Performance",
  },
  {
    id: "minor6-still-loving-you",
    name: "Minor6 (Band)",
    instrument: "Band",
    tagline: "Still Loving You – Scorpions Cover (Live at CRCC Pune)",
    bio: `Minor6 performing Still Loving You by Scorpions on occasion of Muziclub's 9th Annual Day at CRCC Pune.`,
    song: "Still Loving You",
    originalArtist: "Scorpions",
    sourceUrl: "https://muziclub.com/still-loving-you-minor6-scorpions-cover-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "zerogravity-tere-mere-saath",
    name: "ZeroGravity (Band)",
    instrument: "Band",
    tagline: "Tere Mere Saath – Lucky Ali Cover (Live at CRCC Pune)",
    bio: `Tere Mere Saath performed by Muziclub students band ZeroGravity. Vocals – Milan Karmakar, accompanied by the full student band.`,
    song: "Tere Mere Saath",
    originalArtist: "Lucky Ali",
    sourceUrl: "https://muziclub.com/tere-mere-saath-zerogravity-lucky-ali-cover-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "fflat-rainbow-girl",
    name: "F Flat (Band)",
    instrument: "Band",
    tagline: "Rainbow Girl – Original Composition (Live at CRCC Pune)",
    bio: `Our students band F-Flat performing original composition 'Rainbow Girl' on occasion of Muziclub's 9th annual day.`,
    song: "Rainbow Girl",
    originalArtist: "F Flat (Original)",
    sourceUrl: "https://muziclub.com/f-flat-rainbow-girl-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "nawazishein-karam",
    name: "Ensemble",
    instrument: "Band",
    tagline: "Nawazishein Karam – Coke Studio Cover (Live at CRCC Pune)",
    bio: `Nawazishein Karam performed by Muziclub students and faculty artist on occasion of the 9th Annual day.`,
    song: "Nawazishein Karam",
    originalArtist: "Coke Studio",
    sourceUrl: "https://muziclub.com/nawazishein-karamcoke-studio-cover-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "fflat-bewajah",
    name: "F Flat (Band)",
    instrument: "Band",
    tagline: "Bewajah – Original Composition (Live at CRCC Pune)",
    bio: `Our students performing original composition 'Bewajah' on occasion of Muziclub's 9th annual day.`,
    song: "Bewajah",
    originalArtist: "F Flat (Original)",
    sourceUrl: "https://muziclub.com/f-flat-bewajah-live-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "lazarus-porcupine-tree",
    name: "Ensemble",
    instrument: "Band",
    tagline: "Lazarus – Porcupine Tree Cover (Live at CRCC Pune)",
    bio: `Lazarus, Porcupine Tree Cover by our students live at CRCC Pune on occasion of Muziclub's 9th Annual Day.`,
    song: "Lazarus",
    originalArtist: "Porcupine Tree",
    sourceUrl: "https://muziclub.com/lazarus-porcupine-tree-coverlive-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "highway-star-deep-purple",
    name: "Ensemble",
    instrument: "Band",
    tagline: "Highway Star – Deep Purple Cover (Live at CRCC Pune)",
    bio: `Highway Star, Deep Purple Cover by our students live at CRCC Pune on occasion of Muziclub's 9th Annual Day.`,
    song: "Highway Star",
    originalArtist: "Deep Purple",
    sourceUrl: "https://muziclub.com/highway-star-deep-purple-coverlive-at-crcc-pune/",
    category: "Band Performance",
  },
  {
    id: "eureka-shine",
    name: "Eureka (Band)",
    instrument: "Band",
    tagline: "Shine – Collective Soul Cover (Live at CRCC Pune)",
    bio: `Eureka Performs Shine by Collective Soul on Muziclub's 9th Annual Day held at CRCC Pune on 23rd June 2019.`,
    song: "Shine",
    originalArtist: "Collective Soul",
    sourceUrl: "https://muziclub.com/shine-eurekacollective-soul-cover-live-at-crcc-pune/",
    category: "Band Performance",
  },

  // ── Faculty Band ───────────────────────────────────────────────────────────

  {
    id: "nemophilis-ill-be-there",
    name: "Nemophilis (Faculty Band)",
    instrument: "Band",
    tagline: "I'll Be There For You – Bon Jovi Cover (Live at CRCC Pune)",
    bio: `Our faculty band Nemophilis performing I'll be there for you by Bon Jovi on Muziclub's 8th annual day at CRCC Pune.`,
    song: "I'll Be There For You",
    originalArtist: "Bon Jovi",
    sourceUrl: "https://muziclub.com/ill-be-there-for-you-nemophilis-bonjovi-cover-live-at-crcc-pune/",
    category: "Faculty Band",
  },
  {
    id: "nemophilis-alive",
    name: "Nemophilis (Faculty Band)",
    instrument: "Band",
    tagline: "Alive – Pearl Jam Cover (Live at CRCC Pune)",
    bio: `Our teachers band Nemophilis performing Alive by Pearl Jam on Muziclub's 8th annual day at CRCC Pune.`,
    song: "Alive",
    originalArtist: "Pearl Jam",
    sourceUrl: "https://muziclub.com/alive-nemophilispearl-jam-cover-live-at-crcc-pune/",
    category: "Faculty Band",
  },

  // ── Other Student Performances ─────────────────────────────────────────────

  {
    id: "aditi-turkish-march",
    name: "Aditi",
    instrument: "Piano",
    tagline: "Turkish March – Mozart (Live at CRCC Pune)",
    bio: `Our piano student Aditi performing Turkish March by Mozart on Muziclub's 8th annual day at CRCC Pune.`,
    song: "Turkish March",
    originalArtist: "Mozart",
    sourceUrl: "https://muziclub.com/turkish-march-aditi-live-at-crcc-pune/",
    category: "Piano",
  },
];

// ── Category filter list ────────────────────────────────────────────────────

export const showcaseCategories = [
  "All",
  "Guitar",
  "Drums",
  "Keyboard",
  "Piano",
  "Vocals",
  "Band Performance",
  "Faculty Band",
] as const;

export type ShowcaseCategory = typeof showcaseCategories[number];

// ── Backward-compat alias (older components may use showcaseItems) ──────────

export interface ShowcaseItem {
  title: string;
  category: string;
  description: string;
  slug: string;
}

export const showcaseItems: ShowcaseItem[] = showcaseStudents.map((s) => ({
  title: s.name,
  category: s.category,
  description: s.tagline,
  slug: s.id,
}));
