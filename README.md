# Quran JSON API | بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم

Simplified Perfect Complete Quran JSON (Indonesian Translation, Tafsir, and Audio) Along with the REST API. Please use it as best you can and have a blessing.

## Quran JSON Directory Structure

```sh
.
├── README.md
├── quran-complete.json         // AL-Quran JSON Complete
├── quran.json                  // AL-Quran JSON
├── road_to_jannah.json         // API QuranJSON
└── surah                       // Complete Surah JSON Directory
    └── <number_of:1-114>.json
```

## Real app that uses QuranJSON

- [Quran Daily: Unlock Your Heart (iOS)](https://apps.apple.com/us/app/quran-daily-unlock-your-heart/id1494995253)

Add your application to this list with a pull request

## Use Of API / Service

### Run your own service

```sh
npm install
npm start
```

#### Access the Simple Quran API

```sh
GET - BASE_URL/
```

#### Access the Complete Surah Al Fatihah API

```sh
GET - BASE_URL/surah/1
```

### Using the QuranJSON Github JSON Service

Can be directly accessed through the directory.

Quran:

```sh
https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json
```

Surah:

```sh
https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/1.json
```
