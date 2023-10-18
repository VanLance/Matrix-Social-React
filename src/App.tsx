import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Heading from './components/Heading';
import FormPage from './pages/FormPage';
import MatrixPage from './pages/MatrixPage';
import UserForm from './components/forms/UserForm';
import LoginForm from './components/forms/LoginForm';
import Logout from './components/Logout';
import SocialPage from './pages/SocialPage';
import Users from './components/Users';

function App(): JSX.Element {
  return (
    <Container>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path='/' element={<MatrixPage />}/>
          <Route path='/users' element={<SocialPage><Users /></SocialPage>} />
          <Route path='/register' element={<FormPage>
                                            <UserForm edit={false} />
                                          </FormPage>}/>
          <Route path='/login' element={<FormPage>
                                          <LoginForm />
                                        </FormPage>}/>
          <Route path='/edit' element={<FormPage>
                                        <UserForm edit />
                                      </FormPage>}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
