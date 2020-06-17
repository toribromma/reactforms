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
            <input
                name='email'
                placeholder='Enter email'
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                ref={register({
                    required: 'Email is required',
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address format',
                    },
                })}
                />
                <ErrorMessage className="invalid-feedback" name="email" as="div" errors={errors} />
                <form onSubmit={handleSubmit(onSubmit)}/>
        </div>
    )
            }