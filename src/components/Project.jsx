const Project=({videoId})=>{
    return(
        <div className="card btn btn-ghost h-full p-0 w-full md:w-96 bg-base-100 shadow-xl image-full overflow-hidden" >
        <figure><img src={`https://i.imgur.com/D6OAFOS.png`} alt="Shoes" /></figure>
        <div className="opacity-0 bg-black/50 hover:opacity-100 absolute top-0 bottom-0 left-0 right-0">
            <div className="card-body p-6 mt-auto bg-black/70">
                <div className="card-title normal-case text-white"></div>
            </div>
        </div>
       <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-4">
        <button className="btn z-20 btn-primary btn-sm">Code</button>
        <button className="btn z-20 btn-secondary btn-sm">Live</button>
       </div>
    </div>
    )
}
export default Project;