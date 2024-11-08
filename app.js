

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

        // If login is successful, save all user data
        if (result === '1') {
            message.style.color = 'green';
            message.textContent = 'Login successful!';

            // Save user information to localStorage
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
          
            
            // Redirect to profile page after successful login
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 1000);
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

    // Function to add "Calculate Sin(x)" and "Calculate Cos(x)" buttons permanently with email display
    function addAvailableResources() {
		// Retrieve user email from localStorage
		const userEmail = localStorage.getItem("userEmail");
  
		// Store a flag in localStorage to remember that the button was clicked
		localStorage.setItem('resourcesAdded', 'true');
  
		// Add the buttons and email
		displayResourceButtons(userEmail);
  
		// Remove the "Place Available Resources" button
		const resourceButton = document.getElementById('calculate-sin-button1');
		if (resourceButton) {
		  resourceButton.remove();
		  localStorage.setItem('resourceButtonRemoved', 'true');
		}
	  }
  
	  // Function to display the buttons on the page
	  function displayResourceButtons(userEmail) {
		// Check if the buttons already exist to prevent duplicates
		if (!document.getElementById('calculate-sin-button')) {
		  const resourceContainer = document.createElement('div');
		  resourceContainer.innerHTML = `
		
			<button id="calculate-sin-button1" onclick="calculateTaylorSin()" style="margin-left: 600px;">Calculate Sin(x) by ${userEmail}</button>
			<button id="calculate-cos-button1" onclick="calculateTaylorCos()">Calculate Cos(x) by ${userEmail}</button>
		  `;
		  document.body.appendChild(resourceContainer);
		}
	  }
  
	  // Check localStorage on page load to see if buttons and email should be added, and if the button should be removed
	  document.addEventListener('DOMContentLoaded', () => {
		if (localStorage.getItem('calculate-sin-button1') === 'true') {
		  const userEmail = localStorage.getItem("userEmail");
		  displayResourceButtons(userEmail);
		}
		if (localStorage.getItem('calculate-sin-button1') === 'true') {
		  const resourceButton = document.getElementById('resourceButton');
		  if (resourceButton) {
			resourceButton.remove();
		  }
		}
	  });

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



  app.get('/resources', (req, res) => {
    const cpuLoad = os.loadavg()[0]; // Load average over the last 1 minute
    const totalMem = os.totalmem(); // Total memory in bytes
    const freeMem = os.freemem(); // Free memory in bytes
    const usedMem = totalMem - freeMem; // Used memory in bytes

    res.json({
        cpuLoad: ((cpuLoad * 100) / os.cpus().length).toFixed(2), // CPU load as percentage
        ramUsage: (usedMem / 1024 / 1024).toFixed(2), // RAM usage in MB
        totalRam: (totalMem / 1024 / 1024).toFixed(2) // Total RAM in MB
    });
});
