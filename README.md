# AppCloud

## Initialize the project

``` npm init ```


## Install the packages

``` npm install <package_name> ```

## Run the Api
``` node app.js ```

### Go to 
* localhost/3000/hepatitis/exams?id=<num_id>
* localhost/3000/fibrose?id=<num_id>
* localhost/3000/hepatitis/type?id=<num_id>



## Requests

### All requests take id as param

### Patient side


* "/patient/hepatitisexams" : sends "True" or "False" if the patient has hepatitis

* "/patient/hepatitistype" : sends "True" or "False" if the patient has hepatitis type C

* "/patient/fibrosis" : sends message with the type of fibrosis the user has according to his exams


### Doctor side

* "/doctor/patientsbios" : sends patients Bios in json format

* "/doctor/patientsdispat" : sends patients Dispat in json format

* "/doctor/patientsindis" : sends patients Indis in json format

## Example

``` localhost:3000/patient/fibrosis?id=19 ``` 


