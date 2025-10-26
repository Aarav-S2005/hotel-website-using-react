import Image1 from "../assets/image/Image1.jpg";
import Image2 from "../assets/image/Image2.jpg";
import Restaurant1 from "../assets/image/Restaurant1.webp";
import Restaurant2 from "../assets/image/Restaurant2.webp";
import Restaurant3 from "../assets/image/Restaurant3.webp";
import {Bath, Binoculars, CarFront, Instagram, UtensilsCrossed, Wifi, Coffee, Dumbbell, Waves} from "lucide-react";
import {Facebook} from "lucide-react";
import {Twitter} from "lucide-react";
import {Youtube} from "lucide-react";
import Room1 from "../assets/image/Room1.webp";
import Room2 from "../assets/image/Room2.webp";
import Room3 from "../assets/image/Room3.webp";

export const navBarComponents = [
    {
        name: "Home",
        path: "home",
    },
    {
        name: "Villas and Suites",
        path: "accommodations",
    },
    {
        name: "Amenities",
        path: "amenities",
    },
    {
        name: "Dining",
        path: "dining",
    }
]

export const underlineVariants = {
    initial: {
        scaleX: 0,
        originX: 0.5,
    },
    hover: {
        scaleX: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

export const homeCardsContent = [
    {
        path: Image1,
        align: "left",
        heading: "Land Of Luxury",
        content: "Experience timeless elegance and modern comfort where every detail is crafted to perfection. Indulge in serene surroundings and unmatched hospitality that redefine luxury living.",
    },
    {
        path: Image2,
        align: "right",
        heading: "Crafting A World Of Beauty",
        content: "Immerse yourself in breathtaking design and tranquil ambiance. From stunning architecture to curated interiors, every space is designed to inspire relaxation and wonder.",
    },
];

export const footerContent = [
    {
        header: "Get to know us",
        list: ["Company information",
            "Careers",
            "FAQ",
            "Contact us",
            "Awards & Accolades"
        ]
    },
    {
        header: "Useful Information",
        list: [
            "Travel guide",
            "Plan your visit",
            "Getting here",
            "Services and amenities",
            "Hotel and flight packages"
        ]
    },

]

export const socials = [
    Instagram,
    Twitter,
    Youtube,
    Facebook,
]

export const diningCardComponents = [
    {
        path: Restaurant1,
        align: "left",
        restaurant_name: "The Willow Creek Café",
        description: "Offering fresh, farm-to-table breakfast and lunch in a bright space overlooking the stream. Calm and airy."
    },
    {
        path: Restaurant2,
        align: "right",
        restaurant_name: "Forest Hearth Grill",
        description: "An evening spot for slow-cooked regional dishes, centered around a cozy, stone fireplace. Rustic and warm."
    },
    {
        path: Restaurant3,
        align: "left",
        restaurant_name: "Meadow's Edge Tea Room",
        description: "A tranquil lounge serving light refreshments, herbal teas, and house-made pastries throughout the afternoon."
    }
]

export const villasAndSuitesContent = [
    {
        path: Room1,
        name: "Forest Pool Villa",
        content: "A private sanctuary surrounded by lush greenery, featuring a personal plunge pool, open-air bath, and floor-to-ceiling views of nature’s calm."
    },
    {
        path: Room2,
        name: "Garden Serenity Suite",
        content: "Blending indoor elegance with outdoor charm, this suite offers a spacious terrace overlooking curated gardens — perfect for peaceful mornings and sunset reflections."
    },
    {
        path: Room3,
        name: "Lakeside Luxe Villa",
        content: "Set by tranquil waters, this villa combines modern luxury with natural tranquility, featuring a panoramic deck and serene water views for ultimate relaxation."
    }
]

export const amenities = [
    { id: 1, icon: Dumbbell, title: "Fitness Center", text: "State-of-the-art gym open 24/7 for all guests." },
    { id: 2, icon: Waves, title: "Infinity Pool", text: "Rooftop pool with panoramic skyline views." },
    { id: 3, icon: Bath, title: "Luxury Spa", text: "Rejuvenate with world-class therapies and massages." },
    { id: 4, icon: UtensilsCrossed, title: "Fine Dining", text: "Experience multi-cuisine delicacies in elegant ambience." },
    { id: 5, icon: Wifi, title: "High-Speed Wi-Fi", text: "Complimentary fiber-optic internet available in all rooms and public areas." },
    { id: 6, icon: CarFront, title: "Valet Parking", text: "Convenient and secure indoor valet parking service available 24 hours a day." },
    { id: 7, icon: Coffee, title: "Executive Lounge", text: "Exclusive access to a private lounge with complimentary refreshments and business services." },
    { id: 8, icon: Binoculars, title: "Guided Nature Walks", text: "Complimentary morning and evening excursions with an expert, exploring local trails and wildlife." }
];