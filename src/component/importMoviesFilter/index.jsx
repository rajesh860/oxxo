import Search from 'antd/es/transfer/search'

import "./styles.scss"
const ImportMoviesFilter = () => {

    const onSearch = (value) => console.log(value);
    return (
        <div className="import-movies-header">
            <div className="movie-filter">
                <h3 className='heading'>IMPORT MOVIES/VIDEOS FROM TMDB</h3>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </div>

        </div>
    )
}

export default ImportMoviesFilter