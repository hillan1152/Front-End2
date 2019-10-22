
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";

function UserForm({status}) {
    const [comments, setComment] = useState([])
    useEffect(() => {
        status && setComment(comments => [...comments, status])
      },[status])
    return (
        <div>
            <Form>
            <Field
                    component="textarea"
                    type="text"
                    name="commentary"
                    placeholder="comments"
                    />
                
                <button type="submit">Submit!</button>
            </Form>
            <div className="outCont">
                {comments.map(words => (
                <div className="output">
                    <ul key={words.id}>
                        
                        <li>{words.commentary}</li>
                    </ul>
                </div>
                ))}
            </div>
        </div>
    )
}

const FormikUserForm = withFormik ({
    mapPropsToValues({commentary }){
        return{
            commentary: commentary || ""
        };
    },
   
    handleSubmit(values, {setStatus, resetForm}) { 
        axios.post('https://reqres.in/api/comments', values) 
              .then(response => { 
                  console.log(response)
                  setStatus(response.data); 
                  resetForm()
                }) 
              .catch(err => console.log(err.response));
        }
})(UserForm);
export default FormikUserForm;


