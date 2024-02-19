import {
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const featuresData = [
 
  {
    
    color: "amber",
    title: "Health",
    icon: HealthAndSafetyIcon,
    description:
    " Good health is the foundation of success and happiness.",
    href:"/health"
    
  },
  {
    color: "amber",
    title: "Education",
    icon: SchoolIcon,
    description:
    "Education is the manifestation of perfection already in man",
    href:"/education"
  },
  {
    color: "amber",
    title: "Social",
    icon: Diversity3Icon,
    description:
    "They alone live who live for others; the rest are more dead than alive.",
    href:"/social"
  },
  {
    color: "amber",
    title: "Culture",
    icon: AutoAwesomeIcon,
    description:
"Each soul is potentially divine. The culture is the manifestation of this divinity.",
href:"/culture"
 },
  {
    color: "amber",
    title: "Self Reliance ",
    icon: SelfImprovementIcon,
    description:
"Rely on yourself; the essence of greatness is in self-reliance.",
href:"/self"
  }
];

export default featuresData;

