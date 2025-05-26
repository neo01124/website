export interface TimelineEntry {
    year: string;
    sortYear: number;
    title: string;
    description?: string;
    location: string;
}

export const timelineEntries: TimelineEntry[] = [
    {
        year: "Present",
        sortYear: 2025,
        title: "Senior Software Engineer, Amazon",
        location: "United Kingdom"
    },
    {
        year: "2017",
        sortYear: 2017,
        title: "Software Engineer, Amazon",
        location: "United Kingdom"
    },
    {
        year: "2016",
        sortYear: 2016,
        title: "Research Engineer, Startup",
        location: "United Kingdom"
    },
    {
        year: "2014",
        sortYear: 2014,
        title: "Research Engineer, Musixmatch",
        location: "Italy"
    },
    {
        year: "2013",
        sortYear: 2013,
        title: "Intern, Yamaha Music",
        location: "Japan"
    },
    {
        year: "2013",
        sortYear: 2013,
        title: "Master's Music Technology",
        location: "Spain"
    },
    {
        year: "2013",
        sortYear: 2013,
        title: "Intern, Musixmatch",
        location: "Italy"
    },
    {
        year: "2012",
        sortYear: 2012,
        title: "GSoC intern, Mixxx.org",
        location: "Spain"
    },
    {
        year: "2010",
        sortYear: 2010,
        title: "GSoC intern, BeagleBoard.org",
        location: "India"
    },
    {
        year: "2010",
        sortYear: 2010,
        title: "Undergrad Computer Science",
        location: "India"
    },
    // {
    //     year: "198x",
    //     sortYear: 1989,
    //     title: "Born",
    //     location: "India"
    // }
].sort((a, b) => b.sortYear - a.sortYear); 