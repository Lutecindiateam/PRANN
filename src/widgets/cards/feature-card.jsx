import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
// import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";


export function FeatureCard({ color, icon, title , description,href }) {
  // const router = useRouter()
  const navigate = useNavigate()
  const handleCardClick = () => {
   navigate(href); // Use router.push to navigate to the specified route
  };

  return (
    <Card className="rounded-lg shadow-lg shadow-gray-5000 " style={{borderRadius:"35px"  }} onClick={handleCardClick}>
      <CardBody className="px-8 text-center">
        <IconButton
          variant="gradient" 
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon }
        </IconButton>
        <Typography variant="h3" className="mb-2" color="grey">
          {title}
        </Typography>
        <Typography className="font-normal text-black-600" style={{textAlign:"center"}}>
          {description}
        </Typography>
       
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "amber",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  // description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
