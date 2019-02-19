import { FormErrorMessage } from 'src/app/form/template-driven/form-error-message';

//  ErrorMessage
//
//  for template-driven form
//
//  to edit ProductBook objects

export const FormErrorMessages = [
  
    new FormErrorMessage(
           'title',                    // forControl:
           'required',                 // forValidator:
           'a book title is required'  //  text:   
        ),

    new FormErrorMessage(
        'key',                      // forControl:
        'required',                 // forValidator:
        'a book isbn is required'   //  text:   
        ),

    new FormErrorMessage(
        'key',                       // forControl:
        'minlength',                 // forValidator:
        'a book isbn requires 10 digits as minimum'   //  text:   
        ),

    new FormErrorMessage(
        'key',                       // forControl:
        'maxlength',                 // forValidator:
        'a book isbn may not have more than 13 digits.'   //  text:   
        ),

    new FormErrorMessage(
        'published',                     // forControl:
        'required',                      // forValidator:
        'a publishing date is required'  //  text:   
        ),

    new FormErrorMessage(
        'authors',                     // forControl:
        'required',                      // forValidator:
        'a author is required; several authors are separated by a semicolon.'          //  text:   
        ),    
]
