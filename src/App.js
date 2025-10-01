import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import DataTable from './components/DataTable';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-semibold text-uppercase">
            Live Position
          </Navbar.Brand>
        </Container>
      </Navbar>

      <main className="flex-fill d-flex align-items-center justify-content-center py-4">
        <Container>
          <DataTable />
        </Container>
      </main>
    </div>
  );
};

export default App;
