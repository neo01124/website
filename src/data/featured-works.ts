export interface FeaturedWork {
  source: string;
  year: string;
  title: string;
  url: string;
}

export const featuredWorks: FeaturedWork[] = [
  {
    source: "AWS Open Source Blog",
    year: "2023",
    title: "Monitoring load balancers using Amazon CloudWatch anomaly detection alarms",
    url: "https://aws.amazon.com/blogs/networking-and-content-delivery/monitoring-load-balancers-using-amazon-cloudwatch-anomaly-detection-alarms/"
  },
  {
    source: "AWS Open Source Blog",
    year: "2021",
    title: "Adopting Kotlin at Prime Video for higher developer satisfaction and less code",
    url: "https://aws.amazon.com/blogs/opensource/adopting-kotlin-at-prime-video-for-higher-developer-satisfaction-and-less-code/"
  },
  {
    source: "AWS Open Source Blog",
    year: "2020",
    title: "Building resilient services at Prime Video with chaos engineering",
    url: "https://aws.amazon.com/blogs/opensource/building-resilient-services-at-prime-video-with-chaos-engineering/"
  },
  {
    source: "Billboard.com",
    year: "2016",
    title: "Most Profane Artists in Music",
    url: "https://www.billboard.com/music/music-news/most-profane-artists-most-swear-words-lyrics-6851556/"
  },
  {
    source: "The Guardian",
    year: "2015",
    title: "Kanye West beats Bob Dylan in lyrical vocabulary",
    url: "https://www.theguardian.com/music/2015/jul/23/hip-hop-kanye-west-beats-bob-dylan-breadth-lyrical-vocabulary"
  },
  {
    source: "Google Open Source Blog",
    year: "2012",
    title: "Students Mixxx it up over the summer",
    url: "https://opensource.googleblog.com/2012/11/students-mixxx-it-up-over-summer.html"
  },
  {
    source: "Beagleboard Blog",
    year: "2010",
    title: "Six BeagleBoard.org Google Summer of Code projects launching",
    url: "https://www.beagleboard.org/blog/2010-05-12-six-beagleboard-org-gsoc-projects-launching"
  }
]; 