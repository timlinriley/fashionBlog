import logo from './logo.svg';
import './App.css';
import BlogPost from './components/BlogPost';
import Head from './components/Head';
import Footer from './components/Footer';
import allPosts from './models/blogposts';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Head title="Sarte's List" subtitle="Better-Dressed People"/>
      <BlogPost title={allPosts[0].title} date={allPosts[0].date} src={allPosts[0].image} content={allPosts[0].content} cont={allPosts[0].more}/>
      <BlogPost title={allPosts[1].title} date={allPosts[1].date} src={allPosts[1].image} content={allPosts[1].content} cont={allPosts[1].more}/>
      <Footer />
    </div>
  );
}
document.body.style = 'font-family:sans-serif;';
export default App;
