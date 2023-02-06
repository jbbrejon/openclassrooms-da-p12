// Import React router modules
import { createBrowserRouter, Outlet } from "react-router-dom";

// Import components
import Header from '../../components/Header'
import Sidebar from "../../components/Sidebar";
import Error from '../../components/Error';

// Import pages
import Home from '../../pages/Home';


// Set standard layout (Header/Page/Footer)
const Layout = () => (
    <>
        <div className='container'>
            <Header />
            <main>
                <Sidebar></Sidebar>
                <Outlet />
            </main>
        </div>
    </>
);

// Set error layout (Header/Error component/Footer)
const ErrorLayout = () => (
    <>
        <div className='container'>
            <Header />
            <main>
                <Sidebar></Sidebar>
                <Error />
            </main>
        </div>
    </>
);

// Router configuration
const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorLayout />,
        children: [{
            path: "/",
            element: <Home />,
        },]
    }
]);

export default Router