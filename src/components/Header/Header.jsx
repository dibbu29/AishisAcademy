import { useEffect } from 'react';
import logor from '../../assets/images/logor.png';

export default function Header() {
    useEffect(() => {
        // Function to handle smooth scrolling to a section
        const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Add smooth scrolling event listeners to all navigation links
        const navLinks = document.querySelectorAll('.smooth-scroll-link');
        navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section-id');
                scrollToSection(sectionId);
            });
        });

        // Remove event listeners when the component unmounts
        return () => {
            navLinks.forEach((link) => {
                link.removeEventListener('click', scrollToSection);
            });
        };
    }, []);

    return (
        <div className="md:h-[70%]">
            <div className="md:w-full md:h-[10%] h-[100%]">
                <nav className="bg-primary dark:bg-gray-900">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <a href=" " className="flex items-center">
                            <img src={logor} className="h-8 mr-3" alt="logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap bg-primary">Aishi's Academy</span>
                        </a>
                        <div className="flex items-center">
                            <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(91+) 81228 14612</a>
                            <a href="/signup" className="text-sm  text-blue-600 dark:text-secondary hover:underline">Login</a>
                        </div>
                    </div>
                </nav>
                <nav className="bg-base d">
                    <div className="max-w-screen-xl px-4 py-3 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                <li>
                                    <a href="sect" className="text-primary dark:text-white hover:underline smooth-scroll-link" data-section-id="Home">Home</a>
                                </li>
                                <li>
                                    <a href='/blog1' className="text-primary dark:text-white hover:underline smooth-scroll-link" data-section-id="blogs-section">Blog</a>
                                </li>
                                <li>
                                    <a href="schedule" className="text-primary dark:text-white hover:underline smooth-scroll-link" data-section-id="schedule-section">Syllabus</a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary dark:text-white hover:underline smooth-scroll-link" data-section-id="contact-section">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
            </div>
        </div>
    )
}