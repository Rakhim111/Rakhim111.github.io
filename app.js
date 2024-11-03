

// Create a virtual DOM and window




const contractAddress = '0x52dc69252928ec7436E62D58FfBD220aF48f3660';

// Replace with your contract's ABI
const contractABI =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "resourceId",
				"type": "uint256"
			}
		],
		"name": "executeRequest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "functionality",
				"type": "string"
			}
		],
		"name": "placeAvailableResources",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "surname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "registerConsumer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "registerProvider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "n",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "k",
				"type": "uint256"
			}
		],
		"name": "binomialCoeff",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "n",
				"type": "uint256"
			}
		],
		"name": "calculateBinomialNewton",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "terms",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			}
		],
		"name": "calculateTaylorCos",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "terms",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			}
		],
		"name": "calculateTaylorCot",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "terms",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			}
		],
		"name": "calculateTaylorExp",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "terms",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			}
		],
		"name": "calculateTaylorSin",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "terms",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			}
		],
		"name": "calculateTaylorTan",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "c",
				"type": "uint256"
			}
		],
		"name": "checkTriangleExistence",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "consumerCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "consumers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "surname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "n",
				"type": "uint256"
			}
		],
		"name": "factorial",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "loginConsumer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "loginProvider",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "base",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "exponent",
				"type": "uint256"
			}
		],
		"name": "power",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "providerCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "providers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestForResources",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "functionality",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "provider",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isAvailable",
						"type": "bool"
					}
				],
				"internalType": "struct ComputationalResourceSharing.Resource[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resourceCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "resources",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "functionality",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "provider",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Initialize Web3
if (typeof window.ethereum !== "undefined") {
	window.web3 = new Web3(window.ethereum);
	ethereum
	  .request({ method: "eth_requestAccounts" })
	  .then((accounts) => {
		window.account = accounts[0];
		document.getElementById("accountAddress").innerText = window.account;
		initContract();
	  })
	  .catch((error) => {
		console.error("User denied account access", error);
	  });
  } else {
	console.log("Please install MetaMask to use this dApp!");
  }
 // empty dependencies array means "run this once on first mount"



  let contract;
  
  function initContract() {
	contract = new web3.eth.Contract(contractABI, contractAddress);
	
  }
  
  async function loginConsumer() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Call the smart contract's loginConsumer function
        const result = await contract.methods.loginConsumer(email, password).call({ from: account });

        // Handle login result
        if (result === '1') {
            message.style.color = 'green';
            message.textContent = 'Login successful!';
            // Redirect to index.html after a successful login
            setTimeout(() => {
                window.location.href = 'https://rakhim111.github.io./index1.html';
            }, 1000); // Redirects after 1 second (optional delay for user feedback)
        } else {
            message.style.color = 'red';
            message.textContent = 'Login failed. Please check your credentials.';
        }
    } catch (error) {
        console.error('Error during login:', error);
        message.style.color = 'red';
        message.textContent = 'An error occurred. Please try again.';
    }
}
async function registerConsumer() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const regMessage = document.getElementById('regMessage');
    
    try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Call the smart contract's registerConsumer function
        await contract.methods.registerConsumer(name, surname, email, password).send({ from: account });

        regMessage.style.color = 'green';
        regMessage.textContent = 'Registration successful! You can now log in.';
        
        // Optionally, clear the registration form
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('regEmail').value = '';
        document.getElementById('regPassword').value = '';

    } catch (error) {
        console.error('Error during registration:', error);
        regMessage.style.color = 'red';
        regMessage.textContent = 'An error occurred during registration. Please try again.';
    }
}

  async function calculateTaylorSin() {
    const terms = document.getElementById('terms').value;
    const xValue = document.getElementById('xValue').value;
    
    if (!terms || !xValue) {
        alert("Please enter both terms and x value.");
        return;
    }

    try {
        // Get the user's MetaMask account
        const accounts = await web3.eth.getAccounts();
        const userAccount = accounts[0];
        
        // Estimate gas
        const gasEstimate = await contract.methods.calculateTaylorSin(terms, xValue).estimateGas({ from: userAccount });

        // Send the transaction through MetaMask (this ensures the user pays gas)
        const txReceipt = await contract.methods.calculateTaylorSin(terms, xValue)
            .send({ 
                from: userAccount, 
                gas: gasEstimate 
            });
        
        console.log("Transaction successful:", txReceipt);

        // After the transaction succeeds, call the function to get the result
        const result = await contract.methods.calculateTaylorSin(terms, xValue).call({ from: userAccount });
        
        // Display the calculated result
        document.getElementById('result').textContent = `${result}`;
        
    } catch (error) {
        console.error("Error calculating Taylor Sin:", error);
        alert("There was an error executing the transaction. Check the console for details.");
    }
}



async function calculateTaylorCos() {
    const terms = document.getElementById('terms').value;
    const xValue = document.getElementById('xValue').value;
    
    if (!terms || !xValue) {
        alert("Please enter both terms and x value.");
        return;
    }

    try {
        // Get the user's MetaMask account
        const accounts = await web3.eth.getAccounts();
        const userAccount = accounts[0];
        
        // Estimate gas
        const gasEstimate = await contract.methods.calculateTaylorCos(terms, xValue).estimateGas({ from: userAccount });

        // Send the transaction through MetaMask (this ensures the user pays gas)
        const txReceipt = await contract.methods.calculateTaylorCos(terms, xValue)
            .send({ 
                from: userAccount, 
                gas: gasEstimate 
            });
        
        console.log("Transaction successful:", txReceipt);

        // After the transaction succeeds, call the function to get the result
        const result = await contract.methods.calculateTaylorCos(terms, xValue).call({ from: userAccount });
        
        // Display the calculated result
        document.getElementById('result').textContent = `${result}`;
        
    } catch (error) {
        console.error("Error calculating Taylor Sin:", error);
        alert("There was an error executing the transaction. Check the console for details.");
    }
}
async function calculateTaylorTan() {
    const terms = document.getElementById('terms').value;
    const xValue = document.getElementById('xValue').value;
    
    if (!terms || !xValue) {
        alert("Please enter both terms and x value.");
        return;
    }

    try {
        // Get the user's MetaMask account
        const accounts = await web3.eth.getAccounts();
        const userAccount = accounts[0];
        
        // Estimate gas
        const gasEstimate = await contract.methods.calculateTaylorTan(terms, xValue).estimateGas({ from: userAccount });

        // Send the transaction through MetaMask (this ensures the user pays gas)
        const txReceipt = await contract.methods.calculateTaylorTan(terms, xValue)
            .send({ 
                from: userAccount, 
                gas: gasEstimate 
            });
        
        console.log("Transaction successful:", txReceipt);

        // After the transaction succeeds, call the function to get the result
        const result = await contract.methods.calculateTaylorTan(terms, xValue).call({ from: userAccount });
        
        // Display the calculated result
        document.getElementById('result').textContent = `${result}`;
        
    } catch (error) {
        console.error("Error calculating Taylor Sin:", error);
        alert("There was an error executing the transaction. Check the console for details.");
    }
}
async function calculateTaylorCot() {
    const terms = document.getElementById('terms').value;
    const xValue = document.getElementById('xValue').value;
    
    if (!terms || !xValue) {
        alert("Please enter both terms and x value.");
        return;
    }

    try {
        // Get the user's MetaMask account
        const accounts = await web3.eth.getAccounts();
        const userAccount = accounts[0];
        
        // Estimate gas
        const gasEstimate = await contract.methods.calculateTaylorCot(terms, xValue).estimateGas({ from: userAccount });

        // Send the transaction through MetaMask (this ensures the user pays gas)
        const txReceipt = await contract.methods.calculateTaylorCot(terms, xValue)
            .send({ 
                from: userAccount, 
                gas: gasEstimate 
            });
        
        console.log("Transaction successful:", txReceipt);

        // After the transaction succeeds, call the function to get the result
        const result = await contract.methods.calculateTaylorCot(terms, xValue).call({ from: userAccount });
        
        // Display the calculated result
        document.getElementById('result').textContent = `${result}`;
        
    } catch (error) {
        console.error("Error calculating Taylor Sin:", error);
        alert("There was an error executing the transaction. Check the console for details.");
    }
}
  // List Model Form Submission


   
