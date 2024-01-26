import Layout from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import BaseUrl from "../../utils/base_url";
import React, { useState,useEffect} from "react";
import { FiTrash2 } from "react-icons/fi";
// import { viewfiles } from "../../actions/filename";
// import "react-datepicker/dist/react-datepicker.css";
import { getYearMonthDay,deleteFile} from "../../actions/filename";

let initialValue = [
  {id: "", name: ""},
]
let index;

const Image = () =>{
      // dispatch
      const dispatch = useDispatch();
      // hooks
      // const files = useSelector((state) => state.files);
      const files = useSelector((state) => state.files);
      // const dateFetchedData = useSelector((dateState) => dateState.files);
        const [selectedValue, setSelected] = useState("");
        const [selectedValue2, setSelected1] = useState("");
        const [selectedDate, setselectedDate] = useState(null);
        const [scheduledSearches, setScheduledSearches] = useState(initialValue);
        const [fileList, setFileList] = useState(initialValue);


        const handleClick = event => {
          setSelected(event.target.value);
        };
        const handleClick2 = event => {
          setSelected1(event.target.value);
        };
        const handleClick3=event=>{
          setselectedDate(event.target.value);
          }

          const someList=()=>{
           setFileList([])
          setScheduledSearches([])
           for(let i=0;i<(files.files?.length);i++){
             // alert(files?.files[i]?.type)
             if(files.files[i]?.type=="application")
             setFileList(list => list.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
             }}
      index=fileList.length

      const allList=()=>{
           setFileList([])
        setScheduledSearches([]);
        for(let i=0;i<(files?.files?.length);i++){
          if(!files){
            alert("No file registered")
            break;
          }
          else{
            if(files?.files[i]?.type=="application")
            setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
          }}}

     //Fetch image uploaded in year 
      const uploadInYear=()=>{
        setScheduledSearches([]);
        setFileList([]);
        // handleClick(e)

        for(let i=0;i<(files?.files?.length);i++){
          if(!selectedValue){
            alert("please select Year")
            break;
          }
          else{
             if(files?.files[i]?.Year==selectedValue && files?.files[i]?.type=="application")
             setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
            
            }}
          }
     //Fetch image uploaded in Month 
      const uploadInMonth=()=>{
        setScheduledSearches([]);
        setFileList([]);

        for(let i=0;i<(files?.files?.length);i++){
          if(!selectedValue){
            alert("please select Year")
            break;
          }
          else if( !selectedValue2){
            alert("please select Month")
            break;
          }
          else {
             if(files?.files[i]?.Year==selectedValue && files?.files[i]?.Month==selectedValue2){
              if(files?.files[i].type=="application")
              setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
             }
            }
          }}
          const getByDate=()=>{
            setScheduledSearches([]);
            setFileList([]);
                for(let i=0;i<(files?.files?.length);i++){
                  if(!selectedDate){
                    alert("please select Day")
                    break;
                  }
                  if(!selectedValue){
                    alert("please select Year")
                    break;
                  }
                  else if( !selectedValue2){
                    alert("please select Month")
                    break;
                  }
                  else {
                     if(files?.files[i]?.Year==selectedValue && files?.files[i]?.Month==selectedValue2 && files?.files[i]?.Day==selectedDate){
                        if(files?.files[i].type=="application")  
                        setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
                        // alert()
                      // else{
                      //   alert("No data upload in the month")
                      //   break;               
                      // //  alert(monthUpload.name)
                      // }
                    }}
                  }}
         const deleteImage=(id)=>{
           const data={
           folder:"files",
           ID:id
               }
          dispatch(deleteFile(data)) 
          //  history.push('/');
          window.location.reload(false);
                     }
            // use effect
            useEffect(() => {
              // dispatch(viewfiles());
              dispatch(getYearMonthDay())
              someList()
            }, []);
   return(
   <>
    <Layout/>
   <div className="flex"> 
    <div style={{	 marginLeft: "80px",marginTop:"60px",height:"40px",fontSize:"18px"}}>
    <button className="bg-slate-100 rounded-md" style={{height:"40px",width:"250px",fontSize:"24px",fontWeight:"bold",backgroundColor:"c4c4c4c4"}}
     onClick={allList}>ሁሉም ዝርዝሮች</button><br /><br />
     <select style={{height:"40px",width:"250px",fontSize:"24px",fontWeight:"bold",backgroundColor:"c4c4c4c4"}}
      value={selectedValue}
       onChange={handleClick}>
                  <option selected value="">አመት ምርጥ</option>
                   <option value={2013}> 2013 ዓ.ም</option>
                   <option value={2014}>2014 ዓ.ም</option>
                   <option value={2015}>2015 ዓ.ም</option>
                   <option value={2016}>2016 ዓ.ም</option>
                   <option value={2017}>2017 ዓ.ም</option>
                   <option value={2018}>2018 ዓ.ም</option>
                   <option value={2019}>2019 ዓ.ም</option>
                   <option value={2020}>2020 ዓ.ም</option>
                   <option value={2021}>2021 ዓ.ም</option>
                   <option value={2022}>2022 ዓ.ም</option>
                   <option value={2023}>2023 ዓ.ም</option>
                   <option value={2024}>2024 ዓ.ም</option>
                </select> 
                <br />
                <button className="bg-slate-100 mt-1 rounded-md"
                 style={{height:"40px",width:"250px",fontWeight:"bold"}} onClick={uploadInYear}>
                 ዝርዝር እይት</button>
                <br />
                <br />
               <select style={{height:"40px",width:"250px",fontSize:"24px",fontWeight:"bold"}}
                onChange={handleClick2}
                value={selectedValue2}
                 >
                   <option selected value="">ወር ምርጥ</option>
                   <option value={9}>መስከረም</option>
                   <option value={10}>ጥቅምት</option>
                   <option value={11}>ህዳር</option>
                   <option value={12}>ታህሳስ</option>
                   <option value={1}>ጥር</option>
                   <option value={2}>ይካቲት</option>
                   <option value={3}>መጋቢት</option>
                   <option value={4}>ሚያዚያ</option>
                   <option value={5}>ግንቦት</option>
                   <option value={6}>ሰኔ</option>
                   <option value={7}>ሀምሌ</option>
                   <option value={8}>ነሀሴ</option>
               </select>
               <br />
            <button className="bg-slate-100 mt-1 rounded-md" 
            style={{height:"40px",width:"250px",fontWeight:"bold"}} 
            onClick={uploadInMonth}>ዝርዝር እይት</button>

           <p className="mt-10 text-lg max-w-sm -ml-14">
              ባንድ ቀን የተጫኑትን ፋይሎች ዝርዝር</p>
           <p className="text-lg max-w-sm -ml-14">
              ለማየት ከፈልጉ ትክክለኛውን አመትና </p>
           <p className="text-lg max-w-sm -ml-14">
             ወር ከመረጡ በሗላ ይሄን "ቀን ምርጥ" </p>
             <p className="text-lg max-w-sm -ml-14">
              የሚለውን ተጭነው ቀኑን ይምረጡ </p>
                <br />
               <select style={{height:"40px",width:"250px",fontSize:"24px",fontWeight:"bold"}}
                onChange={handleClick3}
                value={selectedDate}
                 >
                 <option selected value="">ቀን ምርጥ</option>
                   <option value={1}>01</option>
                   <option value={2}>02</option>
                   <option value={3}>03</option>
                   <option value={4}>04</option>
                   <option value={5}>05</option>
                   <option value={6}>06</option>
                   <option value={7}>07</option>
                   <option value={8}>08</option>
                   <option value={9}>09</option>
                   <option value={10}>10</option>
                   <option value={11}>11</option>
                   <option value={13}>12</option>
                   <option value={14}>13</option>
                   <option value={15}>14</option>
                   <option value={16}>15</option>
                   <option value={17}>16</option>
                   <option value={18}>17</option>
                   <option value={19}>18</option>
                   <option value={20}>19</option>
                   <option value={21}>20</option>
                   <option value={22}>21</option>
                   <option value={23}>22</option>
                   <option value={24}>23</option>
                   <option value={25}>24</option>
                   <option value={26}>25</option>
                   <option value={27}>26</option>
                   <option value={28}>27</option>
                   <option value={29}>28</option>
                   <option value={30}>29</option>
                   <option value={31}>30</option>
                   <option value={32}>31</option>
               </select>
               <br />
               <button className="bg-slate-100 mt-1 rounded-md" 
                       style={{height:"40px",width:"250px",fontWeight:"bold"}} 
                       onClick={getByDate}>ዝርዝር እይት
              </button>     
         </div>
{/* Date partition List  */}
       <br /><br />
       <div className=" lg:ml-16 flex flex-wrap   sm:ml-1  rounded-lg ">   
          {
         (scheduledSearches.length)>1
          ?( 
           scheduledSearches.map((file) => (
        <div className="flex w-1/3 flex-wrap" key={file.id}>
          <div className="w-full p-1 md:p-2">
            <ul>
              <li className="bg-slate-100 rounded-lg"> 
                <button   className="h-4 w-4 text-center float-right rounded mr-0.5 mt-0.5"
                 onClick={()=>deleteImage(file.id)}            
                  ><FiTrash2 />
                </button> 
          <a className=" underline text-sky-700 font-medium ml-2 -mt-6" href={`${BaseUrl}/files/${file.name}`}>
             {file.name}
          </a>
         </li>
        </ul>
       </div>
      </div>
        )))
      :(<div className=" lg:ml-16 flex flex-wrap mt-5  sm:ml-1  rounded-lg ">
        {(
      fileList.slice(index-10,index).map((file) => (
        <div className="flex w-1/3 flex-wrap" key={file.id}>
         <div className="w-full p-1 md:p-2">
           <ul>
            <li className="bg-slate-100 rounded-lg"> 
             {/* <button   className=" bg-red-700 ml-80 h-4 w-4 text-center  rounded"
              onClick={()=>deleteImage(file.id)}            
             ><FiTrash2 /></button>  */}
            <a className=" underline text-sky-700 font-medium ml-2 -mt-6" href={`${BaseUrl}/files/${file.name}`}>
             {file.name}
            </a>
            </li>
           </ul>
          </div>
         </div>
        )))}
      </div>
    )}
   </div> 
  </div> 
  </>
  )}
export default Image;