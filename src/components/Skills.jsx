import { SITE_NAME, SKILLS } from "../Constants/Site"


function Skills() {


    return (
        <>
            <section className="section py-5" bg="bg3">
                <div className="container">
                    <div className="text-center">
                        <span className="btn-md px-4 btn-outline-light btn rounded-pill "> Skills </span>
                    </div>
                    <div className="row">
                        {Object.entries(SKILLS).map(([skill,val] , index)=>(

                            <div className="col-md-6" key={index}>
                                <div className="my-md-4 my-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <b> {skill} </b>   <span>{val}%</span>
                                    </div>
                                    <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped" bg={'p'+index} style={{ width: `${val}%` }}></div>
                                    </div>
                                </div>
                            </div>
                      
                            ))}

                     
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills