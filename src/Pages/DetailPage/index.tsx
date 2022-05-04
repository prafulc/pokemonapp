import React from "react";
import { useParams } from "react-router-dom";


const DetailPage = (): JSX.Element => {
    let { id } = useParams();
  return <div>Detail Page: {id}</div>;
};

export default DetailPage;
