import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";

export default function ReactHookForm() {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">React Hook Form</h1>
                </div>
            </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Email</label>
                    <input
                    type="text"
                    name='email'
                    placeholder='Enter email'
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    ref={register({
                        required: "this must be a valid email",
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    />
                    <ErrorMessage className="invalid-feedback" name="email" as="div" errors={errors} />
                    <button className='btn btn-primary btn-block' type='submit'>
                        Submit
                     </button>
                </form>
        </div>
    )
            }