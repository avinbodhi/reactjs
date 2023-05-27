import { BrowserRouter,Routes,Route } from "react-router-dom";
import ShoppingComponent from "./ShoppingComponent";
import SPAComponent from "./SPAComponent";



export default function TutorialRoutes(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <Routes>
            <Route path="/" element={< SPAComponent />} />

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
            </BrowserRouter>
        </div>
    )
}