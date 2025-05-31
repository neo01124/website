export interface Prototype {
    id: string;
    title: string;
    description: string;
    year: number;
    imageUrl: string;
    url: string;
    technologies?: string[];
}

export const prototypes: Prototype[] = [
    {
        id: 'prototype-4',
        title: 'Genres with largest vocabularies',
        description: 'An analysis of the vocabulary sizes of 8 popular genres.',
        year: 2015,
        imageUrl: 'images/prototypes/mxm_vocabulary_genres.jpg',
        url: 'http://lab.musixmatch.com/vocabulary_genres/',
        technologies: ['Python', 'Javascript', 'Data Analysis']
    },
    {
        id: 'prototype-1',
        title: 'Most profane artists in music',
        description: 'A comparison of profanity counts of the most googled artists.',
        year: 2015,
        imageUrl: 'images/prototypes/mxm_profanity_artists.jpg',
        url: 'http://lab.musixmatch.com/profanity_representative_artists/',
        technologies: ['Python', 'Javascript', 'Data Analysis']
    },
    {
        id: 'prototype-3',
        title: 'Most profane genres in music',
        description: 'An analysis of profanity in music and, a comparison of profanity counts and profanities used for 8 popular genres.',
        year: 2015,
        imageUrl: 'images/prototypes/mxm_profanity_genres.jpg',
        url: 'http://lab.musixmatch.com/profanity_genres/',
        technologies: ['Python', 'Javascript', 'Data Analysis']
    },
    {
        id: 'prototype-5',
        title: "Adele\'s Hello vs Tom Waits\' Martha",
        description: "An analysis of the similarity between these two songs.",
        year: 2015,
        imageUrl: 'images/prototypes/mxm_adele1.jpg',
        url: 'https://lab.musixmatch.com/hello_martha/',
        technologies: ['Python', 'Bologna']
    },
    //   {
    //     id: 'prototype-6',
    //     title: 'Text like Kanye',
    //     description: 'Displays text autocomplete results according to the lyrics of the selected artist.',
    //     year: 2015,
    //     imageUrl: '/images/prototypes/mxm_autocomplete.jpg',
    //     url: 'http://lab.musixmatch.com/narcissism/',
    //     technologies: ['Python', 'Javascript', 'MIDEM', 'musichackday']
    //   },
    //   {
    //     id: 'prototype-7',
    //     title: 'Narcissism in lyrics',
    //     description: 'Finds narcissism in albums and tracks of the searched artist. Narcissism is defined as the ratio of first person pronouns to total pronouns in a piece of text.',
    //     year: 2014,
    //     imageUrl: '/images/prototypes/mxm_narcissism.jpg',
    //     url: 'http://lab.musixmatch.com/narcissism/',
    //     technologies: ['javascript', 'musichackday', 'Boston']
    //   },
    //   {
    //     id: 'prototype-8',
    //     title: 'Polyglottis',
    //     description: 'Playlists for learning foreign languages, with lyrics containing words from your Duolingo vocabulary. Awarded best hack at the Bologna musichackday.',
    //     year: 2014,
    //     imageUrl: '/images/prototypes/mxm_polyglot.jpg',
    //     url: 'http://lab.musixmatch.com/polyglottis3/',
    //     technologies: ['javascript', 'musichackday', 'Bologna']
    //   },
    //   {
    //     id: 'prototype-9',
    //     title: 'Imgine',
    //     description: 'Generates a slideshow of relevant flickr images using the lyrics of the searched track.',
    //     year: 2014,
    //     imageUrl: '/images/prototypes/mxm_imgine.jpg',
    //     url: 'http://lab.musixmatch.com/imgine/',
    //     technologies: ['javascript', 'hack', 'Bologna']
    //   },
    // {
    //     id: 'prototype-10',
    //     title: 'Music mood visualizer',
    //     description: 'A real-time interactive visualization of human moods using a brain-computer interface.',
    //     year: 2012,
    //     imageUrl: '/images/prototypes/mood.jpg',
    //     url: 'http://blog.andrewstella.com/2012/03/music-mood-visualizer.html',
    //     technologies: ['pure data', 'Barcelona']
    // },
    //   {
    //     id: 'prototype-11',
    //     title: 'Musixmatch curator',
    //     description: 'Generates spotify playlists with lyrics containing the searched terms.',
    //     year: 2014,
    //     imageUrl: '/images/prototypes/mxm_playlister.jpg',
    //     url: 'http://lab.musixmatch.com/playlister/',
    //     technologies: ['javascript', 'hack', 'Bologna']
    //   },
    //   {
    //     id: 'prototype-2',
    //     title: 'Prototype 2',
    //     description: 'Description of prototype 2 goes here.',
    //     year: 2024,
    //     imageUrl: '/images/prototype2.png',
    //     url: '/prototypes/prototype2',
    //     technologies: ['React', 'Tailwind CSS']
    //   },
]; 