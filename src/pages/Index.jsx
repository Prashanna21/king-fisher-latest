import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "./Home.jsx";
import NotFound from "./NotFound.jsx";
import EnquiryForm from "../Components/Form/loginModel.jsx";
import AllPropertypage from "./AllPropertypage.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Blog from "./Blog.jsx";
import BlogViewer from "../Components/Blog/BlogView.jsx";
import OurServices from "./OurServices.jsx";
import PropertyViewPage from "./PropertyViewPage.jsx";
import PropertyApartments from "../Components/Property-Types/property-types.jsx";
import PropertyDetails from "../Components/PropertyDetails/propertydetails.jsx";
import Booking from "../Components/Booking/booking";

import OurTeam from "./OurTeam.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/enquiry",
        element: <EnquiryForm />,
      },
      {
        path: "/properties",
        element: <AllPropertypage />,
      },
      {
        path: "/properties/:id",
        element: <PropertyViewPage/>,
      },
      {
        path: "/properties/apartments",
        element: <PropertyApartments />,
      },
      {
        path: "/properties/villas",
        element: <PropertyApartments />,
      },
      {
        path: "/properties/villamates",
        element: <PropertyApartments />,
      },
      {
        path: "/properties/apartments/apartments",
        element: <PropertyDetails />,
      },
      {
        path: "/properties/apartments/apartments/:apartmentId",
        element: <PropertyDetails />,
      },
      {
        path: "/details/:apartmentId",
        element: <PropertyDetails />,
      },
      {
        path: "/booking/:apartmentId",
        element: <Booking />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogViewer />,
      },{
        path:"/services",
        element:<OurServices/>
      }
      ,{
        path:"/team",
        element:<OurTeam/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
