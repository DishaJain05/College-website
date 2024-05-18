'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StudentCard = ({ student }) => {
    return (
        <div className="student-card">
            <h2>{student.name}</h2>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Address: {student.address}</p>
            <p>Date of Birth: {student.dob}</p>
            <p>Course: {student.course}</p>
        </div>
    );
};

const StudentsPage = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/students');
                setStudents(response.data);
            } catch (err) {
                console.error('Error fetching student data:', err);
                setError('Failed to fetch student data');
            }
        };

        fetchStudents();
    }, []);

    if (error) return <p>{error}</p>;
    if (!students.length) return <p>No students found</p>;

    return (
        <div className="student-container">
            <div className="student-grid">
                {students.map(student => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
};

export default StudentsPage;