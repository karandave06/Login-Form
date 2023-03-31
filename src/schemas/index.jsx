import * as YUP from 'yup';

export const signUpSchema = YUP.object({
    username:YUP.string().min(3).max(25).required("Plase enter you name"),
    email:YUP.string().email().required("Plase enter you email"),
    password:YUP.string().min(6).required("Plase enter you password"),
    Conformpassword:YUP.string().required().oneOf([YUP.ref("password"),null],"password must be match")

})
