import Contact from "../pages/contacts/contacts";
import PersonalDetails from "../pages/personalDetails/personalDetails";
import Profile from "../pages/profile/profile";
import Qualification from "../pages/qualification/qualification";
import WorkExperience from "../pages/workExperience/workexperience";


const navBarRoutes = [
    {
        path: '/Darshan_Kanthraj/',
        main: <Profile/>
    },
    {
        path: '/Darshan_Kanthraj/qualification/',
        main: <Qualification/>
    },
    {
        path: '/Darshan_Kanthraj/workexperience/',
        main: <WorkExperience/>
    },
    {
        path: '/Darshan_Kanthraj/personaldetails/',
        main: <PersonalDetails/>
    },
    {
        path: '/Darshan_Kanthraj/contact/',
        main: <Contact/>
    },
]

export default navBarRoutes;