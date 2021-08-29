import Link from 'next/link';
import { signOut } from 'next-auth/client';
import styles from '../styles/Home.module.css';

const SignOutButton = ({ session }) => {
  if (!session) {
    return false;
  }

  const handleSignOut = (e) => {
    e.preventDefault();

    signOut();
  };

  return (
    <div>
      <Link href="/api/auth/signout">
        <button
          type="button"
          className={styles.btn}
          onClick={(e) => handleSignOut(e)}
        >
          Sign Out
        </button>
      </Link>
    </div>
  );
};

export default SignOutButton;
