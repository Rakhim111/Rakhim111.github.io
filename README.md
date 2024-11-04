# Mat-Alem
Prototype of smart contract


Group:IT-2205
Members:Azimzhanov Rakhim, Zhanibekova Zhanel








![Снимок экрана 2024-11-04 135451](https://github.com/user-attachments/assets/5122547f-d823-46cb-bf77-352c81dd1ae2)
![Снимок экрана 2024-11-04 135436](https://github.com/user-attachments/assets/c99087bf-6709-4319-9255-50e1cd4266bb)
![Снимок экрана 2024-11-04 135424](https://github.com/user-attachments/assets/6d174d8e-71c0-4a18-900e-f925e31373ea)
![Снимок экрана 2024-11-04 135459](https://github.com/user-attachments/assets/94f89e06-ab5b-478d-ae94-f0b228e5ca2c)






Our idea is creating web application, which provides compilation resources with specific cost so consumers may buy it and make some mathematical expressions that their computers “can not execute” (those mathematical expressions can actually execute any computer, and we are doing it for showing the idea). Also provide information about CPU and RAM loading.

Technologies that will be used:
Solidity smart contract for storing users data protected
Smart contract will be deployed with metamask account of ganache
Backend logic that connects with solidity smart contract will be executed on Web3.js
Frontend will be standard html pages
Python library to track load of CPU and RAM
Nodemailer for verification of accounts 


Models:
Available resources { id, price, functionality  }
Provider {id, login, password}
Consumer {id, Name, Surname, email, password}
Functions:
PlaceAvaibaleResources()
RequestForResources(value)
ExecuteRequest()

Math expressions:
Maclaurin series
e^x
Sin(x)
Cos(x)
Tan(x)
Cot(x)
Ln(1+x)
(x+1)^z
Gauss Seidal
Relaxation
Jacobi
Triangle existence maybe.
