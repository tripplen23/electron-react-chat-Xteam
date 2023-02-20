import React from "react";
import '../index.scss'

export default function Login () {
  return (
    <div className="form-wrapper">
      <form className="form-name">
        
        <h1>LOGIN</h1>

        <div className="gg">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0001 6.13847C12.0001 5.73059 11.9664 5.32051 11.8944 4.91925H6.12061V7.22981H9.42697C9.28977 7.97501 8.84892 8.63422 8.20339 9.05312V10.5523H10.176C11.3343 9.5073 12.0001 7.96398 12.0001 6.13847Z" fill="#4285F4"/>
            <path d="M6.12125 12.0008C7.77219 12.0008 9.16446 11.4694 10.1789 10.5523L8.20629 9.05304C7.65748 9.41903 6.94897 9.62627 6.1235 9.62627C4.52655 9.62627 3.17251 8.57021 2.68668 7.15036H0.651123V8.69588C1.69027 10.722 3.80679 12.0008 6.12125 12.0008Z" fill="#34A853"/>
            <path d="M2.68446 7.15031C2.42804 6.40511 2.42804 5.59818 2.68446 4.85298V3.30746H0.651152C-0.217051 5.0029 -0.217051 7.00039 0.651152 8.69583L2.68446 7.15031Z" fill="#FBBC04"/>
            <path d="M6.12125 2.3749C6.99395 2.36167 7.83742 2.68356 8.46945 3.27443L10.2171 1.56135C9.11048 0.542768 7.64173 -0.0172335 6.12125 0.000404345C3.80679 0.000404345 1.69027 1.27915 0.651123 3.3075L2.68443 4.85302C3.16801 3.43097 4.5243 2.3749 6.12125 2.3749Z" fill="#EA4335"/>
          </svg>
          <p>Sign in with Google</p>
        </div>
        
        <div className="divider">
          <hr />
        </div>
        
        <div className="input-wrapper">
          <label for="email">Your email</label>
          <input className="input-box" name="email" placeholder="nguyenvanA@gmail.com" />
        </div>
        
        <div className="input-wrapper">
          <div className="label-level">
            <label for="password">Password</label>
            <span>Forgot password?</span>
          </div>
          <input placeholder="*********" type="password" className="input-box" name="password" />
        </div>
        
        <button>
            Login
        </button>

      </form>
    </div>
  )
}