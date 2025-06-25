import { PROJECTS } from "../Constants/Site"




function Project() {




    return (
        <>
            <section className="section py-5" bg="bg3">
                <div className="container">
                    <div className="row g-4">
                        {PROJECTS.map((project, index) => (
                            <div className="col-md-4  col-sm-6" key={index}>
                                <a className="card rounded-5 overflow-hidden border border-light  text-decoration-none " bg="bg1" style={{ borderBottom: '3rem solid ' }} href={project.url} >
                                    <img src={project.img} className="card-img-top rounded-bottom-5" alt="..." />
                                    <div className="card-body">
                                        <div className="row mx-0 g-3 my-3 gap-3 align-items-center">{project.lang.map((item, index) => (<span className="badge col" bg={`p${index}`} key={index}>{item}</span>))}</div>
                                        <h4 className="text-light fw-bold">{project.name}</h4>
                                        <p className="card-text mt-4"> {project.desc} </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}


export default Project