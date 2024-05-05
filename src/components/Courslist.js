import React, { useState } from 'react';
import '../App.css';
import { Container, FormLabel, Input, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { courseDetails } from '../data.js';
import { useNavigate } from 'react-router-dom';

function CourseList() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

  return (
    <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 className='head'>Course List</h1>
                <Button variant="contained" sx={{
                  backgroundColor:'black',
                  width:'300px',
                }}  onClick={() => {
            navigate('/logIn')
          }} >
                    Student DashBoard
                </Button>
            </div>
        <FormLabel>
          <Input className='search' placeholder='Search Course'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormLabel>
        <Table>
          <TableHead>
            <TableRow>
             <TableCell><strong>Course Name</strong></TableCell>
              <TableCell><strong>Instructor</strong></TableCell>
              <TableCell ><strong>Course Model</strong></TableCell>
              <TableCell ><strong>Enroll</strong></TableCell>
              <TableCell ><strong></strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseDetails
              .filter((item) => {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)||
                item.instructor.toLowerCase().includes(search);
              })
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.instructor}</TableCell>
                  <TableCell >
                    <button onClick={() => {
                      navigate(`/model/${item.id}`)
                  }} className='model'>Details</button>
                  </TableCell>
                  <TableCell>
                      <input type="checkbox" id={`enrollCheckbox_${item.id}`} />
                  </TableCell>
                  <TableCell>
                      <button onClick={''} className='submit-but'>Submit</button>
                  </TableCell>
              </TableRow>

             ))}
          </TableBody>
        </Table>
      </Container>
    
  )
}

export default CourseList
