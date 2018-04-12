export class ValidationService {
    
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any, controlName?: string) {
        
        let config = {
            'required': `Please enter ${ValidationService.formatControlName(controlName)}`,
        };

        // Returning the error message
        return config[validatorName];
    }

    // For removing the underscore from name
    static formatControlName(name: string){
        if(name) return name.replace(/_/g, " ");
        else return "input";
    }

}