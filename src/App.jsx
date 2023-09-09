
import './App.css'
import Card from './components/Card';


function App() {
  // let title = "my new job";
  // let views = "100k";


  const humans = [
    {
      id: 1,
      name: "John Doe",
      jobDescription: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      jobDescription: "Graphic Designer",
    },
    {
      id: 3,
      name: "Michael Johnson",
      jobDescription: "Marketing Manager",
    },
    {
      id: 4,
      name: "Emily Davis",
      jobDescription: "Data Analyst",
    },
    {
      id: 5,
      name: "William Brown",
      jobDescription: "Product Manager",
    },
  ];

  // console.log(humans);


  return (
    <>
      <h2 className='lg:text-3xl my-8 md:text-2xl font-bold'><span className='bg-blue-500 p-3 text-white rounded'>Well come react</span></h2>
      <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-1'>
        {
          humans.map(item => <Card item={item}></Card>)
        }
      </div>
    </>
  )
}

export default App;
