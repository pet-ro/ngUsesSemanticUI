
// declare interface to write Object Literal Notation typesafe
export interface Product { 
     key: string,
     title: string,
}

// declare class related to the above interface
export var Product: { 
    //  constructor function object.
    new(key: string,
        title: string,  
    ): Product
}
