import PageAddMovie from "./components/pages/addMovie/PageAddMovie"
import PageAuth from "./components/pages/auth/PageAuth"
import PageErr from "./components/pages/err/PageErr"
import PageHome from "./components/pages/home/PageHome"

export const loggedRoutes = [
    {path: "/home", component: PageHome},
    {path: "/err", component: PageErr},
]

export const unloggedRoutes = [
    {path: "/home", component: PageHome},
    {path: "/err", component: PageErr},
    {path: "/auth", component: PageAuth},
]

export const adminRoutes = [
    {path: "/home", component: PageHome},
    {path: "/admin", component: PageAddMovie},
    {path: "/err", component: PageErr},
    {path: "/1"}
]