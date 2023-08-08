import React, { useState } from 'react';
import Navigation from './Navigation';
import ContainerExample from './Main';
import Signup from './Signup';
import Expense from './Addexpense';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Main');

    const renderPage = () => {
        if (currentPage === 'Main') {
            return (
                <ContainerExample />
            );
        }
        if (currentPage === 'Signup') {
            return (
                <Signup />
            );
        }
        if (currentPage === 'Expense') {
            return (
                <Signup />
            );
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}