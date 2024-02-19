import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import {  teamData, contactData } from "@/data";
import axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestSuggestions } from "../Redux/actions";
import featuresData from "@/data/features-data";


// const Home = (props) => {
function Home(props) {
  const [data, setData] = useState([])
  
  // console.log(data);
  const [post, setPost] = useState([])
   

  //  const array = []
  // //  console.log(array);
  // // console.log(`${import.meta.env.VITE_REACT_APP_API_ROOT}`);
  // useEffect(() => {
  //   props.requestSuggestions();

    
  //   // axios
  //   //   .get("http://localhost:80/server/wp-json/wp/v2/event ")
  //   //   .then((response) => {
  //   //     setPost(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching data:", error);
  //   //   });
  // }, [])
  // console.log(post);

  //  {

  //   data && data.map(( post , index) =>{
  // if (post.id === 76 ||  post.id === 78 || post.id === 80  || post.id === 15 || post.id === 21 ){
  //   // console.log(post);
  //   array.push(post);
  // }
//   if(post.id === 21){
//     // console.log(post);
//     array.push(post)
//   }
//   if(post.id === 33){
//     // console.log(post);
// array.push(post)
//   }
  //   }
  //   )
  //  }
  useEffect(() => {
    let suggestionsJobData = props.candidate.suggestionsJobData;
    console.log(suggestionsJobData);
    if (suggestionsJobData !== undefined) {
      setData(suggestionsJobData.data)
      // if (suggestionsJobData?.data?.status === "success") {
      //   setUser(loginData.data.data);
      //   props.requestGetComment();
      // }
    }
  }, [props.candidate.suggestionsJobData]);

  return (
    <>

      <>
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <div className="absolute top-0 h-full w-full bg-[url('/img/2.png')] bg-cover bg-center" />
         
          {/* <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" /> */}
          <div className="absolute top-0 h-full w-full bg-grey/60 bg-cover bg-center" />
         
          <div className="max-w-8xl container relative mx-auto">
          
            <div className="flex flex-wrap items-center">
          
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 ">
              
                {/* <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your story starts with us.
                <p>
              </Typography> */}
                {/* <Typography variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </Typography> */}
                    <p style={{textAlign:"center ",  color:"#8B0000" , fontSize:"50px" ,paddingTop:"30px", paddingLeft:"50px"}}><b>“Serving the humanity is equivalent to serving God” </b></p>

              </div>
            </div>
          </div>
        </div>
        <section className="-mt-32 bg-white px-4 pb-20 pt-4">
          <div className="container mx-auto ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 "  >

              {featuresData.map(({ color, title, icon ,description,href}) => (
               
                <FeatureCard
                  key={title}
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                    // style :"box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"
                  
                  })}
                  description={description}
                  className="feature-card-with-shadow"
                  href={href}
                />
              ))}


                     {/* {array.map((post,index) => (
                <FeatureCard
                  // key={title}
                  // color={orange}
                  title={post.title.rendered}
                  // icon={React.createElement(icon, {
                  //   className: "w-5 h-5 text-white",
                    // style :"  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"
                  // style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                  // style={{ boxShadow: '0 4px 8px rgba(255, 165, 0, 0.8)' }}
                  description={ <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>}
                  // className="feature-card-with-shadow"
                  // style={{ backgroundColor: 'Orange' }}
                  style={{ backgroundColor: 'Orange' }}
                />
              ))} */}
            </div>
            <div className="mt-32 flex flex-wrap items-center">
              <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div> */}

                {/* {index === 0 ? ( */}

                {


                  data && data.map((post, index) => {
                    if (post.id === 15) {

                      return (
                        <>
                          <Typography
                            variant="h3"
                            className="mb-3 font-bold"
                            color="blue-gray"
                            // style={{borderRadius:"25px"}}
                          >
                            
                           
                            {/* Working with us is a pleasure */}
                          </Typography>
                          <Typography className="mb-8 font-normal text-black-500 "  style={{backgroundColor:"#f7b538", padding:"30px",borderRadius:"50px"}}>
                          {post.title.rendered}
                            {post.content.rendered}
                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                            {/* Don't let your uses guess by attaching tooltips and popoves to
any element. Just make sure you enable them first via
JavaScript.
<br />
<br />
The kit comes with three pre-built pages to help you get started
faster. You can change the text and images and you're good to
go. Just make sure you enable them first via JavaScript. */}
                          </Typography>
                        </>
                      )
                    }
                  })
                }

                {/* ) : null} */}



                {/* <Button variant="filled">read more</Button> */}

              </div>

              <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                {


                  data && data.map((post, index) => {
                    if (post.id === 33) {

                      return (
                        <>
                          <Card >
                          {/* style={{borderRadius:"50px"}} */}
                            {/* {post.title.rendered} */}
                            {/* <CardHeader floated={false} className="relative h-56">
                    <img
                      alt="Card Image"
                      src="/img/teamwork.png"
                      className="h-full w-full"
                    />
                  </CardHeader> */}
                            {/* <CardBody> */}
                            {/* <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-3 mt-2 font-bold"
                    >
                      Top Notch Services
                    </Typography> */}
                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                            {/* <Typography className="font-normal text-blue-gray-500">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </Typography> */}
                            {/* </CardBody> */}
                          </Card>
                        </>

                      )
                    }
                  })
                }
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 pt-4 pb-48">


         



           
    
    {/* {post.title.rendered} */}
            <PageTitle  >
            {


data && data.map((post,index)=>{
  if(post.id === 57)
  
  
  {

    return(
    <>
 <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
</>
    )
  }
})
              } 

              {/* • The Mission if For welfare of Vanavasi /Tribes of
              Wayanad.<br />
              • The journey started in 1972 with a small dispensary
              at Muttil, Wayanad<br />
              • Activities on Five fold aspects of Tribes :<br />
              • शिक्षण<br />
              • स्वास्थ्य    <br />
              • संस्कार       <br />
              • स्वावलंबन   <br />
              • सामाजिक */}
            </PageTitle>
           




            <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4" style={{paddingBottom:"20px"}}>
              {teamData.map(({ img, name, position, socials }) => (
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  // position={position}
                 
                  // socials={
                  //   <div className="flex items-center gap-2">
                  //     {socials.map(({ color, name }) => (
                  //       <IconButton key={name} color={color} variant="text">
                  //         <i className={`fa-brands text-xl fa-${name}`} />
                  //       </IconButton>
                  //     ))}
                  //   </div>
                  // }
                />
              ))}
            </div>


        
        </section>
        <section className="relative bg-whit ">
          <div className="container mx-auto mt-70 " >
          <PageTitle className="mt-24" >
            {


              data && data.map((post, index) => {
                if (post.id === 30) {

                  return (
                    <>
                      {/* {post.title.rendered} */}
                     
              {/* Put the potentially record low maximum sea ice extent tihs year down
              to low ice. According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos.
            */}
                      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                    </>
                  )
                }
              })
            }
             </PageTitle>
             <br/>
             <br/>
             <p  className="py-10" style={{textAlign:"center" , fontSize:"25px", textDecoration: 'underline' }}><b>OVERCOMING COVID-19 CHALLENGE </b></p>
            <div className="mx-auto mt-5  grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              
              {contactData.map(({ title, icon, description }) => (
                <Card
                  key={title}
                  style={{ backgroundColor: "#f7b538" , width: "300px", height: "300px" , padding:"10px" }}
                  shadow={false}
                  className="text-center text-blue-gray-900"
                >
                  {/* <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                    {React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div> */}
                  <Typography variant="h5" color="blue-gray" className="mb-3"  style={{ textDecoration: 'underline' }}>
                    {title}
                  </Typography>
                  <Typography className="font-normal text-black-500" style={{ textAlign: 'justify' }} >
                    {description}
                  </Typography>
                </Card>
              ))}
            </div>


            {/* <PageTitle section="Contact Us" heading="Want to work with us?">
              Complete this form and we will get back to you in 24 hours.
            </PageTitle> */}

            <form className="mx-auto  w-full pt-10 lg:w-5/12" >
              {/* <div className="mb-8 flex gap-8"> */}
              {


                data && data.map((post, index) => {
                  if (post.id === 65) {

                    return (
                      <>
                        <p  className="py-10" style={{textAlign:"center" , fontSize:"25px", textDecoration: 'underline' }}><b>Efforts of SVMM</b></p>
                        <div className="mb-4 flex gap-8" style={{backgroundColor:"#f7b538" , padding:"15px"}}>
                          {/* {post.title.rendered} */}

                          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                          {/* <Input variant="outlined" size="lg" label="Full Name" />
                <Input variant="outlined" size="lg" label="Email Address" /> */}
                        </div>
                      </>
                    )
                  }
                })
              }
              {/* </div> */}
              {/* <Textarea variant="outlined" size="lg" label="Message" rows={8} />
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button variant="gradient" size="lg" className="mt-8" fullWidth>
                Send Message
              </Button> */}




            </form>
          </div>
        </section>
        <div className="bg-white">
          <Footer />
        </div>

      </>



    </>
  );
}

// export default Home;
const mapStateToProps = (state) => {
  return {
    candidate: state.candidate,
    employee: state.employee,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestSuggestions

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
