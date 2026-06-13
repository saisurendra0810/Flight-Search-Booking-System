function UserAuthentication() {
  return (
    <div className="page">

      <h1>Login</h1>

      <form className="booking-form">

        <input
          type="text"
          placeholder="Username"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}

export default UserAuthentication;