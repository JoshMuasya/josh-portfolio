"use client"

const services = [
    { 
        id: '01', 
        title: 'Web Development', 
        description: 'Building high-performance websites and web applications using Next.js, React.js, and Tailwind CSS for modern, scalable, and responsive solutions.' 
    },
    { 
        id: '02', 
        title: 'SEO Optimization', 
        description: 'Implementing advanced SEO strategies to enhance website visibility and ranking, ensuring your site is optimized for both users and search engines.' 
    },
    { 
        id: '03', 
        title: 'UX/UI Design', 
        description: 'Designing intuitive and visually engaging user interfaces with a focus on user-centric experiences, leveraging tools like Figma and Tailwind CSS.' 
    },
    { 
        id: '04', 
        title: 'Custom Software Development', 
        description: 'Creating tailored software solutions using Python and Kotlin to solve business challenges and deliver robust, scalable applications.' 
    },
    { 
        id: '05', 
        title: 'Mobile App Development', 
        description: 'Developing dynamic and user-friendly mobile applications for Android and iOS using Flutter and Kotlin, designed to meet your specific needs.' 
    },
    { 
        id: '06', 
        title: 'Cybersecurity Solutions', 
        description: 'Providing advanced cybersecurity services to protect your applications and data, ensuring secure operations and user trust.' 
    }
];


export const Services = () => {

    return (
        <section className="py-20 px-2 md:px-0">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 md:pr-12 mb-12 md:mb-0">
                    <h2 className="text-6xl md:text-3xl lg:text-5xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
                </div>


                <div className="md:w-3/4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="mb-16 flex items-start">
                            <div className="text-purple-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}