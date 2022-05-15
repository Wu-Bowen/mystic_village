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
                        minLength: {
                            value: 10,
                            message:
                                'Phone number must be at least 10 digits long',
                        },
                        maxLength: 12,
                        pattern: {
                            value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                            message: 'Please enter a valid Phone Number',
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
