// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Comment() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios
//             .get('http://bw-vacaplanning.herokuapp.com/comments/')
//             .then((response) => {
//                 // console.log(response);
//                 setData(response);

//             })
//             .catch(error => {
//                 console.log("the data was not return", error);
//             });
//     }, []);
//     return (
//         <div >
//             {data.map((comment) =>
//                 <CommentCard data={ments} key={id} />)
//             }
//         </div>
//     );
// }
