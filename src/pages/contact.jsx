import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
   export function Contact() {
    return (
       <Card color="transparent" shadow={false} className="w-full max-w-[30rem] mx-auto" style={{textAlign:"center"}}>
        <Typography variant="h4" color="white">
          .
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
         .
        </Typography>
        <form className="mt-40 mb-2   w-80 max-w-screen-lg sm:w-96"  >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Full Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
               Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
             Subject
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Message
            </Typography>
            <Input
              type="password"
              size="lg"
             style={
                {
                    height:"100px", width:"400px"
                }
             }
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none ",
              }}
            />
          </div>
          <div className="mt-20">
          <button class="bg-indigo-500 hover:bg-blue-900 text-white  py-2 px-7 rounded "  style={{borderRadius:"20px" , fontSize:"25px" , boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
Submit 
</button>
          </div>
          {/* <Checkbox className="mt-20"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center  font-normal  mt-20"
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
          /> */}
          {/* <Button className="mt-6" fullWidth>
            sign up
          </Button> */}
          {/* <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography> */}
        </form>
      </Card>
    );
  }
  export default Contact;