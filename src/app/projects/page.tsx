export default function ProjectPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold">Things that I've worked on</h1>
            <p className="mt-4 text-lg text-gray-600">
                Here are some of the projects I've worked on. Click on any project to learn more about it.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-semibold mb-2">Dessert Shop</h2>
                    <p className="text-gray-500 mb-4">
                        A Java based project using Object-Oriented Programming principles to create
                        a dessert shop application. Includes classes for different dessert items and
                        manages orders. Contains a database and admin module to store and control
                        information about customers and their orders.
                    </p>
                    <a
                        href="https://github.com/Ensign-College/CS115-Lab3a-8b-DessertShop-Ceakin04"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn More
                    </a>
                    <div className="mt-4 w-full h-48 flex items-center justify-center rounded overflow-hidden">
                        <img
                            src="/dessert-shop.jpg"
                            alt="Dessert Shop"
                            className="object-contain w-full h-full" />
                    </div>
                </div>
                <div className="rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-semibold mb-2">Portfolio Site</h2>
                    <p className="text-gray-500 mb-4">
                        This is my personal portfolio website built using Next.js and Tailwind CSS.
                        It showcases my projects, skills, and experience in web development.
                        The site is fully responsive and optimized for performance.
                    </p>
                    <a
                        href="https://github.com/colbyeakin/cs220-portfolio"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn More
                    </a>
                    <div className="mt-4 w-full h-48 flex items-center justify-center rounded overflow-hidden">
                        <img
                            src="/portfolio.jpg"
                            alt="Portfolio Site"
                            className="object-contain w-full h-full" />
                    </div>
                </div>
                <div className="rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col">
                    <h2 className="text-2xl font-semibold mb-2">Mountain Drawing</h2>
                    <p className="text-gray-500 mb-4 flex-grow">
                        A Java based project using the Shapes and Graphic2D classes
                        to create a mountain drawing. In this project, I used the skills
                        I learned in Object Oriented Programming to create various shapes
                        and combine them to form a complete drawing.
                    </p>
                    <a
                        href="https://github.com/Ensign-College/CS115-Lab12a-13a-DrawShapes-Ceakin04"
                        className="text-blue-500 hover:underline mb-4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn More
                    </a>
                    <div className="w-full h-48 flex items-center justify-center rounded overflow-hidden">
                        <img
                            src="/mountain-drawing.jpg"
                            alt="Mountain Drawing"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
