import React, { useEffect, useState } from 'react';
import axios from "axios";

// statement to get async/await syntax works in babel v7 (no extra plugins are required anymore like babel-polyfill)
import regeneratorRuntime from "regenerator-runtime";

/* AXIOS GET REQUEST CUSTOM HOOK*/

// create api endpoint variable
const apiEndpoint = "https://randomuser.me/api/?results=10";

// async get request
export const useFetchUserData = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(apiEndpoint);
                setData(response.data.results);
            } catch (error) {
                setError('Error while loading please reload page!');
            }
            setIsLoading(false);
        };
        fetchData();
    },[]);
    
    return {
        data,
        error,
        isLoading,
    };
};

