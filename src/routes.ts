import PageAddMoviePage from "./components/pages/addMovie/PageAddMovie"
import PageAuth from "./components/pages/auth/PageAuth"
import PageErr from "./components/pages/err/PageErr"
import PageHome from "./components/pages/home/PageHome"

export const loggedRoutes = [
    {path: "/home", component: PageHome},
    {path: "/err", component: PageErr},
    {path: "/auth", component: PageAuth},
]

export const unloggedRoutes = [
    {path: "/home", component: PageHome},
    {path: "/err", component: PageErr},
    {path: "/auth", component: PageAuth},
]

export const adminRoutes = [
    {path: "/home", component: PageHome},
    {path: "/admin", component: PageAddMoviePage},
    {path: "/err", component: PageErr},
    {path: "/auth", component: PageAuth},
]