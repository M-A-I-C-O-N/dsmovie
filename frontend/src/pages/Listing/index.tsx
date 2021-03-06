import MovieCard from "components/MovieCard";
import Pagination from "components/Navbar/pagination";

function Listing() {

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                        <MovieCard />
                    </div>    
                    <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                        <MovieCard />
                    </div>
                </div>   
            </div>
        </>    
    );
}

export default Listing;