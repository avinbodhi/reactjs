import {BrowserRouter,Routes,Route,Link, Outlet} from 'react-router-dom';
import ShoppingComponent from './ShoppingComponent';
import TutorialRoutes from './TutorialRoutes';

export default function SPAComponent(){
    return (
        <BrowserRouter>
        <div className='container-fluid'>
            <nav>
                <ul>
                    <li><Link to='/html'>HTML</Link></li>

                    <li><Link to='/css'>CSS</Link></li>

                    <li><Link to='/js'>JavaSript</Link></li>
                    <li><Link to='/shopping'>Shopping</Link></li>

                </ul>
                <hr/>
                
                <Routes>
                <Route path="*" element={<div className='text-center text-warning'>NOT FOUND PLEASE TRY AGAIN! </div> }  />
                <Route path='shopping' element={<ShoppingComponent/>}/>

                        <Route path='/' element={<div>Your Home</div>}/>

                        <Route path="html" element={
                               <main>
                                   <h2>HTML</h2>
                                   <p>It is markup language</p>
                               </main>     
                        } />


                            <Route path="css" element={
                               <main>
                                   <h2>CSS</h2>
                                   <p>It is  CSS</p>
                               </main>     
                        } />

                            <Route path="js" element={
                               <main>
                                   <h2>JS</h2>
                                   <p>It is javascript language</p>
                               </main>     
                        } />
                </Routes>

            </nav>
        </div>
        </BrowserRouter>
    )

}