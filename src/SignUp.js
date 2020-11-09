import React from 'react';

function SignUp() {
    return(
        <div>
            <main>
                <div class="signup">
                    <h2>Create Account</h2>
                    <form class="signup-form">
                        <label for="user">Create Username:</label>
                        <input type="text" id="user" name="user" />
                        <label for="password">Create Password:</label>
                        <input type="text" id="password" name="password" />
                        {/* <!-- <input type="submit" value="Sign Up"> --> */}
                        <div class="container">
                            <div class="center">
                            <button class="btn">
                                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                    <polyline points="170,1 170,2 172,3 174,4 175,5 177,6 179,14 179,48 177,52 175,55 174,56 172,58 170,58, 168,59 13,60 5,55 3,53 1,50 0,14 5,5 10,2 13,1 170,1" class="bg-line" />
                                    <polyline points="170,1 170,2 172,3 174,4 175,5 177,6 179,14 179,48 177,52 175,55 174,56 172,58 170,58, 168,59 13,60 5,55 3,53 1,50 0,14 5,5 10,2 13,1 170,1" class="hl-line" />
                                </svg>
                                <span>SIGN UP</span>
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default SignUp;