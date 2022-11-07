import {Fragment, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    CloudUploadIcon,
    CogIcon,
    DatabaseIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
} from '@heroicons/react/outline'
import {ChevronRightIcon, ExternalLinkIcon} from '@heroicons/react/solid'
import ReactTypingEffect from "react-typing-effect";
import {ChatAltIcon, TagIcon, UserCircleIcon} from '@heroicons/react/solid'
import ReactPlayer from 'react-player'
import {  useEffect, useRef} from 'react'
import React from "react";
import axios from "axios";
import Header from "./Header"
const navigation = [
    {name: 'Home', href: '#', refkey:'header'},
    {name: 'About', href: '#', refkey:'about'},
    {name: 'Skills', href: '#', refkey:'skills'},
    {name: 'Experience', href: '#', refkey:'experience'},
    {name: 'Blogs', href: '#', refkey:'blogs'}
]
const features = [
    {
        name: 'SQL & NoSql',
        description: 'Well versed with SQL and Nosql databases like MongoDb, SQL, Postgres, Mysql, Redis',
        imageUrl: '/database.png',
    },
    {
        name: 'Machine Learning',
        description: 'Certified in Machinelearning from Stanford University(Coursera), Basic Alogorithms like Regression, classification ',
        imageUrl: '/creativity.png',
    },
    {
        name: 'VueJs',
        description: 'Lifecycle Methods, Components, Quasar Framework, Vuex, Axios, Web and Hybrid mobile app Development',
        imageUrl: '/vuejs.png',
    },
    {
        name: 'ReactJs',
        description: 'React Hooks, Redux, React DOM, Components, Webapp development',
        imageUrl: '/react.png',
    },
    {
        name: 'Python',
        description:
            'Flask, Django, Django Rest Framework(DRF), OOPs, Crawling, REST API, Pandas.',
        imageUrl: '/python.png',
    },
    {
        name: 'Java',
        description: 'Core Java, OOps, Basic understanding of advance java',
        imageUrl: '/java.png',
    },
]
let blogPosts = []
let kk =    [ {
        id: 3,
        title: 'Improve your customer experience',
        href: '#',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: {name: 'Case Study', href: '#'},
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        author: {
            name: 'Daniela Metz',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '11 min',
    }]
let  datas = []
const footerNavigation = {
    solutions: [
        {name: 'Marketing', href: '#'},
        {name: 'Analytics', href: '#'},
        {name: 'Commerce', href: '#'},
        {name: 'Insights', href: '#'},
    ],
    support: [
        {name: 'Pricing', href: '#'},
        {name: 'Documentation', href: '#'},
        {name: 'Guides', href: '#'},
        {name: 'API Status', href: '#'},
    ],
    company: [
        {name: 'About', href: '#'},
        {name: 'Blog', href: '#'},
        {name: 'Jobs', href: '#'},
        {name: 'Press', href: '#'},
        {name: 'Partners', href: '#'},
    ],
    legal: [
        {name: 'Claim', href: '#'},
        {name: 'Privacy', href: '#'},
        {name: 'Terms', href: '#'},
    ],
    social: [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/laxmankashidkar/',
            icon: (props) => (
                <svg {...props}
                className="w-6 h-6 text-grey-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/kashidkarlaxman/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/kashidkarLaxman',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/KashidkarLaxman/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Dribbble',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM60.17707,48.1772c4.82747,0 8.04387,3.2164 8.04387,7.50493c0,4.28853 -3.2164,7.50493 -8.57707,7.50493c-4.82747,0.00573 -8.04387,-3.2164 -8.04387,-7.50493c0,-4.28853 3.2164,-7.50493 8.57707,-7.50493zM68.8,114.66667h-17.2v-45.86667h17.2zM126.13333,114.66667h-16.19093v-25.06613c0,-6.9316 -4.3172,-8.5312 -5.934,-8.5312c-1.6168,0 -7.0176,1.0664 -7.0176,8.5312c0,1.0664 0,25.06613 0,25.06613h-16.72413v-45.86667h16.72987v6.3984c2.15573,-3.7324 6.47293,-6.3984 14.5684,-6.3984c8.09547,0 14.5684,6.3984 14.5684,20.80053z"/>

                </svg>
               
                    
            ),
        },
    ],
}

const activity = [
    {
        id: 1,
        type: 'comment',
        person: {name: 'Solutions Devloper - Incentius', href: '#'},
        imageUrl:
            './profile.png',
        comment:
            ['Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.',
                'Discussed issues with team members to provide resolution and apply best practices.',
                'Developed clear specifications for project plans using customer requirements.',
                'Documented technical workflows and knowledge to educate newly hired employees.',
                'Designed reusable and reliable code for use within distributed cloud environments.'],
        date: '16-Jun-2020 - Present',

    },
    {
        id: 2,
        type: 'comment',
        person: {name: 'Software Engineer Intern - Ticron Technologies', href: '#'},
        imageUrl:
            './profile.png',
        comment:
            ['Collaborated with software engineers to develop and test application procedures for system efficiency.',
'Provided software and hardware troubleshooting to maintain performance levels.',
'Wrote clear, clean code for various projects.'
],
        date: '01-Jan-2020 - 15-Jun-2020',
    },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
     const [post, setPost] = React.useState([]);
     const [avatar, setAvatar] = React.useState('');
     const header = useRef(null);
     const about = useRef(null);
     const skills = useRef(null);
     const experience = useRef(null);
     const blogs = useRef(null); 
     const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        });
     };
    useEffect(() => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@laxmankashidkar').then(res => {
            setPost(res.data['items'])
            setAvatar(res.data.feed.image)
            res.data['items'].forEach((item, i) => {
          // item["avatar"] = this.state.avatar; // push avatar inside the json
          // item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
          // const row = Math.floor(i / 3);
                blogPosts.push({
                    id: 1,
                    title: item['title'],
                    href: item['link'],
                    date: item['pub_date'],
                    datetime: item['pub_date'],
                    category: {name: item['categories'], href: '#'},
                    imageUrl: item['thumbnail'],
                    preview: item['description'],
                    author: {
                        name: item['author'],
                        imageUrl:
                            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                        href: 'https://medium.com/@kashidkar37',
                    },
                    readingLength: '6 min',
                });
            });
            // console.log(post)

        })
    }, [])
    return (
        <div className="bg-white scroll-smooth ">
            <div className="relative overflow-hidden">
            <div className="relative bg-gray-400 overflow-hidden" ref={header}>
                <div className="max-w-7xl mx-auto bg-gray-400 ">
                    <div
                        className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100"/>
                        </svg>

                        <Popover>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                                     aria-label="Global">
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <a href="!#">
                                                <span className="sr-only">Workflow</span>
                                                <img
                                                    alt="Workflow"
                                                    className="h-8 w-auto sm:h-10"
                                                    src="./profile-removebg-preview.png"
                                                />
                                            </a>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button
                                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                        {/* {navigation.map((item) => (
                                            <span key={item.name} onClick={() => scrollToSection(item.refkey)}
                                               className="font-medium text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </span>
                                        ))} */}
                                         <a onClick={() => scrollToSection(header)}
                                               className=" cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                                                Home
                                            </a>
                                            <a onClick={() => scrollToSection(about)}
                                               className="cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                                                About
                                            </a>
                                             <a  onClick={() => scrollToSection(skills)}
                                               className="cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                                                Skills
                                            </a>
                                            <a  onClick={() => scrollToSection(experience)}
                                               className="cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                                                Experience
                                            </a>
                                            <a  onClick={() => scrollToSection(blogs)}
                                               className="cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                                                Blogs
                                            </a>

                                    </div>
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div
                                        className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto rounded-lg"
                                                    src="./profile-removebg-preview.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button
                                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            {/* {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            ))} */}
                                            <a onClick={() => scrollToSection(header)}
                                              className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                                Home
                                            </a>
                                            <a onClick={() => scrollToSection(about)}
                                              className=" cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                                About
                                            </a>
                                             <a  onClick={() => scrollToSection(skills)}
                                             className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                                Skills
                                            </a>
                                            <a  onClick={() => scrollToSection(experience)}
                                      className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                                Experience
                                            </a>
                                            <a  onClick={() => scrollToSection(blogs)}
                                             className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                                Blogs
                                            </a>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <main
                            className="mt-10 mx-auto max-w-7xl px-4  sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">


                            <div className="sm:text-center lg:text-left z-1" >
                                <span
                                    className="ext-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl block xl:inline">Hello there, my name is</span>{' '}<br/>
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Laxman Kashidkar</span>{' '}<br/>
                                    <span
                                        className="block text-indigo-600 xl:inline sm:text-2xl md:text-2xl">And I am a </span>
                                    <span
                                        className="block text-indigo-600 xl:inline sm:text-3xl md:text-4xl"> <ReactTypingEffect
                                        text={["Developer", "Youtuber", "Blogger"]}
                                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                                        speed={100}
                                        displayTextRenderer={(text, i) => {
                                            return (
                                                <h1>
                                                    {text.split('').map((char, i) => {
                                                        const key = `${i}`;
                                                        return (
                                                            <span
                                                                key={key}
                                                                style={i % 2 === 0 ? {color: 'magenta'} : {}}
                                                            >{char}</span>
                                                        );
                                                    })}
                                                </h1>
                                            );
                                        }}
                                    /></span>

                                </h1>
                                <div className="mt-8  ml-2 lg:ml-0 flex justify-center lg:justify-start space-x-6">
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                           href="./laxman_kashidkar_resume.pdf"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Download CV
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">

                                        <a
                                            href="mailto:kashidkar37@gmail.com"
                                            className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Contact Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                </div>
                <div className="hidden md:block md:ml-10  md:space-x-8 lg:absolute bg-gradient-to-r  from-teal-500 to-cyan-600 lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="./profile.png"
                        alt=""
                    />
                </div>

            </div>

            <div className="bg-white" ref={about} >
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            About me
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            Who i am?
                        </p>
                    </div>
                </div>
            </div>
                
                <main>
                    {/* Testimonial section */}
                       <div className="bg-gradient-to-r  from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            {/*<div className="relative lg:-my-8">*/}
                            {/*    */}
                            {/*    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 sm:h-full">*/}
                            {/*        <div*/}
                            {/*            className="  aspect-w-10 aspect-h-6 rounded-xl shadow-xl  sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">*/}
                            {/*            <img*/}
                            {/*                className="object-cover lg:h-full lg:w-full "*/}
                            {/*                src="./profile.jpeg"*/}
                            {/*                alt=""*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="relative lg:-my-8">
                {/*<div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />*/}
                <div className="mx-auto max-w-md  sm:max-w-3xl sm:px-6 lg:h-full lg:p-0 ">
                  <div className="aspect-w-10 aspect-h-9 lg:aspect-w-10 lg:aspect-h-7 overflow-hidden rounded-xl shadow-xl  lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="./profile.png"
                      alt=""
                    />
        {/* <ReactPlayer url='./introvideo.mp4'*/}
        {/* className='react-player'*/}
        {/*  width='100%'*/}
        {/*height='100%'/>*/}

            {/*              <ReactPlayer playing url='/introvideo.mp4'*/}
            {/*    height='100%'*/}
            {/*    width='100%'*/}
            {/*    controls={true}*/}
            {/*/>*/}

                  </div>
                </div>
              </div>
                            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                                <div
                                    className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                                    <blockquote>
                                        <div>
                                            <svg
                                                className="h-12 w-12 text-white opacity-25"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                            </svg>
                                            <p className="mt-6 text-xl font-medium text-white">
                                                Software Developer talented at translating customer requirements into
                                                testable engineering plans. Maintains exceptional development quality
                                                from
                                                conception through distribution.
                                                Willing to direct large-scale teams or work
                                                hands-on to complete extremely difficult projects. Brings both
                                                cutting-edge
                                                programming expertise and exceptional interpersonal skills to leadership
                                                roles.
                                            </p>
                                        </div>
                                        <footer className="mt-6">
                                            <p className="text-base font-medium text-white">Laxman Kashidkar</p>
                                            <p className="text-base font-medium text-cyan-100">Solutions developer at
                                                Incentius</p>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Experience */}


                    {/* Feature section with grid */}
                    <div ref={skills}  className="relative bg-white py-16 sm:py-24 lg:py-32">
                        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Certifications/ Skills</h2>
                            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                Everything you need to deploy your app
                            </p>
                            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                                Experienced Full Stack developer with nearly 3 years of experience in Python (Flask, Django), Javascript(VueJS, ReactJS) and Database(Mongodb, SQL). Excellent in resolving problems and improving customer satisfaction.
                            </p>
                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="pt-6">
                                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                                <div className="-mt-6">
                                                    <div>
                            <span
                                className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/> */}
                              <img
                                                                        className="h-8 w-8  flex items-center justify-center "
                                                                        src={feature.imageUrl}
                                                                        alt=""
                                                                    />
                            </span>
                                                    </div>
                                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
{/* CTA Section */}
                    <div ref={experience}  className="relative bg-gray-900">
                        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                                alt=""
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
                            />
                        </div>
                        <div
                            className="relative mx-auto max-w-md px-4 py-6 sm:max-w-7xl sm:px-6 sm:py-10 md:py-18 lg:px-8 lg:py-22">
                            <div className="md:ml-auto md:w-1/2 md:pl-10">
                                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                                    Experience
                                </h2>
                                {/*<p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re*/}
                                {/*    here to help</p>*/}
                                <div className="flow-root">
                                    <ul role="list" className="-mb-8">
                                        {activity.map((activityItem, activityItemIdx) => (
                                            <li key={activityItem.id}>
                                                <div className="relative pb-8">
                                                    {activityItemIdx !== activity.length - 1 ? (
                                                        <span
                                                            className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                                            aria-hidden="true"/>
                                                    ) : null}
                                                    <div className="relative flex items-start space-x-3">
                                                        {activityItem.type === 'comment' ? (
                                                            <>
                                                                <div className="relative mr-1">
                                                                    <img
                                                                        className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                                                                        src={activityItem.imageUrl}
                                                                        alt=""
                                                                    />

                                                                </div>
                                                                <div className="min-w-0 flex-1 ">
                                                                    <div className="text-left">
                                                                        <div className="text-sm">
                                                                            <a href={activityItem.person.href}
                                                                               className="font-medium text-white">
                                                                                {activityItem.person.name}
                                                                            </a>
                                                                        </div>
                                                                        <p className="mt-0.5 text-sm text-gray-500">{activityItem.date}</p>
                                                                    </div>
                                                                    <div className="my-2 text-sm text-white text-left">
                                                                        <ul role="list " className="-mb-8 list-disc">
                                                                            {activityItem.comment.map((com, activityItemIdx) => (
                                                                                <li>
                                                                                    {com}
                                                                                </li>))
                                                                            }</ul>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : activityItem.type === 'assignment' ? (
                                                            <>
                                                                <div>
                                                                    <div className="relative px-1">
                                                                        <div
                                                                            className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                                                            <UserCircleIcon
                                                                                className="h-5 w-5 text-gray-500"
                                                                                aria-hidden="true"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-0 flex-1 py-1.5">
                                                                    <div className="text-sm text-white">
                                                                        <a href={activityItem.person.href}
                                                                           className="font-medium text-white">
                                                                            {activityItem.person.name}
                                                                        </a>{' '}
                                                                        assigned{' '}
                                                                        <a href={activityItem.assigned.href}
                                                                           className="font-medium text-white">
                                                                            {activityItem.assigned.name}
                                                                        </a>{' '}
                                                                        <span
                                                                            className="whitespace-nowrap">{activityItem.date}</span>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : activityItem.type === 'tags' ? (
                                                            <>
                                                                <div>
                                                                    <div className="relative px-1">
                                                                        <div
                                                                            className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                                                            <TagIcon className="h-5 w-5 text-gray-500"
                                                                                     aria-hidden="true"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-0 flex-1 py-0">
                                                                    <div className="text-sm leading-8 text-gray-500">
                        <span className="mr-0.5">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>{' '}
                            added tags
                        </span>{' '}
                                                                        <span className="mr-0.5">
                          {activityItem.tags.map((tag) => (
                              <Fragment key={tag.name}>
                                  <a
                                      href={tag.href}
                                      className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                  >
                                <span className="absolute flex-shrink-0 flex items-center justify-center">
                                  <span
                                      className={classNames(tag.color, 'h-1.5 w-1.5 rounded-full')}
                                      aria-hidden="true"
                                  />
                                </span>
                                      <span className="ml-3.5 font-medium text-gray-900">{tag.name}</span>
                                  </a>{' '}
                              </Fragment>
                          ))}
                        </span>
                                                                        <span
                                                                            className="whitespace-nowrap">{activityItem.date}</span>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-md shadow mt-2">
                                                <a
                                                    href="./laxman_kashidkar_resume.pdf"
                                                    className="w-1/2 flex items-center mx-auto justify-center px-3 py-2 mt-9 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-5"
                                                >
                                                    Download CV
                                                </a>
                                            </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog section */}
                    <div ref={blogs} className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
                        <div className="relative">
                            <div
                                className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Blog</h2>
                                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                    Helpful Resources
                                </p>
                                {/*<p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">*/}
                                {/*    Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis*/}
                                {/*    nunc, ullamcorper*/}
                                {/*    malesuada. Eleifend condimentum id viverra nulla.*/}
                                {/*</p>*/}
                            </div>

                            <div
                                className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                                {post.map((pos) => (

                                    <div key={pos.link} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover" src={pos.thumbnail} alt=""/>
                                        </div>
                                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                            <div className="flex-1">
                                        {/*        <p className="text-sm font-medium text-cyan-600">*/}
                                        {/*            /!*<a href={post.category.href} className="hover:underline">*!/*/}
                                        {/*            /!*    {post.category.name}*!/*/}
                                        {/*            /!*</a>*!/*/}
                                        {/*        </p>*/}
                                                <a href={pos.link} className="block mt-2">
                                                    <p className="text-xl font-semibold text-gray-900">{pos.title}</p>
                                                    <div className="mt-3 text-base text-gray-500" > <p dangerouslySetInnerHTML={{ __html: pos.description.split('.')[0] }} ></p></div>
                                                    {/*<p className="mt-3 text-base text-gray-500">{`${ToText(*/}
                                                    {/*    pos.description.substring(0, 1000)*/}
                                                    {/*)}...`}</p>*/}
                                                </a>
                                            </div>
                                            <div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href={pos.author.href}>
                                                        <img className="h-10 w-10 rounded-full"
                                                             src={avatar} alt={pos.author.name}/>
                                                    </a>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <a href={pos.author.href} className="hover:underline">
                                                            {pos.author.name}
                                                        </a>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime={pos.datetime}>{pos.pubDate}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                        <span>{pos.readingLength} read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </main>

                <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">

            <div  className="px-5 py-2 space-x-6">
            

          <a onClick={() => scrollToSection(header)}
                                              className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                Home
                                            </a>
                                            <a onClick={() => scrollToSection(about)}
                                              className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                About
                                            </a>
                                             <a  onClick={() => scrollToSection(skills)}
                                             className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                Skills
                                            </a>
                                            <a  onClick={() => scrollToSection(experience)}
                                     className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                Experience
                                            </a>
                                            <a  onClick={() => scrollToSection(blogs)}
                                              className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                                Blogs
                                            </a>
                                            </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 flex justify-center  text-center text-base text-gray-400">&copy; 2022 Your Laxman. All rights reserved. Made With <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
</div>
      </div>
    </footer>
            </div>
        </div>
    )
}
