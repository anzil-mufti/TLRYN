import FeatureCard from "./Feature";

const Features=()=>{
    return(
        <div className="p-4">
            <h1 className="text-2xl font-semibold lg:text-3xl text-center">
               Features
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full lg:gap-8 lg:px-16">
                <FeatureCard title="React 18"  description="Learn the core concepts, JSX syntax, component-based architecture, and how to build reusable UI components." imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
                <FeatureCard title ="Tailwind CSS" description="Learn how to create visually appealing and responsive user interfaces using Tailwind CSS." imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"/>
                <FeatureCard title="Appwrite" description="Learn Appwrite to leverage its features to build scalable and secure applications with ease." imageUrl="https://appwrite.io/images-ee/press/square-logo-pink.svg"/>
                <FeatureCard title="Zustand" description="Learn how to integrate Zustand into your React projects for effective state management." imageUrl="https://i.imgur.com/6bZOi50.png"/>
            </div>
        </div>
    )
}
export default Features;
