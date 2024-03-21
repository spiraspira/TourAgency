import CountriesPage from "../components/pages/CountriesPage";
import RoutesPage from "../components/pages/RoutesPage";
import SalesPage from "../components/pages/SalesPage";

export const routes = [
    {
        path: "/countries",
        Component: CountriesPage,
    },
    {
        path: "/routes",
        Component: RoutesPage,
    },
    {
        path: "/sales",
        Component: SalesPage,
    },
];