import { ProfilePic } from "./Home";

function About(){
    return(
        <>
            <section className="section  py-5" bg="bg1">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="p-4 rounded-4 " bg="bg3">
                                <h3 className="fs-2 fw-bold">About <span className="sc">Me</span></h3>
                                <p className="fw-bold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas ad aperiam architecto voluptatibus iusto quis sit eaque dicta omnis dolore saepe pariatur fugiat totam assumenda, quam, optio voluptate maxime facere ex? Suscipit, exercitationem?
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-none d-md-block text-center">
                            <ProfilePic w="w-50"/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About