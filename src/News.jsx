import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import JsonData from './JsonData';
import Divider from '@material-ui/core/Divider';


import './News.css';



const News = () => {
    const handleScroll = ({ target }) => {
        const { scrollTop } = target;
    };

    const [newJson, setNewJson]  = useState();
    useEffect(() => {
        setNewJson(JsonData);
    },[])
   
    return (
        <>
            <h1 className="main_title">Today's News!</h1>
            <div className="row container-fluid">
                {JsonData.map((curElm) => {
                    return (<>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src={curElm['urlToImage']} alt="image" />
                                            <h5 className="card-title ak_title">{curElm['source']['name']} <span></span></h5>
                                            
                                            <p className="ak_subtitle">{curElm['publishedAt']}</p>
                                            <Divider />
                                        </div>
                                        <div className="col-md-7">
                                            <h6 className="card-title">{curElm['title']}<span></span></h6>
                                            <Scrollbars autoHeight={true}
                                                autoHeightMax={300}
                                                onScroll={handleScroll} >
                                                <p className="card-text ak_subdec">{curElm['description']}</p>
                                            </Scrollbars>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </div>
        </>
    )
}
export default News;
