// // data/projectsData.js


// cardData.js
import s1 from "../../public/images/services/sr1.jpg";
import s2 from "../../public/images/services/sr2.jpg";
import s3 from "../../public/images/services/sr3.jpg";


// Services data
export const servicesData = [
  {
    id: 1,
    title: "Rental and Resale Assistance",
    description: "We specialize in Rental and Resales",
    image: s1, // update with actual path
    
  },
  {
    id: 2,
    title: "Interior Designing",
    description: "Transforms your house into a home",
    image: s2,
    
  },
  {
    id: 3,
    title: "Maintenance Assistance",
    description: "Comprehensive Property Sketching services",
    image: s3,
    
  },
];

// Projects data
export const projectsData = [
  {
    title: "Aurex Cascade City",
    status: "Ongoing",
    status_bg:"#C19A5B",
    project_logo: "/images/herosection/cascade.svg",
    qr_code: "/images/herosection/qr1.svg",
    rera_no: "K-RERA/PRJ/TSR/263/2024",
    vector_image: "/images/herosection/vector1.webp",
    distance: "900 mtr",
    from:"From Swaraj Round",
    apartment_type: "Luxury 1, 2, 3 BHK Apartments",
    total_units: "45 (B+G+9)",
    location: "Chembukkavu, Thrissur",
    total_land_area: "32 cents",
    brochure: true,
    brochure: "/brochure/Cascade-City.pdf",
    enquire_now: true,
    main_image: "/images/herosection/flat1.webp",
    map_icon: "/images/herosection/map.svg",
    map_iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.5911432509183!2d76.2201944!3d10.5328333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef00536d39b3%3A0x641d6752c9c2c5a4!2sAurex%20Cascade%20City!5e0!3m2!1sen!2sin!4v1758775557399!5m2!1sen!2sin"
  },
  {
    title: "Aurex Liard",
    status: "Ready to move",
    status_bg: "#006A54",
    project_logo: "/images/herosection/liard.svg",
    qr_code: "/images/herosection/qr2.svg",
    rera_no: "K-RERA/PRJ/TSR/194/2022",
    vector_image: "/images/herosection/vector2.webp",
    apartment_type: "premium 2, 3 BHK Apartments",
    total_units: "31 (B+G+8)",
    location: "Mulagunnathukavu, Thrissur",
    total_land_area: "23.4 Cents",
    brochure: true,
    brochure: "/brochure/Liard.pdf",
    enquire_now: true,
    main_image: "/images/herosection/flat2.webp",
    map_icon: "/images/herosection/map.svg",
    map_iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.7051954487824!2d76.20858897480234!3d10.602206589536149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e96d501d0601%3A0xfd52bc654db05c47!2sAurex%20Liard!5e0!3m2!1sen!2sin!4v1758778052457!5m2!1sen!2sin",
  },
];
