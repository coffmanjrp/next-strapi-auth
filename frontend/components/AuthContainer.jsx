import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import styles from '../styles/Home.module.css';

const AuthContainer = ({ session }) => {
  return (
    <div className={styles.auth}>
      <SignInButton session={session} />
      <SignOutButton session={session} />
      <div className={styles.text}>
        {!session ? `You aren't authorized.` : `Hi, ${session.user.name} !`}
      </div>
    </div>
  );
};

export default AuthContainer;
