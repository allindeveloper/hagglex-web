import { isValidUrl } from "./globalUtils";



export const getErrorMsg = (error:any, name:string,label:string, controller:any = null) => {
    let a = 'a';
    if (typeof controller === 'string' && ['a', 'e', 'i', 'o', 'u'].indexOf(controller[0].toLowerCase()) !== -1) {
        a = 'an';
    }

    if (name === 'contactName') {
        name = 'contact name'
    }
    if (controller === 'user') {
        a = 'a';

    }

    if (controller === 'user' && name === 'firstName') {
        name = 'first name'

    }
    if (controller === 'user' && name === 'lastName') {
        name = 'last name'

    }
    if (controller === 'user' && name === 'phone') {
        name = 'phonenumber'

    }
    if (error === 'required') {
        //return `Please provide ${a} ${controller} ${name}`;
        return `This field is required`;
    }
    if( error === 'specialcha'){
        return  `Must not contain Special Character(s)`
    }

    if(error === 'password-validate'){
        return `minimum (8) eight characters, at least one uppercase letter, one number and one special character is required`
    }

    if( error === 'url'){
        return  `Must contain a valid url `
    }

    if (error === 'number') {
        return `Please provide a valid number `;
    }

    if (error === 'comma') {
        return `Please include a comma `;
    }
    let num = parseInt(error.split(":")[1])
    if (error.includes('min')) {

        // debugger
        const len = num;
        return `The minimum length for ${label} is ${len} `;
    }


    // if (error.substr(0, 50) === 'max') {
    //     const len = error.substr(51);
    //     return `The maximum length for the ${controller} ${label} is ${len}`;
    // }
    let num2 = parseInt(error.split(":")[1])
    if (error.includes('max')) {
        const len = num2;
        // return `The maximum length for the ${controller} ${label} is ${len}`;
        return `The maximum length for ${label} is ${len} `;
    }

    // if (error.substr(0, 51) === 'min') {
    //     const len = error.substr(51);
    //     return `The minimum length for the ${controller} ${name} is ${len}`;
    // }

    if (error === 'string') {
        return `Enter a correct ${label} `;
    }

     if( error === 'allstring'){
         return `Enter a correct ${label}`;
    }

    if (error === 'email') {
        return `Please provide a valid email address `;

    }

    if (error === 'phoneNo') {
        return `Please provide a valid phonenumber `;
    }

    if (error === 'match') {
        return `confirm password does not match password `;
    }
}


// Default Rules for common fields
// any array that has a 'number' means that it is from a dropdown UI :)
export const validationRules:any = {
    
    email: ['required','email'],
    password: ['required','min:8','password-validate'],
    username: ['required','specialcha','string','min:3'],
    phonenumber:['required','number'],
   
}


export const getFieldRUles = (field:any) => {
    // get Default Rules for common fields
    const rules = validationRules[field] || [];
    return rules.length > 0 ? rules : [];
}


export const validate = (rule:any, value:any, fields:any = null) => {
    let error = null;
    if (rule === "required") {
        if (value === '' || value === ' ') {
            return rule;
        }else if (value === null || value === undefined){
            return rule;
        }else if (value === false){
            return rule;
        }
        return error;
    }
    if(rule.includes("min")){
        let num = parseInt(rule.split(":")[1])
        // debugger
        if(value.length <num){
            return rule
        }
        // else if(value.length <5){
        //     return rule
        // }

        return error
    }
    if(rule.includes("max")){
        let num2 = parseInt(rule.split(":")[1])
        // debugger
        if(value.length > num2){
            return rule
        }
        // else if(value.length <5){
        //     return rule
        // }

        return error
    }
    // if(rule.includes("min")){
    //     if(value.length <5){
    //         return rule
    //     }
    //     return error
    // }
    // if(rule.includes("max")){
    //     if(value.length > 150){
    //         return rule
    //     }
    //     return error
    // }

    if (rule.substr(0, 50) === 'max') {
        const len = rule.substr(51);
        return value.length > len ? rule : error;
    }

    if (rule.substr(0, 50) === 'min') {
        const len = rule.substr(51);
        return value.length < len ? rule : error;
    }

    if (rule === 'string') {

        return /^[-/+]?[+0-9]+$/.test(value) === true ? rule : error;
    }
    if(rule === 'url'){

        return !isValidUrl(value) === true ? rule : error;
    }

     if( rule  === 'allstring'){
        // only letters
        return !/^[a-zA-Z\s]*$/.test(value) === true ? rule : error;
    }
    if (rule === 'specialcha'){
        // rul for special character, but also allow space
        var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        return  format.test(value) === true ? rule : error;

    }
    if (rule === 'email') {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let test = re.test(value);
        if (!test) {
            return rule;
        }
        return error;
    }
    if(rule === 'password-validate'){
        // let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/
        let re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+,.\\\/;':"-]).{8,}$/
        let test = re.test(value)
        if(!test){
            return rule
        }

    }
    if (rule === 'phoneNo') {
        var phoneno = /^\d{11}$/;
        if (!value.match(phoneno) && value.trim() !== '') {
            return rule;
        }
        return error;
    }
    if (rule === 'match') {
        //console.log("fields in match", fields)
        // this would validate other confirm password fields
        if(fields.name === "confirmPassword"){
        if (value !== fields.password) {
            return rule;
        }
        return error;
    }else{
        // this would validate setup account confirm password field
        if (value !== fields.rpassword) {
            return rule;
        }
        return error;
    }
    }

    if (rule === 'number') {
        let reg = /^\d+$/;
        let testr = reg.test(value);
        if (!testr && value.trim() !== '') {
            return rule;
        }
        return error;
    }

    if (rule === 'comma') {
        let reg = ',';
        let testr = value.indexOf(reg) !== -1;
        if (!testr && value.trim() !== '') {
            return rule;
        }
        return error;
    }



    return error;

}

export const validatorAll = (fields:any, controller:any, obj:any, err:any, updateErrorRef:any) => {
    const fieldType = typeof fields;
    const res:any = {};
    if (typeof fields !== "object") {
        throw (`wrong type passed to validator as first parameter. Expected Array but got ${fieldType}`);
        return;
    }

    fields.forEach((field:any) => {
        const { name, value, label } = field;
        const errors:any = [];
        const rules = getFieldRUles(name) || [];
        if (rules.length < 1) {
            return;
        }
        if (rules.indexOf('required') !== -1) {
            let error = validate('required', value);
            if (error !== null) {
                let errorMsg = getErrorMsg('required', name,label, controller);
                res[name] = errorMsg;
                // obj({ err: {...obj.state.err, ...res, all: obj.state.err.all.add(name) } });
                 obj((prevState:any) => ({
                    ...prevState, ...res, all: prevState.all.add(name)
                  }));
                return res;
            }

        }
        rules.forEach((rule:any) => {
            const error = validate(rule, value, field);
            if (error !== null) {
                let errorMsg = getErrorMsg(error, name,label, controller);
                errors.push(errorMsg);
                return;
            }
            return;

        });
        if (errors.length > 0) {
            res[name] = errors;
            // obj.setState({ err: {...obj.state.err, ...res, all: obj.state.err.all.add(name) } });
             obj((prevState:any) => ({
                ...prevState, ...res, all: prevState.all.add(name)
              }));
        }


        // obj.setState({ err: {...obj.state.err, ...res } });
          obj((prevState:any) => ({
            ...prevState, ...res
          }));

          updateErrorRef.current = res

        return;

    });

    return;
}



export const validator = (field:any, controller:any, obj:any, err:any) => {

    const res :any = {};

    const { name, value,label } = field;

    const errors:any = [];

    const rules = getFieldRUles(name) || [];

    // return early

    if (rules.length < 1) {
        return;
    }
    // handle required condition
    if (rules.indexOf('required') !== -1) {
        let error = validate('required', value);
        if (error !== null) {
            let errorMsg = getErrorMsg('required', name,label, controller);
            res[name] = errorMsg;
            // obj.setState({
            //     err: {...obj.state.err,
            //         ...res,
            //         all: obj.state.err.all.add(name)
            //     }
            // });

             obj((prevState:any) => ({
                ...prevState,
                ...res,
                  all: prevState.all.add(name)
              }));
            return res;
        }
    }

    // validate rest of the fields' constraints
    rules.forEach((rule:any) => {
        const error = validate(rule, value, field);
        if (error !== null) {
            let errorMsg = getErrorMsg(error, name,label, controller);
            res[name] = errorMsg;
            errors.push(errorMsg);
        }
        return;

    });

    if (errors.length > 0) {
        res[name] = errors[0];
    } else {
        res[name] = '';
        // obj.state.err.all.delete(name);
        // obj.setState({ err: {...obj.state.err, ...res } });
        err.all.delete(name);
        obj((prevState:any) => ({
            ...prevState, ...res
          }));
        return;
    }

    // obj.setState({
    //     err: {...obj.state.err,
    //         ...res,
    //         all: obj.state.err.all.add(name)
    //     }
    // });

    obj((prevState:any) => ({
        ...prevState,
        ...res,
        all: prevState.all.add(name)
      }));

    return;
}


