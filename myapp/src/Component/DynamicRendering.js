import React,{useState} from 'react'

const isLoggedIn=true;

export default function DynamicRendering()
{
    if(isLoggedIn)
    {
        return<p>Welcome back!</p>;
    }
    else{
        return <p>Please log in.</p>;
    }
}