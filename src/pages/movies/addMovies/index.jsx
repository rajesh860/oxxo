

import LayoutContent from "../../../common/layoutContent"
import ImportMoviesFilter from "../../../component/importMoviesFilter"
import "./styles.scss"

const AddMovies = () => {
    return (
        <LayoutContent title="Videos Add">
            <div className="add-movies-container">
                <div className="import-movies-header">
                    <ImportMoviesFilter />
                </div>
            </div>
        </LayoutContent>
    )
}

export default AddMovies