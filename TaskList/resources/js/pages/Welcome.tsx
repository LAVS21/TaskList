// resources/js/Pages/Welcome.tsx
import React from 'react';
import LoginForm from './LoginForm';


const Welcome: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <LoginForm />
        </div>
    );
};

export default Welcome;
