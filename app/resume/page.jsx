'use client';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import {motion} from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// about data
const about ={
  title:'about me',
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  info:[
    {
      fieldName:'Name',
      fieldValue:'Luke Coleman'
    },
    {
      fieldName:'phone',
      fieldValue:'123 111 101'
    },
    {
      fieldName:'Experience',
      fieldValue:'12+ years'
    },
    {
      fieldName:'skype',
      fieldValue:'Luke.01'
    },
    {
      fieldName:'Email',
      fieldValue:'Luke.01@gmail.com'
    },
    {
      fieldName:'Nationality',
      fieldValue:'American'
    },
    {
      fieldName:'Freelance',
      fieldValue:'Available'
    },
    {
      fieldName:'Language',
      fieldValue:'English,Spanish'
    },
  ]
}
// experience data
const experience={
  icon:'/assets/resume/badge.svg',
  title:'My experience',
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  items:[
    {
      company:'Tech solutions Inc.',
      position:'Full Stack Developer',
      duration:'2022-Present',
    },
    {
      company:'Web Design Studio.',
      position:'Front-End Developer Intern',
      duration:'summer 2021',
    },
    {
      company:'E-commerce Startup.',
      position:'Freelamce Web Developer',
      duration:'2020-2021',
    },
    {
      company:'Tech Academy.',
      position:'Teaching Assistant',
      duration:'2019-2020',
    },
    {
      company:'Digital Agency.',
      position:'UI/UX Designer',
      duration:'2018-2019',
    },
    {
      company:'Software Development Firm.',
      position:'Junior Developer',
      duration:'2017-2018',
    },
  ]
}

// education data
const education={
  icon:'/assets/resume/cap.svg',
  title:'My education',
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  items:[
    {
      institution:'Online Course Platform',
      degree:'Full Stack Web Development Bootcamp',
      duration:'2023',
    },
    {
      institution:'Codecademy',
      degree:'Front-end Track',
      duration:'2022',
    },
    {
      institution:'Online Course',
      degree:'Programming Course',
      duration:'2020-2021',
    },
    {
      institution:'Tech Institute',
      degree:'Certified web Developer',
      duration:'2019',
    },
    {
      institution:'Design School',
      degree:'Diploma in Graphic Design',
      duration:'2016-2018',
    },
    {
      institution:'Community College',
      degree:'Associate Degree in Computer Science',
      duration:'2014-2016',
    },
  ]
}

// skills data
const skills={
  title:'My skills',
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  skillList:[
    {
icon:<FaHtml5/>,
name:'html 5',
    },
    {
      icon:<FaCss3/>,
      name:'css 3',
          },
          {
            icon:<FaJs/>,
            name:'javascript',
                },
                {
                  icon:<FaReact/>,
                  name:'react.js',
                      },
                      {
                        icon:<SiNextdotjs/>,
                        name:'next.js',
                            },
                            {
                              icon:<SiTailwindcss/>,
                              name:'tailwind.css',
                                  },
                                  {
                                    icon:<FaNodeJs/>,
                                    name:'node.js',
                                        },
                                        {
                                          icon:<FaFigma/>,
                                          name:'figma',
                                              },
  ]
}

const Resume = () => {
  return (
<motion.div initial={{opacity:0}} 
animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:'easeIn'},}}
className='main-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
  <div className='container mx-auto'>
<Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
  <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
    <TabsTrigger value='experience'>Experience</TabsTrigger>
    <TabsTrigger value='education'>Education</TabsTrigger>
    <TabsTrigger value='skills'>Skills</TabsTrigger>
    <TabsTrigger value='about'>About me</TabsTrigger>
  </TabsList>

{/* content */}
<div className='min-h-[70vh] w-full'>
{/* experience */} 
<TabsContent value='experience' className='w-full'>
  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
    <h3 className='text-4xl font-bold'>{experience.title}</h3>
    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
    {experience.description}</p>
    <ScrollArea className='h-[400px]'>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
        {experience.items.map((item,index)=>{
          return(
            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
              <span className='text-[#00ff99]'>{item.duration}</span>
              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
              <div className='flex items-center gap-3'>
                {/* dot */}
                <span className='w-[6px] h-[6px] rounded-full bg-[#00ff99]'></span>
                <p className='text-white/60'>{item.company}</p>
              </div>
            </li>
          )
        })}
      </ul>

    </ScrollArea>
  </div>
</TabsContent>



{/* education */}
<TabsContent value='education' className='w-full'>
<div className='flex flex-col gap-[30px] text-center xl:text-left'>
    <h3 className='text-4xl font-bold'>{education.title}</h3>
    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
    {education.description}</p>
    <ScrollArea className='h-[400px]'>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
        {education.items.map((item,index)=>{
          return(
            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
              <span className='text-[#00ff99]'>{item.duration}</span>
              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
              <div className='flex items-center gap-3'>
                {/* dot */}
                <span className='w-[6px] h-[6px] rounded-full bg-[#00ff99]'></span>
                <p className='text-white/60'>{item.institution}</p>
              </div>
            </li>
          )
        })}
      </ul>

    </ScrollArea>
  </div>
</TabsContent>



{/* skills */}
<TabsContent value='skills' className='w-full h-full'>
  <div className='flex flex-col gap-[30px]'>
    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
      <h3 className='text-4xl font-bold'>{skills.title}</h3>
      <p className='max-w-[600px] text-white/60 max-auto xl:mx-0'>{skills.description}</p>
    </div>
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
      {skills.skillList.map((skill,index)=>{
return(
  <li key={index}>
  <TooltipProvider delayDuration={100}>
<Tooltip>
  <TooltipTrigger>
    <div className='text-6xl group-hover:text-[#00ff99] transition-all duration-300'>{skill.icon}</div>
  </TooltipTrigger>
  <TooltipContent>
<p>{skill.name}</p>
  </TooltipContent>
</Tooltip>
  </TooltipProvider>
  </li>
)
      })}
    </ul>
  </div>
</TabsContent>
{/* about */}
<TabsContent value='about' className='w-full'>
 about
</TabsContent>
</div>
</Tabs>
  </div>

</motion.div>
  )
};

export default Resume;