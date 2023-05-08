

import { Button, Form, Input, Space } from 'antd';

import "./styles.scss"

const ImportMoviesFilter = () => {


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="import-movies-header">
            <div className="movie-filter">
                <h3 className='heading'>IMPORT MOVIES/VIDEOS FROM TMDB</h3>
                <Form onFinish={onFinish}>
                    <Space.Compact
                        style={{
                            width: '100%',
                            height: "33px"
                        }}
                    >
                        <Form.Item
                            name="movieId"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter TMDB ID. Ex: 141052"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">FETCH</Button>
                        </Form.Item>
                    </Space.Compact>

                    <small className="desc">
                        <a href="">Tutorial | </a>  Get TMDb ID from here: <a href="">TheMovieDB.org.</a>
                    </small>
                </Form>
            </div>



        </div >
    )
}

export default ImportMoviesFilter