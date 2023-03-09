console.log("Welcome to Javascript Address Book Problem ")
class Contact{
    constructor(...params){
        this.firstname=params[0];
        this.lastname=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phonenumber=params[6];
        this.email=params[7];
    }
    get firstname(){return this._firstname;}
    set firstname(firstname){
        let fnRegex=RegExp("^[A-Z]{1}[a-z]{2,}");
        if(fnRegex.test(firstname)){
            this._firstname=firstname;
        }else{
            throw 'Invalid firstname';
        }
    }

    get lastname(){return this._lastname;}
    set lastname(lastname){
        let lnRegex=RegExp("^[A-Z]{1}[a-z]{2,}");
        if(lnRegex.test(lastname)){
            this._lastname=lastname;
        }else{
            throw 'Invalid lastname';
        }
    }
    
    get address(){return this._address;}
    set address(address){
        let addRegex=RegExp("^[A-Z0-9a-z]{4,}$");
        if(addRegex.test(address)){
            this._address=address;
        }
        else{
            throw 'Invalid address';
        }
    }

    get city(){return this._city;}
    set city(city){
        let cityRegex=RegExp("^[A-Za-z]{4,}$");
        if(cityRegex.test(city)){
            this._city=city;
        }else{
            throw 'Invalid city';
        }
    }

    get state(){return this._state;}
    set state(state){
        let stateRegex=RegExp("^[A-Za-z]{2,}$");
        if(stateRegex.test(state)){
            this._state=state;
        }else{
            throw 'Invalid state';
        }
    }

    get zip(){return this._zip;}
    set zip(zip){
        let zipRegex=RegExp("^[1-9]{1}[0-9]{5}$");
        if(zipRegex.test(zip)){
            this._zip=zip;
        }
        else{
            throw 'Invalid zip';
        }
    }
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber){
        let numberRegex=RegExp("^[0-9]{2}\\s[6-9]{1}[0-9]{9}$");
        if(numberRegex.test(phoneNumber)){
            this._phoneNumber=phoneNumber;
        }
        else{
            throw 'Invalid phonenumber';
        }
    }

    get email(){return this._email;}
    set email(email){
        let numberRegex=RegExp("^[a-zA-Z0-9+-]+(?:\\.[a-zA-Z0-9-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$");
        if(numberRegex.test(email)){
            this._email=email;
        }
        else{
            throw 'Invalid email';
        }
    }
    toString(){
        return "FirstName:"+this.firstname+",Lastname:"+this.lastname+",Address:"+this.address+",City:"
                +this.city+",State:"+this.state+",Zip:"+this.zip+",MobileNumber:"+this.phoneNumber+",Email:"
                +this.email;
    }
}

//UC7 check duplicate entry
let contacts=new Array();
function AddContacts(firstname,lastname,address,city,state,zip,phoneNumber,email){
    if(contacts.some(fname=> fname.firstname == firstname)){
        console.log("Person is already exists");
        return;
    }
    let contact=new Contact(firstname,lastname,address,city,state,zip,phoneNumber,email);
    contacts.push(contact);
}
AddContacts('Piyush','Shaw','15MGRoad','Howrah','WestBengal','444444','91 8888888888','piyush@gmail.com');
AddContacts('Ankita','Singh','10StreetRoad','Kolkata','WestBengal','778666','91 7777777777','ankita@gmail.com');
AddContacts('Ravi','Singh','5MangoRoad','Jamshedpur','Jharkhand','666666','91 9999999999','shubham@gmail.com');
AddContacts('Ravi','Singh','5MangoRoad','Jamshedpur','Jharkhand','666666','91 9999999999','shubham@gmail.com');
console.log(contacts.toString());

//UC4 edit person by their name
function editContactByName(firstname){
    for(let i = 0;i < contacts.length;i++){
        if(contacts[i].firstname ==firstname){
            return i;
        }
    }
    return -1;
}
let contactindex=editContactByName('Ravi');
if(contactindex!=-1){
    console.log("Before Update: ");
    console.log(contacts.toString());
    contacts[contactindex].firstname='Rahul';
    contacts[contactindex].city='Ranchi';
    console.log("After Update: ");
    console.log(contacts.toString());
}else{
    console.log("Name not found");
}

//UC5 delete contact by their name
function deleteContactByName(firstname){
    for(let i =0;i < contacts.length; i++){
        if(contacts[i].firstname == firstname){
            contacts.pop(i);
            console.log(contacts.toString());
        }
    }
}
console.log("Contact Deleted");
deleteContactByName('Rahul');

//UC6 number of persons in address book
let count = contacts.reduce(count => count +=1,0);
console.log("Number Of persons in Address Book is : " +count);

//UC8 search by city or state
function SearchCityOrState(cityOrState){
    if(contacts.filter((p=>p.city==cityOrState)||(p=>p.state==cityOrState))){
        console.log(contacts.toString());
    }
}
//searching with city
console.log("**Search by City:");
SearchCityOrState('Howrah');
//searching with state
console.log("**Search by State:");
SearchCityOrState('WestBengal');

//UC9 View By city
console.log("View By City:");
SearchCityOrState('Howrah');
//View By state
console.log("View By State:");
SearchCityOrState('WestBengal');

//UC10 count person by city or state
function getCountByCity(city) {
    return contacts.filter(x => x.city == city).reduce((countOfContact, x) => countOfContact += 1, 0);
}
function getCountByState(state) {
    return contacts.filter(x => x.state == state).reduce((countOfContact, x) => countOfContact += 1, 0);
}
console.log("Count By City: " + getCountByCity("Howrah"));
console.log("Count By State: " + getCountByState("WestBengal"));