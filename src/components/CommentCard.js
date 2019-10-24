// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Comment() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios
//             .get('http://bw-vacaplanning.herokuapp.com/comments/')
//             .then((response) => {
//                 // console.log(response);
//                 setPeopleData(response);

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

// const CommentCard = (props) => {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <p>{props.comment}</p>
//         </div>
//     );
// };

// export default CommentCard;