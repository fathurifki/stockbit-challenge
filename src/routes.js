import DefaultPage from "./pages/DefaultPage"
import DetailPage from "./pages/DetailPage"

const AppRoutes = [
    {
        path: '/home',
        component: DefaultPage
    },
    {
        path: '/detail-page/:params',
        component: DetailPage
    },
]

export default AppRoutes