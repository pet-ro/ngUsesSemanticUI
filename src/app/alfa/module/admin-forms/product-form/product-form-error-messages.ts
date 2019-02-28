import { ErrorMessage} from '../error-message';

export const ProductFormErrorMessages : ErrorMessage[] = [
    new ErrorMessage('id', 
       'required', 
       'Ein `id` muss angegeben werden. Backend nutzt id als `key`. '),
    new ErrorMessage('id', 
        'minlength',
       'Die `id` muss eine Länge von 5 Zeichen haben'),
    new ErrorMessage('id', 
       'maxlength',
       'Die `id` darf eine Länge von 12 Zeichen nicht überschreiten.'),
         
    new ErrorMessage('title', 'required', 'Ein Titel muss angegeben werden'),
    new ErrorMessage('shortDescriptions', 'required', 'Mindestens ein Kurzbeschreibung ist nötig.'),
    new ErrorMessage('inStock', 
          'pattern', 
          'Es sind nur Zahlen erlaubt.'),
    // no validation for 'inStock'
    // no validation for 'featured'
    new ErrorMessage('descriptions', 'required', 'Mindestens ein Bschreibung ist nötig.'),
    new ErrorMessage('priceInEuro', 'required', 'Ein Preis muss angegeben werden'),
];

      