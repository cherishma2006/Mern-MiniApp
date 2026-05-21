import { Schema, model,} from "mongoose";


const EmployeeSchema = new Schema(
   {
    Name:{
    type:String,
    required:true,
   },
   email:{
        type:String,
        required:[true,"Email required"],
    },
    mobile:{
        type:Number,
        required:[true,"mobile number required"],
    },
    designation:{
        type:String,
        required:[true,"Designation required"],
    },
    companyName:{
        type:String,
        required:[true,"companyName required"],
    },

},
  {
    versionKey: false,
    timestamps: true,
    strict: "throw",
  },
)

//create article model
export const EmployeeModel = model("Employee", EmployeeSchema);

