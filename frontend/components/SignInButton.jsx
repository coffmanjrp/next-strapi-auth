import Link from 'next/link';
import { signIn } from 'next-auth/client';
import styles from '../styles/Home.module.css';

const SignInButton = ({ session }) => {
  if (session) {
    return false;
  }

  const handleSignIn = (e) => {
    e.preventDefault();

    signIn();
  };

  return (
    <div>
      <Link href="/api/auth/signin">
        <button
          type="button"
          className={styles.btn}
          onClick={(e) => handleSignIn(e)}
        >
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default SignInButton;
