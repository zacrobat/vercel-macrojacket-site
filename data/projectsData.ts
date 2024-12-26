interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  // {
  //   title: 'A Groove Collaboration',
  //   description: `A couple of musicians at parallel play`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
  {
    title: 'A music collaboration',
    description: `808's and amens meet their makesr`,
    imgSrc: '/static/images/cookaburra.jpeg',
    href: '/blog/a-music-collaboration',
  },
]

export default projectsData
