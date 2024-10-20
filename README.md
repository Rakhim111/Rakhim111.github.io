# Math-Alem
Prototype of smart contract


Group:IT-2205
Members:Azimzhanov Rakhim, Zhanibekova Zhanel





![Снимок экрана (508)](https://github.com/user-attachments/assets/a277f91b-e328-44e0-b65e-974bf42f3f34)




![Снимок экрана (509)](https://github.com/user-attachments/assets/179366ff-b770-42e8-9b17-a87891e80a36)





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
