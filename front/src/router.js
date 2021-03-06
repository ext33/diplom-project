import MainPage from "@/components/pages/main/MainPage";
import SignupPage from "@/components/pages/signup/SignupPage";
import CancelSignupPage from "@/components/pages/cancelsignup/CancelSignupPage";
import ViewSignupPage from "@/components/pages/viewsignup/ViewSignupPage";
import NotFound from "@/components/pages/errors/NotFound";
import Error from "@/components/pages/errors/Error";
import AboutPage from "@/components/pages/about/AboutPage"

export const routes = [
    {path: '/', component: MainPage},
    {path: '/About', component: AboutPage},
    {path: '/Signup', component: SignupPage},
    {path: '/Signup/:id/Cancel', component: CancelSignupPage, props: true},
    {path: '/Signup/:id', component: ViewSignupPage, props: true},
    {path: '/Signup-*', component: NotFound},
    {path: '/404', component: NotFound},
    {path: '/error', component: Error},
    {path: '*', component: NotFound},
]