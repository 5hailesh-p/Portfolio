import About from "./About"
import Skills from "./Skills"

 
function Home(){
    return(
        <>
       
        <section className="section section-hero">
            <div className="container">
                <div className="row align-items-center min-vh-100">
                    <div className="col-md-6 text-center text-md-start">
                        <ProfilePic w="w-75"/>
                    </div>
                    <div className="col-md-6">
                        <div className=" p-4 rounded-3" bbr="purple" > 
                            <h4 className="fs-1 text-left mb-5">Its <span className="fw-bold mc">Me </span></h4>
                            <p className="fw-bold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga assumenda, dolor autem sint, iste architecto, quo eius adipisci deserunt repellendus ratione est!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <About/>

        <Skills/>

        
        </>
    )
}

export function ProfilePic(props){
    return (
        <>
            <img src="https://images.unsplash.com/photo-1588167056547-c183313da47c?q=80&w=531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" pro-pic="true" className={`img-fluid rounded-circle ${props.w}`} />
        </>
    )
}
export default Home