export default function Search() {
    return (
        <>
            <div className="my-5 claser col-10 mx-auto" 
            style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
                <form className="card card-sm"
                style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}
                >
                    <div className="card-body row no-gutters align-items-center"
                    style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}
                    >
                        <div class="col-auto">
                            <i class="fa fa-search h4 text-body"></i>
                        </div>

                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"
                            style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}
                             />
                        </div>

                        <div class="col-auto">
                            <button class="btn btn-lg btn-danger" type="submit">Search</button>
                        </div>

                    </div>
                </form>
            </div>
            {/* <div class="container-search">
                <input type="text" placeholder="Search..." />
                <div class="search"></div>
            </div> */}
        </>
    )
}