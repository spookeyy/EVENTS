//works with forms

function Login(){
    function handleSubmit(e){
      e.preventDefault(); //to prevent the form from making a network request.
      console.log("Submit");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter username" />
            <input type="password" name="password" placeholder="Enter password" />
            <button>Login</button>
        </form>
    )
}