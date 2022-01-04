import { CardContent, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import image1 from './image1.jpg';
import './Api.css';

function Apidata() {

    const [data, setData] = useState([]);


    const getData = async () => {

        let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("result", response.data);
        setData(response.data);

    };
    useEffect(() => {
        getData();
    }, [data]);

    return (
        <div>

            {
                data &&
                data.length > 0 && data.map((item) => {
                    return (<div>
                        <div class="box">
                            <div class="box1">
                                <img class="eimg" src={image1} width={50} height={50}></img>
                            </div>
                            <div class="box2">
                                <div class="evetitle">{item.title}</div>
                                <div class="evedesc">{item.body}</div>

                            </div>
                        </div>
                    </div>
                    )
                }
                )}

        </div>
    );
}

export default Apidata;
