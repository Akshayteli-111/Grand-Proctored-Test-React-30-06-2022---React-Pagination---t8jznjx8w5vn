import React ,{useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import {PaginationButtonsList} from "./PaginationButtonsLIst";
import {Post} from "./Post";
const PostList =()=>{
    const [data,setData]= useState(null);
    const [page,setPage]=useState(1);
    
    const lidadData = async ()=>{
        fetchPosts(page,5)
        .then((res)=>res.json())
        .then((jsonData) => {
            setData(jsonData);
        });
    };
    useEffect(() =>
              lisdData();
              }, []);
      useEffect(() =>
                setData(null);
              lisdData();
              }, [page]);

      const clickHandler = (val) => {
          setPage(val);
      };

       return (
        <>
        {data ==null ? (
         <div id="loader" className="loader">
         loading
         </div>
         ):(
        data.map((ele) =>{
            return <Post ele={ele} key={ele.id}/>;
        })
        )}
          <paginationButtonsList page={page} clickHandler={clickHandler}/>
        </>
    );
};

export { PostList };
