/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import ReactTypingEffect from 'react-typing-effect';

const navigation = [
    {name: 'Home', href: '!#'},
    {name: 'Skills', href: '!#'},
    {name: 'Services', href: '!#'},
    {name: 'Contact', href: '!#'},
]
const features = [
    {
        name: 'Durable',
        description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
    },
    {
        name: 'Refillable',
        description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
    },
    {
        name: 'Thoughtfully designed',
        description:
            'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
    },
    {name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.'},
]
export default function Example() {
    return (
        <>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-9xl mx-auto bg-gray-400 ">
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
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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
                                        {navigation.map((item) => (
                                            <a key={item.name} href={item.href}
                                               className="font-medium text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        ))}

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
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <a
                                            href="!#"
                                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <main
                            className="mt-10 mx-auto max-w-7xl px-4  sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">


                            <div className="sm:text-center lg:text-left z-1">
                                <span
                                    className="ext-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl block xl:inline">Hello, my name is</span>{' '}<br/>
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Laxman Kashidkar</span>{' '}<br/>
                                    <span
                                        className="block text-indigo-600 xl:inline sm:text-2xl md:text-2xl">And I am a </span>
                                    <span
                                        className="block text-indigo-600 xl:inline sm:text-3xl md:text-4xl"> <ReactTypingEffect
                                        text={["Developer", "Youtuber", "Vlogger"]}
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
                                {/*        <ReactTypingEffect*/}
                                {/*  text={["Hello.", "World!"]}*/}
                                {/*/>*/}

                                {/*<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">*/}
                                {/*  Software Developer talented at translating customer requirements into testable engineering plans. Maintains exceptional development quality from conception through distribution. .*/}
                                {/*</p>*/}
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                           href="./laxman_kashidkar_resume.pdf"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Download CV
                                        </a>
                                    </div>
                                    {/* <div className="mt-3 sm:mt-0 sm:ml-3">

                                        <a
                                            href="!#"
                                            className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Contact Me
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </main>
                    </div>

                </div>
                <div className="lg:absolute bg-gray-400 lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="./profile.png"
                        alt=""
                    />
                </div>

            </div>

            <div className="bg-white">
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

        </>
    )
}
