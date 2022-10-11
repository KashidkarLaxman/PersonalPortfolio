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
            <div className="relative bg-gray-400 overflow-hidden">
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
                                            href="!#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Hire Me
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="!#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Contact Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                </div>
                <div className="lg:absolute bg-gray-400 lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
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
                            Start building for free, then add a site plan to go live. Account plans unlock additional
                            features.
                        </p>
                    </div>
                </div>
            </div>
            {/*WHO I AM*/}
            <div className="bg-white">
                <div className="pb-16 bg-indigo-600 lg:pb-0 lg:z-10 lg:relative">
                    <div className="lg:mx-auto lg:max-w-7xl   lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="relative lg:-my-8">
                            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"/>
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                                <div
                                    className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                    <img
                                        className="object-cover lg:h-full lg:w-full"
                                        src="./profile.jpeg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                                <blockquote>
                                    <div>
                                        <div className="relative flex justify-center">
                                            <span
                                                className="px-2  text-sm text-white text-2xl font-extrabold">Who i am</span>
                                        </div>
                                        <svg
                                            className="h-12 w-12 text-white opacity-25"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                        </svg>

                                        <p className="mt-6 text-2xl font-medium text-white">
                                            Software Developer talented at translating customer requirements into
                                            testable engineering plans. Maintains exceptional development quality from
                                            conception through distribution. Willing to direct large-scale teams or work
                                            hands-on to complete extremely difficult projects. Brings both cutting-edge
                                            programming expertise and exceptional interpersonal skills to leadership
                                            roles.
                                        </p>
                                    </div>
                                    <footer className="mt-6">
                                        <p className="text-base font-medium text-white">Laxman Kashidkar</p>
                                        <p className="text-base font-medium text-indigo-100">Solutions developer</p>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
