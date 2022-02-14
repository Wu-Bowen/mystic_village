import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type Form = {
    firstName: string;
    lastName?: string;
    emailAddress?: string;
    phoneNumber?: string;
    message: string;
};

export const CustomForm = (): JSX.Element => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');
    return (
        <form>
            <input {...register('firstName')} placeholder="First name" />
            <input {...register('lastName')} placeholder="Last Name" />
            <input {...register('emailAddress')} placeholder="Email Address" />
            <input {...register('phoneNumber')} placeholder="Phone Number" />
            <textarea {...register('message')} placeholder="Message" />
            <p>{data}</p>
            <input type="submit" value="send message" />
        </form>
    );
};
