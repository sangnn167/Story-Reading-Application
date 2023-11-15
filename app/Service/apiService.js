
const LOGIN_API_URL = "https://64610d09491f9402f49d853a.mockapi.io/user";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(LOGIN_API_URL);
    const data = await response.json();
    const user = data.find((u) => u.email === email && u.password === password);

    return user;
  } catch (error) {
    console.error("Error while calling login API:", error);
    throw error;
  }
};
export const signupUserr = async (userData) => {
  try {
    const response = await fetch('https://64610d09491f9402f49d853a.mockapi.io/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message || 'Unknown error'}`);
  }
};


