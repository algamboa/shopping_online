import 'bootstrap/dist/css/bootstrap.min.css';  
import { Pagination } from 'react-bootstrap';  
function Pagi() {  
  return (  
    <>  
    <div className='container p-2'>  
   <Pagination>  
   <Pagination.First />  
  <Pagination.Prev />  
     <Pagination.Item>1</Pagination.Item>  
     <Pagination.Ellipsis />  
     <Pagination.Item active>2</Pagination.Item>  
     <Pagination.Item>3</Pagination.Item>  
     <Pagination.Item>4</Pagination.Item>  
     <Pagination.Ellipsis />  
     <Pagination.Item>5</Pagination.Item>  
  <Pagination.Next />  
  <Pagination.Last />  
   </Pagination>  
   </div>  
    </>  
  );  
}  
export default Pagi;  