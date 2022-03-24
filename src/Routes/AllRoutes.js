import React from 'react';
import Main from '../pages/Main/Main';
import NotFound from '../pages/NotFound/NotFound';
import Tasbeh from '../pages/Tasbeh/Tasbeh';
import Weather from '../pages/Weather/Weather';

const AllRoutes=[
    {path:"/",element:<Main/>},
    {path:"/tasbeh",element:<Tasbeh/>},
    {path:"/weather",element:<Weather/>},
    {path:"*",element:<NotFound/>}
]
export default AllRoutes;