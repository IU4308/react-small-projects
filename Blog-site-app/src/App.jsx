import Layout from './Layout.jsx';
import Home from './Home.jsx';
import NewPost from './NewPost.jsx';
import PostPage from './PostPage.jsx';
import About from './About.jsx';
import Missing from './Missing.jsx';
import EditPost from './EditPost.jsx';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext.jsx';

function App() {

  return (
    <div className='App'>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />}/>
            <Route path='post'>
              <Route index element={<NewPost/>}/>
              <Route path=':id' element={<PostPage />}/>
            </Route>
            <Route path='edit/:id' element={<EditPost />} />
            <Route path='about' element={<About />}/>
            <Route path='*' element={<Missing />}/>
          </Route>

        </Routes>
      </DataProvider>
    </div>

  );
}

export default App
