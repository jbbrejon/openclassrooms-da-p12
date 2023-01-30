// Import React router modules
import { createBrowserRouter, Outlet } from "react-router-dom";

// Import components
import Header from '../../components/Header'
import Error from '../../components/Error';

// Import pages
import Home from '../../pages/Home';
import User from '../../pages/User';

// Set standard layout (Header/Page/Footer)
const Layout = () => (
    <>
        <div className='container'>
            <Header />
            <Outlet />
        </div>
    </>
);

// Set error layout (Header/Error component/Footer)
const ErrorLayout = () => (
    <>
        <div className='container'>
            <Header />
            <Error />
            <Outlet />
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
        },
        {
            path: "user/:id/",
            element: <User />,
        },]
    }
]);

export default Router