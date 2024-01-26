import Layout from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import BaseUrl from "../../utils/base_url";
import React, { useState,useEffect} from "react";
import Img1 from '../../img/Logo_p.png';
import { useNavigate } from 'react-router-dom';
// import { viewfiles } from "../../actions/filename";
import { FiTrash2 } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import { getYearMonthDay,deleteFile} from "../../actions/filename";
let initialValue = [
  {id: "", name: ""}
]
let index;

const Image = (props) =>{
      // dispatch
      const dispatch = useDispatch();
      // const history = useNavigate()

      // hooks
      // const files = useSelector((state) => state.files);
            
      const files = useSelector((stateDate) => stateDate.files);

      // for(let i=0;i<(files?.files?.length);i++){
      // if(files.files[i]?.type=="image")
      // files.files?.forEach((item) => arrOfSomeFileList.push({id:item.id,name:item.name}));
      // }


      
      // alert(arrOfSomeFileList[0])
      // const dateFetchedData = useSelector((dateState) => dateState.files);

      // console.log("file data :", files);
        const [image, setImage] = useState("");
        const [selectedValue, setSelected] = useState("");
        const [selectedValue2, setSelected1] = useState("");
        const [selectedDate, setselectedDate] = useState(null);
        const [scheduledSearches, setScheduledSearches] = useState(initialValue);
        const [listData, setListData] = useState(initialValue);  

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
        setScheduledSearches([])
        setListData([])
      for(let i=0;i<(files?.files?.length);i++){
        // alert(files?.files[i]?.type)
          if(files.files[i]?.type=="image")
          // files.files?.map((item) => arrOfSomeFileList.push({id:item.id,name:item.name}));
          setListData(list => list.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
      
        }} 
        index =listData.length
      const allList=()=>{
        // handleClick(e)
        setScheduledSearches([])
        setListData([])
        for(let i=0;i<(files?.files?.length);i++){
          if(!files){
            alert("No file registered")
            break;
          }
          else{
            if(files?.files[i]?.type=="image")
              setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
            }}}
     //Fetch image uploaded in year 
      const uploadInYear=()=>{
        setScheduledSearches([])
        setListData([])
        // handleClick(e)
        // console.log("this is incoming Data");
        for(let i=0;i<(files?.files?.length);i++){
          if(!selectedValue){
            alert("please select Year")
            break;
          }
          else{
             if(files?.files[i]?.Year==selectedValue && files?.files[i]?.type=="image")
             setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
              
              console.log("new Data :",scheduledSearches);
            //  else{
            //   alert("No data upload in the year")
            //   break;
            //  }
            }}
          }
     //Fetch image uploaded in Month 
      const uploadInMonth=()=>{
        setScheduledSearches([])
        setListData([])
        // handleClick2(e)
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
              if(files?.files[i].type=="image")
              setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
             }
              // alert()
              // else{
              //   alert("No data upload in the month")
              //   break;               
              // //  alert(monthUpload.name)
              // }
            }
          }}
          const getByDate=()=>{
            setScheduledSearches([])
            setListData([])
          // //  dispatch(getFileDataByDate(selectedDate))
          //       for(let i=0;i<(dateFetchedData.files?.length);i++){
          //     if(!selectedDate){
          //       alert("please select date")
          //       break;
          //     }
          //     else{
          //       setScheduledSearches(scheduledSearches => scheduledSearches.concat(dateFetchedData.files[i]?.name));
          //       }}

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
                        if(files?.files[i].type=="image")  
                        setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.files[i].id,name:files?.files[i]?.name}));
                        // alert()
                      // else{
                      //   alert("No data upload in the month")
                      //   break;               
                      // //  alert(monthUpload.name)
                      // }
                    }}
                  }}
      //Delete File
      const history = useNavigate();

      const handleReload = () => {
         window.location.reload();
        history('/images');
      };

      const handleSaveImage = async (name) => {
        try {
          const videoUrl = `http://localhost:11278/images/${name}`;
          const videoRequest = new Request(videoUrl);
          fetch(videoRequest)
            .then(() => {
              const link = document.createElement('a');
              link.href = videoUrl;
              link.setAttribute('download', 'waterfall.mp4');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            });
        } catch (error) {
          console.error(error);
        }
      };
    
      const deleteImage=(id)=>{
        const data={
          folder:"images",
          ID:id
        }
       dispatch(deleteFile(data));
        handleReload()
             }

      // use effect
      useEffect(() =>{
        dispatch(getYearMonthDay());
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
                 style={{height:"40px",width:"250px",fontWeight:"bold"}} onClick={uploadInYear} type="button">
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

          <p className="mt-12 text-lg max-w-sm -ml-14">
              ባንድ ቀን የተጫኑትን ፎቶዎች ዝርዝር</p>
           <p className="text-lg max-w-sm -ml-14">
              ለማየት ከፈልጉ ትክክለኛውን አመትና </p>
           <p className="text-lg max-w-sm -ml-14">
             ወር ከመረጡ በሗላ ይሄን "ቀን ምርጥ" </p>
             <p className="text-lg max-w-sm -ml-14">
              የሚለውን ተጭነው ቀኑን ይምረጡ </p>
            <br />
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

        {/* <DatePicker
        className="mt-7 bg-slate-500 w-48 rounded-md border-slate-950"
        customStyles={{ dateInput: { borderWidth:2}}}
        selected={selectedDate}
        placeholderText="ቀን ምርጥ"
        onChange={selected=>setselectedDate(selected)}
        dateFormat='yyy-MM-dd'
         />
         <br /> */}

      </div>
{/* Date partition List  */}
       <br /><br />
       <div className=" lg:ml-16 flex flex-wrap md:-m-2  sm:ml-1">   
          {
         (scheduledSearches.length)>0
          ?(
            scheduledSearches.map((file) => (
            <div className="m-5 flex w-80 h-52 flex-wrap bg-slate-300 rounded-lg"key={file.id}>              
         
               {
            <img
            className=" peer w-full h-52 hover:scale-50 transition cursor-pointer duration-700 rounded-lg"
            src={`${BaseUrl}/images/${file.name}`}  
            alt="A house with two children standing in front of it"
            onError={event => {
            event.target.src = "http://localhost:11278/images/image-1689944377003-eplusapp3.png"
            event.onerror = null
           }}/> 
           }
      <div className="hidden peer-hover:flex hover:flex
         w-[400px]
         flex-col bg-white">
          <button  className=" h-4 w-4 text-center -mt-3 bold ml-64 "
               onClick={()=>deleteImage(file.id)}            
               >Delete
               </button> 
              <br />
          <button  className=" h-4 w-4 text-center -mt-3 bold ml-64 "
          onClick={()=>handleSaveImage(file.name)}            
           >download</button> 
     </div>
       </div>
            )))
        :(<div className="  flex flex-wrap md:-m-2  sm:ml-1">   
            {
              listData.slice(index-10,index)?.map((file) => 
              <div class="m-5 flex w-80 h-52 flex-wrap"key={file.id}>

                 {
              <img
              className="peer w-full h-52 hover:scale-50 transition cursor-pointer duration-700 rounded-lg mt-5"
              src={`${BaseUrl}/images/${file.name}`}  
              alt="A house with two children standing in front of it"
              onError={event => {
              event.target.src = "http://localhost:11278/images/image-1689944377003-eplusapp3.png"
              event.onerror = null
             }}
            /> }
       <div class="hidden peer-hover:flex hover:flex
         w-[400px]
         flex-col bg-white">
          <button  className=" h-4 w-4 text-center -mt-3 bold ml-64 "
               onClick={()=>deleteImage(file.id)}            
               >Delete
               </button> 
              <br />
          <button  className=" h-4 w-4 text-center -mt-3 bold ml-64 "
          onClick={()=>handleSaveImage(file.name)}            
           >download</button> 
     </div>
      </div>
             )}
        </div>
     )}
   </div> 
 </div> 
  </>
  )}
export default Image;