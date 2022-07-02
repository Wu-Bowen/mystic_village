import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    firstName: string;
    lastName?: string;
    emailAddress?: string;
    phoneNumber?: string;
    message: string;
};

export const CustomForm = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: FormData) => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formBunch">
                <input
                    {...register('firstName')}
                    placeholder="First name"
                    required={true}
                />
                <input
                    {...register('lastName')}
                    placeholder="Last Name"
                    required={true}
                />
            </div>
            <div className="formBunch">
                <input
                    type="email"
                    placeholder="Email"
                    {...register('Email', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
                <input
                    type="tel"
                    placeholder="Mobile number"
                    {...register('Mobile number', {
                        required: true,
                        pattern: {
                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: 'Please Enter a Valid phone number',
                        },
                    })}
                />
            </div>
            <textarea
                {...register('message')}
                placeholder="Message"
                className="message"
                required={true}
            />
            <input type="submit" value="send message" />
        </form>
    );
};
