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
    title: 'Project template page',
    description: `Project template description`,
    imgSrc: '/static/images/cookaburra.jpeg',
    href: '/blog/a-music-collaboration',
  },
]

export default projectsData
