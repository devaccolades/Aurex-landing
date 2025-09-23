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
    vector_image: "/images/herosection/vector1.svg",
    distance: "900 mtr",
    from:"From Swaraj Round",
    apartment_type: "Luxury 1, 2, 3 BHK Apartments",
    total_units: "45 (B+G+9)",
    location: "Chembukkavu, Thrissur",
    total_land_area: "32 cents",
    brochure: true,
    brochure: "/brochure/Cascade-City.pdf",
    enquire_now: true,
    main_image: "/images/herosection/flat1.svg",
    map_icon: "/images/herosection/map.svg",
  },
  {
    title: "Aurex Liard",
    status: "Ready to move",
    status_bg: "#006A54",
    project_logo: "/images/herosection/liard.svg",
    qr_code: "/images/herosection/qr2.svg",
    rera_no: "K-RERA/PRJ/TSR/194/2022",
    vector_image: "/images/herosection/vector2.svg",
    apartment_type: "premium 2, 3 BHK Apartments",
    total_units: "31 (B+G+8)",
    location: "Mulagunnathukavu, Thrissur",
    total_land_area: "23.4 Cents",
    brochure: true,
    brochure: "/brochure/Liard.pdf",
    enquire_now: true,
    main_image: "/images/herosection/flat2.svg",
    map_icon: "/images/herosection/map.svg",
  },
];
