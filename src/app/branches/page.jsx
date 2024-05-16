'use client';
import React, { useState } from "react";

const BranchesPage = () => {
    const [selectedBranch, setSelectedBranch] = useState('Hyderabad');

    const handleBranchClick = (branch) => {
        setSelectedBranch(branch);
    };

    return (
        <div className="branches-page">
            <h1>Branches</h1>
            <div className="content">
                <div className="sidebar">
                    <ul>
                        <li className={`branch ${selectedBranch === 'Hyderabad' ? 'active' : ''}`} onClick={() => handleBranchClick('Hyderabad')}>Hyderabad</li>
                        <li className={`branch ${selectedBranch === 'Bhimavaram' ? 'active' : ''}`} onClick={() => handleBranchClick('Bhimavaram')}>Bhimavaram</li>
                    </ul>
                </div>
                <div className="branch-details" style={{ backgroundColor: selectedBranch === 'Bhimavaram' ? 'green' : 'blue' }}>
                    {selectedBranch && <h2>{selectedBranch}</h2>}
                </div>
            </div>
        </div>
    );
};

export default BranchesPage;
