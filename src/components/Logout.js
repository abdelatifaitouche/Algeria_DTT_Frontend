import React, { useEffect } from 'react';
import axios from 'axios';

export const Logout = () => {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        (async () => {
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const accessToken = localStorage.getItem('access_token');
                const csrfToken = getCookie('csrftoken')

                if (!refreshToken || !accessToken) {
                    console.error('Refresh token or access token not found in local storage.');
                    return;
                }

                const { data } = await axios.post(
                    'http://127.0.0.1:8000/logout/',
                    {
                        refresh_token: refreshToken
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`,
                            'X-CSRFToken': csrfToken 
                        },
                        withCredentials: true
                    }
                );

                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login';
            } catch (e) {
                console.error('Logout not working', e.response ? e.response.data : e.message);
            }
        })();
    }, []);

    return (
        <div></div>
    );
}
