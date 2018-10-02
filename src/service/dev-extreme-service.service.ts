import { Injectable, Output, EventEmitter } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from "devextreme/data/odata/store";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'devextreme/data/odata/store';
import CustomStore from 'devextreme/data/custom_store';


export class Customer {
  ID: number;
  CompanyName: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  Phone: string;
  Fax: string;
  Website: string;
  Tasks: any;
}

let customers: Customer[] = [
  {
  "ID": 1,
  "CompanyName": "ESEMPIO",
  "Address": "702 SW 8th Street",
  "City": "Bentonville",
  "State": "Arkansas",
  "Zipcode": 72716,
  "Phone": "(800) 555-2797",
  "Fax": "(800) 555-2171",
  "Website": "http://www.nowebsitesupermart.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 2,
  "CompanyName": "Electronics Depot",
  "Address": "2455 Paces Ferry Road NW",
  "City": "Atlanta",
  "State": "Georgia",
  "Zipcode": 30339,
  "Phone": "(800) 595-3232",
  "Fax": "(800) 595-3231",
  "Website": "http://www.nowebsitedepot.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 3,
  "CompanyName": "K&S Music",
  "Address": "1000 Nicllet Mall",
  "City": "Minneapolis",
  "State": "Minnesota",
  "Zipcode": 55403,
  "Phone": "(612) 304-6073",
  "Fax": "(612) 304-6074",
  "Website": "http://www.nowebsitemusic.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 4,
  "CompanyName": "Tom's Club",
  "Address": "999 Lake Drive",
  "City": "Issaquah",
  "State": "Washington",
  "Zipcode": 98027,
  "Phone": "(800) 955-2292",
  "Fax": "(800) 955-2293",
  "Website": "http://www.nowebsitetomsclub.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 5,
  "CompanyName": "E-Mart",
  "Address": "3333 Beverly Rd",
  "City": "Hoffman Estates",
  "State": "Illinois",
  "Zipcode": 60179,
  "Phone": "(847) 286-2500",
  "Fax": "(847) 286-2501",
  "Website": "http://www.nowebsiteemart.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 6,
  "CompanyName": "Walters",
  "Address": "200 Wilmot Rd",
  "City": "Deerfield",
  "State": "Illinois",
  "Zipcode": 60015,
  "Phone": "(847) 940-2500",
  "Fax": "(847) 940-2501",
  "Website": "http://www.nowebsitewalters.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 7,
  "CompanyName": "StereoShack",
  "Address": "400 Commerce S",
  "City": "Fort Worth",
  "State": "Texas",
  "Zipcode": 76102,
  "Phone": "(817) 820-0741",
  "Fax": "(817) 820-0742",
  "Website": "http://www.nowebsiteshack.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 8,
  "CompanyName": "Circuit Town",
  "Address": "2200 Kensington Court",
  "City": "Oak Brook",
  "State": "Illinois",
  "Zipcode": 60523,
  "Phone": "(800) 955-2929",
  "Fax": "(800) 955-9392",
  "Website": "http://www.nowebsitecircuittown.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 9,
  "CompanyName": "Premier Buy",
  "Address": "7601 Penn Avenue South",
  "City": "Richfield",
  "State": "Minnesota",
  "Zipcode": 55423,
  "Phone": "(612) 291-1000",
  "Fax": "(612) 291-2001",
  "Website": "http://www.nowebsitepremierbuy.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 10,
  "CompanyName": "ElectrixMax",
  "Address": "263 Shuman Blvd",
  "City": "Naperville",
  "State": "Illinois",
  "Zipcode": 60563,
  "Phone": "(630) 438-7800",
  "Fax": "(630) 438-7801",
  "Website": "http://www.nowebsiteelectrixmax.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 11,
  "CompanyName": "Video Emporium",
  "Address": "1201 Elm Street",
  "City": "Dallas",
  "State": "Texas",
  "Zipcode": 75270,
  "Phone": "(214) 854-3000",
  "Fax": "(214) 854-3001",
  "Website": "http://www.nowebsitevideoemporium.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}, {
  "ID": 12,
  "CompanyName": "Screen Shop",
  "Address": "1000 Lowes Blvd",
  "City": "Mooresville",
  "State": "North Carolina",
  "Zipcode": 28117,
  "Phone": "(800) 445-6937",
  "Fax": "(800) 445-6938",
  "Website": "http://www.nowebsitescreenshop.com",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }]
}];


// ---------------------------------------------------------------------------------------

export class Task {
  ID: number;
  Subject: string;
  StartDate: string;
  DueDate: string;
  Status: string;
  Priority: string;
  Completion: number;
}

export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  Picture: string;
  BirthDate: string;
  HireDate: string;
  Notes: string;
  Address: string;
  State: string;
  City: string;
  Tasks: Task[];
}

let employees: Employee[] = [
  {
  "ID": 1,
  "FirstName": "John",
  "LastName": "Heart",
  "Prefix": "Mr.",
  "Position": "CEO",
  "Picture": "images/employees/01.png",
  "BirthDate": "1964/03/16",
  "HireDate": "1995/01/15",
  "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
  "Address": "351 S Hill St.",
  "State": "California",
  "City": "Los Angeles",
  "Tasks": [{
      "ID": 5,
      "Subject": "Choose between PPO and HMO Health Plan",
      "StartDate": "2013/02/15",
      "DueDate": "2013/04/15",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 75
  }, {
      "ID": 6,
      "Subject": "Google AdWords Strategy",
      "StartDate": "2013/02/16",
      "DueDate": "2013/02/28",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 7,
      "Subject": "New Brochures",
      "StartDate": "2013/02/17",
      "DueDate": "2013/02/24",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 22,
      "Subject": "Update NDA Agreement",
      "StartDate": "2013/03/14",
      "DueDate": "2013/03/16",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 52,
      "Subject": "Review Product Recall Report by Engineering Team",
      "StartDate": "2013/05/17",
      "DueDate": "2013/05/20",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }]
}, {
  "ID": 2,
  "FirstName": "Olivia",
  "LastName": "Peyton",
  "Prefix": "Mrs.",
  "Position": "Sales Assistant",
  "Picture": "images/employees/09.png",
  "BirthDate": "1981/06/03",
  "HireDate": "2012/05/14",
  "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
  "Address": "807 W Paseo Del Mar",
  "State": "California",
  "City": "Los Angeles",
  "Tasks": [{
      "ID": 3,
      "Subject": "Update Personnel Files",
      "StartDate": "2013/02/03",
      "DueDate": "2013/02/28",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 4,
      "Subject": "Review Health Insurance Options Under the Affordable Care Act",
      "StartDate": "2013/02/12",
      "DueDate": "2013/04/25",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 50
  }, {
      "ID": 21,
      "Subject": "Non-Compete Agreements",
      "StartDate": "2013/03/12",
      "DueDate": "2013/03/14",
      "Status": "Completed",
      "Priority": "Low",
      "Completion": 100
  }, {
      "ID": 50,
      "Subject": "Give Final Approval for Refunds",
      "StartDate": "2013/05/05",
      "DueDate": "2013/05/15",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }]
}, {
  "ID": 3,
  "FirstName": "Robert",
  "LastName": "Reagan",
  "Prefix": "Mr.",
  "Position": "CMO",
  "Picture": "images/employees/03.png",
  "BirthDate": "1974/09/07",
  "HireDate": "2002/11/08",
  "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
  "Address": "4 Westmoreland Pl.",
  "State": "Arkansas",
  "City": "Bentonville",
  "Tasks": [{
      "ID": 16,
      "Subject": "Deliver R&D Plans for 2013",
      "StartDate": "2013/03/01",
      "DueDate": "2013/03/10",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 74,
      "Subject": "Decide on Mobile Devices to Use in the Field",
      "StartDate": "2013/07/30",
      "DueDate": "2013/08/02",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 78,
      "Subject": "Try New Touch-Enabled WinForms Apps",
      "StartDate": "2013/08/11",
      "DueDate": "2013/08/15",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 117,
      "Subject": "Approval on Converting to New HDMI Specification",
      "StartDate": "2014/01/11",
      "DueDate": "2014/01/31",
      "Status": "Deferred",
      "Priority": "Normal",
      "Completion": 75
  }]
}, {
  "ID": 4,
  "FirstName": "Greta",
  "LastName": "Sims",
  "Prefix": "Ms.",
  "Position": "HR Manager",
  "Picture": "images/employees/04.png",
  "BirthDate": "1977/11/22",
  "HireDate": "1998/04/23",
  "Notes": "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
  "Address": "1700 S Grandview Dr.",
  "State": "Georgia",
  "City": "Atlanta",
  "Tasks": [{
      "ID": 20,
      "Subject": "Approve Hiring of John Jeffers",
      "StartDate": "2013/03/02",
      "DueDate": "2013/03/12",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 23,
      "Subject": "Update Employee Files with New NDA",
      "StartDate": "2013/03/16",
      "DueDate": "2013/03/26",
      "Status": "Need Assistance",
      "Priority": "Normal",
      "Completion": 90
  }, {
      "ID": 40,
      "Subject": "Provide New Health Insurance Docs",
      "StartDate": "2013/03/28",
      "DueDate": "2013/04/07",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }]
}, {
  "ID": 5,
  "FirstName": "Brett",
  "LastName": "Wade",
  "Prefix": "Mr.",
  "Position": "IT Manager",
  "Picture": "images/employees/05.png",
  "BirthDate": "1968/12/01",
  "HireDate": "2009/03/06",
  "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
  "Address": "1120 Old Mill Rd.",
  "State": "Idaho",
  "City": "Boise",
  "Tasks": [{
      "ID": 2,
      "Subject": "Prepare 3013 Marketing Plan",
      "StartDate": "2013/01/01",
      "DueDate": "2013/01/31",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 11,
      "Subject": "Rollout of New Website and Marketing Brochures",
      "StartDate": "2013/02/20",
      "DueDate": "2013/02/28",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 15,
      "Subject": "Review 2012 Sales Report and Approve 2013 Plans",
      "StartDate": "2013/02/23",
      "DueDate": "2013/02/28",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 81,
      "Subject": "Review Site Up-Time Report",
      "StartDate": "2013/08/24",
      "DueDate": "2013/08/30",
      "Status": "Completed",
      "Priority": "Urgent",
      "Completion": 100
  }]
}, {
  "ID": 6,
  "FirstName": "Sandra",
  "LastName": "Johnson",
  "Prefix": "Mrs.",
  "Position": "Controller",
  "Picture": "images/employees/06.png",
  "BirthDate": "1974/11/15",
  "HireDate": "2005/05/11",
  "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
  "Address": "4600 N Virginia Rd.",
  "State": "Utah",
  "City": "Beaver",
  "Tasks": [{
      "ID": 20,
      "Subject": "Approve Hiring of John Jeffers",
      "StartDate": "2013/03/02",
      "DueDate": "2013/03/12",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 23,
      "Subject": "Update Employee Files with New NDA",
      "StartDate": "2013/03/16",
      "DueDate": "2013/03/26",
      "Status": "Need Assistance",
      "Priority": "Normal",
      "Completion": 90
  }, {
      "ID": 40,
      "Subject": "Provide New Health Insurance Docs",
      "StartDate": "2013/03/28",
      "DueDate": "2013/04/07",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 138,
      "Subject": "Review HR Budget Company Wide",
      "StartDate": "2014/03/20",
      "DueDate": "2014/03/25",
      "Status": "In Progress",
      "Priority": "Normal",
      "Completion": 40
  }, {
      "ID": 145,
      "Subject": "Final Budget Review",
      "StartDate": "2014/03/26",
      "DueDate": "2014/03/27",
      "Status": "In Progress",
      "Priority": "High",
      "Completion": 25
  }]
}, {
  "ID": 7,
  "FirstName": "Kevin",
  "LastName": "Carter",
  "Prefix": "Mr.",
  "Position": "Shipping Manager",
  "Picture": "images/employees/07.png",
  "BirthDate": "1978/01/09",
  "HireDate": "2009/08/11",
  "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
  "Address": "424 N Main St.",
  "State": "California",
  "City": "San Diego",
  "Tasks": [{
      "ID": 24,
      "Subject": "Sign Updated NDA",
      "StartDate": "2013/03/20",
      "DueDate": "2013/03/25",
      "Status": "Completed",
      "Priority": "Urgent",
      "Completion": 100
  }, {
      "ID": 55,
      "Subject": "Review Overtime Report",
      "StartDate": "2013/06/10",
      "DueDate": "2013/06/14",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 71,
      "Subject": "Upgrade Server Hardware",
      "StartDate": "2013/07/22",
      "DueDate": "2013/07/31",
      "Status": "Completed",
      "Priority": "Urgent",
      "Completion": 100
  }, {
      "ID": 72,
      "Subject": "Upgrade Personal Computers",
      "StartDate": "2013/07/24",
      "DueDate": "2014/04/30",
      "Status": "In Progress",
      "Priority": "Normal",
      "Completion": 85
  }]
}, {
  "ID": 8,
  "FirstName": "Cynthia",
  "LastName": "Stanwick",
  "Prefix": "Ms.",
  "Position": "HR Assistant",
  "Picture": "images/employees/08.png",
  "BirthDate": "1985/06/05",
  "HireDate": "2008/03/24",
  "Notes": "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
  "Address": "2211 Bonita Dr.",
  "State": "Arkansas",
  "City": "Little Rock",
  "Tasks": [{
      "ID": 1,
      "Subject": "Prepare 2013 Financial",
      "StartDate": "2013/01/15",
      "DueDate": "2013/01/31",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 25,
      "Subject": "Sign Updated NDA",
      "StartDate": "2013/03/20",
      "DueDate": "2013/03/25",
      "Status": "Completed",
      "Priority": "Urgent",
      "Completion": 100
  }, {
      "ID": 35,
      "Subject": "Update Revenue Projections",
      "StartDate": "2013/03/24",
      "DueDate": "2013/04/07",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 99,
      "Subject": "Submit D&B Number to ISP for Credit Approval",
      "StartDate": "2013/11/04",
      "DueDate": "2013/11/07",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }]
}, {
  "ID": 9,
  "FirstName": "Kent",
  "LastName": "Samuelson",
  "Prefix": "Dr.",
  "Position": "Ombudsman",
  "Picture": "images/employees/02.png",
  "BirthDate": "1972/09/11",
  "HireDate": "2009/04/22",
  "Notes": "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
  "Address": "12100 Mora Dr",
  "State": "Missouri",
  "City": "St. Louis",
  "Tasks": [{
      "ID": 12,
      "Subject": "Update Sales Strategy Documents",
      "StartDate": "2013/02/20",
      "DueDate": "2013/02/22",
      "Status": "Completed",
      "Priority": "Normal",
      "Completion": 100
  }, {
      "ID": 26,
      "Subject": "Sign Updated NDA",
      "StartDate": "2013/03/20",
      "DueDate": "2013/03/25",
      "Status": "Need Assistance",
      "Priority": "Urgent",
      "Completion": 25
  }, {
      "ID": 36,
      "Subject": "Review Revenue Projections",
      "StartDate": "2013/03/25",
      "DueDate": "2013/04/06",
      "Status": "Completed",
      "Priority": "High",
      "Completion": 100
  }, {
      "ID": 60,
      "Subject": "Refund Request Template",
      "StartDate": "2013/06/17",
      "DueDate": "2014/04/01",
      "Status": "Deferred",
      "Priority": "Normal",
      "Completion": 0
  }]
}];

// ---------------------------------------------------------------------------------------
  

// ---------------------------------------------------------------------------------------


@Injectable({
  providedIn: 'root'
})

export class DevExtremeServiceService {
  dataSource: any = {};
  dataSourceObj: any = {};
  private APIURLPeople:string = 'http://localhost:3000/people';
  private APIURL = 'http://localhost:3000';
  //@Output() JsonCompleto: EventEmitter<any> = new EventEmitter();

  getCustomers() {
    return customers;
  }

  getEmployees(): Employee[] {
    return employees;
  }

  getDataSource() {
    //return new ODataStore({
    return {
      store: {
          type: 'odata',
          url: 'https://js.devexpress.com/Demos/DevAV/odata/Products'
      },
      select: [
          'Product_ID',
          'Product_Name',
          'Product_Cost',
          'Product_Sale_Price',
          'Product_Retail_Price',
          'Product_Current_Inventory'
      ],
      filter: ['Product_Current_Inventory', '>', 0]
    }
  }

  getDataSource2() {
    return this.dataSource;    
  }



  constructor (public http: HttpClient) {
    
    this.dataSource.store = new CustomStore({
      load: function (loadOptions: any) {
  
        var params = '?';
  
                params += 'skip=' + loadOptions.skip || 0;
                params += '&take=' + loadOptions.take || 12;
  
                if(loadOptions.sort) {
                    params += '&orderby=' + loadOptions.sort[0].selector;
                    if(loadOptions.sort[0].desc) {
                        params += ' desc';
                    }
                }
          //console.log('http://localhost:3000/people' + params);
  
  
          return http.get('http://localhost:3000/people')
              .toPromise()
              .then((data: any) => {
                  //this.dataSourceObj = Object.assign(data);
                  //this.getDataSource3(data);
                  console.log("Service", data)
                  return {
                      data: data,
                      totalCount: Object.keys(data).length
                  }
              })
              .catch(error => { throw 'Data Loading Error' });
          }
      });
  }

  
  getPeople() {
    //return this.utenti;
    return this.http.get('http://localhost:3000/people');
  } 

}
