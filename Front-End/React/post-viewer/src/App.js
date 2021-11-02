import './App.css';
import Counter from './components/Counter/Counter.js'
import PostList from './components/PostList/PostList';

const postData = [
  { title: "First Content", description: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
  { title: "Second Content", description: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
  { title: "Third Content", description: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
  { title: "Forth Content", description: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
  { title: null, description: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
  { title: "Sixth", description: null },
]

function App() {
  return (
    <div className="App">
      <Counter />

      <PostList data={postData} />

    </div>
  );
}

export default App;
